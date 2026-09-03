import * as React from "react";
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
      white: "bg-white text-army-900 hover:bg-army-50 hover:-translate-y-0.5",
    },
    size: {
      ...buttonSizes,
      lg: "h-13 px-8 text-base",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "default",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
