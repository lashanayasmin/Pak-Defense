"use client";

import * as React from "react";
import { cn } from "@/lib/cn";
import { useReveal } from "@/lib/use-reveal";

type Direction = "up" | "down" | "left" | "right" | "fade";

interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  direction?: Direction;
  stagger?: boolean;
  /** Optional transition delay in milliseconds applied to the reveal. */
  delay?: number;
}

export function Reveal({
  as: Tag = "div",
  direction = "up",
  stagger = false,
  delay = 0,
  className,
  children,
  style,
  ...props
}: RevealProps) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: delay ? `${delay}ms` : undefined, ...style }}
      className={cn(
        stagger ? "reveal-stagger" : `reveal reveal--${direction}`,
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
