import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const badgeVariants = cva(
  "inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-full border px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider transition-colors [&>svg]:size-3",
  {
    variants: {
      variant: {
        default: "border-transparent bg-navy-900 text-white",
        army: "border-army-200 bg-army-50 text-army-800",
        navy: "border-navy-200 bg-navy-50 text-navy-800",
        sky: "border-sky-200 bg-sky-50 text-sky-800",
        gold: "border-gold-200 bg-gold-50 text-gold-800",
        outline: "border-slate-200 bg-white text-slate-600",
        female: "border-rose-200 bg-rose-50 text-rose-800",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({
  className,
  variant,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return (
    <span
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
