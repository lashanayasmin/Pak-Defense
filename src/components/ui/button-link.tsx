import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import { buttonBase, buttonSizes } from "@/components/ui/button-shared";

const buttonVariants = cva(buttonBase, {
  variants: {
    variant: {
      primary:
        "bg-gold-500 text-navy-950 shadow-md shadow-gold-500/30 hover:bg-gold-400 hover:-translate-y-0.5",
      secondary:
        "bg-army-600 text-white shadow-md shadow-army-600/25 hover:bg-army-500 hover:-translate-y-0.5",
      outline: "border-2 border-army-600 text-army-800 hover:bg-army-50",
      ghost: "text-army-800 hover:bg-army-50",
      "outline-white": "border-2 border-white/70 text-white hover:bg-white/10",
    },
    size: {
      ...buttonSizes,
      lg: "h-14 px-8 text-base",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "default",
  },
});

export interface ButtonLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {
  href: string;
}

const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ className, variant, size, href, children, ...props }, ref) => {
    return (
      <Link
        href={href}
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      >
        {children}
      </Link>
    );
  }
);
ButtonLink.displayName = "ButtonLink";

export { ButtonLink, buttonVariants as buttonLinkVariants };
