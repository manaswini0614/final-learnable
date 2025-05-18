import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cardVariants = cva(
  "rounded-xl border bg-card text-card-foreground shadow transition-all duration-300",
  {
    variants: {
      variant: {
        default: "shadow-sims hover:shadow-sims-hover",
        interactive: "cursor-pointer shadow-sims hover:shadow-sims-hover hover:-translate-y-1",
        ghost: "border-none shadow-none hover:bg-accent/5",
      },
      padding: {
        default: "p-6",
        sm: "p-4",
        lg: "p-8",
        none: "p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      padding: "default",
    },
  }
);

export interface SimsCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const SimsCard = React.forwardRef<HTMLDivElement, SimsCardProps>(
  ({ className, variant, padding, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardVariants({ variant, padding, className }))}
      {...props}
    />
  )
);

SimsCard.displayName = "SimsCard";

export { SimsCard, cardVariants }; 