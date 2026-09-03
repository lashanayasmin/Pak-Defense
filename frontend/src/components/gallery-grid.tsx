"use client";

import * as React from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/reveal";
import { FILTERS, GALLERY_ITEMS, type Filter } from "@/lib/content/gallery";

type LightboxState = { index: number } | null;

export function GalleryGrid() {
  const [filter, setFilter] = React.useState<Filter>("All");
  const [state, setState] = React.useState<LightboxState>(null);

  const filtered = React.useMemo(
    () =>
      GALLERY_ITEMS.filter(
        (item) => filter === "All" || item.category === filter
      ),
    [filter]
  );

  const active = state?.index ?? null;

  const close = React.useCallback(() => setState(null), []);

  const open = React.useCallback((index: number) => setState({ index }), []);

  const move = React.useCallback(
    (dir: 1 | -1) => {
      if (filtered.length === 0) return;
      setState((prev) => {
        if (!prev) return prev;
        const next = (prev.index + dir + filtered.length) % filtered.length;
        return { index: next };
      });
    },
    [filtered.length]
  );

  React.useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, close, move]);

  const current = active !== null ? filtered[active] : undefined;

  return (
    <>
      <p className="text-sm font-semibold uppercase tracking-widest text-army-700">
        Browse the album
      </p>

      {/* Filters */}
      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {FILTERS.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setFilter(c)}
            aria-pressed={filter === c}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
              filter === c
                ? "bg-army-600 text-white"
                : "bg-army-50 text-army-800 hover:bg-army-100"
            )}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Grid */}
      <Reveal className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger>
        {filtered.map((item, index) => (
          <button
            key={item.src}
            type="button"
            onClick={() => open(index)}
            aria-label={`View ${item.caption}`}
            className="hover-lift group relative aspect-[4/3] overflow-hidden border border-slate-200 text-left"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-navy-950/85 via-transparent to-transparent p-5 opacity-0 transition-opacity group-hover:opacity-100">
              <p className="text-sm font-semibold text-white">
                {item.caption}
              </p>
              <p className="text-xs font-medium uppercase tracking-wider text-gold-300">
                {item.category}
              </p>
            </div>
          </button>
        ))}
      </Reveal>

      {/* Lightbox */}
      {current ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.caption}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-950/90 p-4"
          onClick={close}
        >
          <button
            type="button"
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            onClick={close}
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
          <button
            type="button"
            className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            onClick={(e) => {
              e.stopPropagation();
              move(-1);
            }}
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <div onClick={(e) => e.stopPropagation()} className="w-full max-w-3xl">
            <div className="relative h-[60vh] w-full overflow-hidden rounded-2xl">
              <Image
                src={current.src}
                alt={current.alt}
                fill
                sizes="80vw"
                className="object-contain"
              />
            </div>
            <p className="mt-4 text-center text-base font-semibold text-white">
              {current.caption}
            </p>
          </div>
          <button
            type="button"
            className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            onClick={(e) => {
              e.stopPropagation();
              move(1);
            }}
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      ) : null}
    </>
  );
}
