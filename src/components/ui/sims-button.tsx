import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { PlumbobLoader } from './plumbob-loader';

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground shadow-sims hover:shadow-sims-hover hover:bg-primary-light",
        secondary: "bg-secondary text-secondary-foreground shadow-sims hover:shadow-sims-hover hover:bg-secondary-light",
        accent: "bg-accent text-accent-foreground shadow-sims hover:shadow-sims-hover hover:bg-accent-light",
        ghost: "hover:bg-primary/10 hover:text-primary",
      },
      size: {
        sm: "h-8 px-3 text-xs",
        md: "h-10 px-4",
        lg: "h-12 px-6 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface SimsButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
  children: React.ReactNode;
}

const SimsButton = React.forwardRef<HTMLButtonElement, SimsButtonProps>(
  ({ className, variant, size, asChild = false, isLoading = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={props.disabled || isLoading}
        {...props}
      >
        <div className="flex items-center justify-center gap-2">
          {isLoading && <PlumbobLoader size="sm" />}
          {children}
        </div>
      </Comp>
    );
  }
);

SimsButton.displayName = "SimsButton";

export { SimsButton, buttonVariants }; 