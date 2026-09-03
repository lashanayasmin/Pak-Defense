"use client";

import * as React from "react";

const DEFAULT_OPTIONS: IntersectionObserverInit = {
  threshold: 0.15,
  rootMargin: "0px 0px -40px 0px",
};

export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options?: IntersectionObserverInit
) {
  const ref = React.useRef<T | null>(null);
  const optionsRef = React.useRef<IntersectionObserverInit | undefined>(options);

  React.useEffect(() => {
    optionsRef.current = options;
  }, [options]);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { ...DEFAULT_OPTIONS, ...optionsRef.current }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
