import { cn } from "@/lib/utils";
import { PlumbobLoader } from "./PlumbobLoader";

interface SimsCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  icon?: string;
  showPlumbob?: boolean;
  active?: boolean;
  loading?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export const SimsCard = ({
  title,
  subtitle,
  icon,
  showPlumbob = false,
  active = false,
  loading = false,
  className,
  children,
  ...props
}: SimsCardProps) => {
  return (
    <div
      className={cn(
        "relative p-6 bg-sims-ui-light rounded-xl transition-all duration-300",
        "border border-sims-ui-border",
        "hover:shadow-sims-hover hover:animate-hover-card",
        active && "shadow-sims border-sims-green",
        className
      )}
      {...props}
    >
      {/* Plumbob Decoration */}
      {showPlumbob && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <PlumbobLoader size="sm" />
        </div>
      )}

      {/* Loading State */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/80 rounded-xl backdrop-blur-sm">
          <PlumbobLoader size="lg" />
        </div>
      )}

      {/* Card Header */}
      {(title || subtitle || icon) && (
        <div className="mb-4">
          <div className="flex items-center gap-3">
            {icon && (
              <div className="w-10 h-10 rounded-lg bg-sims-pattern flex items-center justify-center text-2xl">
                {icon}
              </div>
            )}
            <div>
              {title && (
                <h3 className="text-lg font-sims bg-clip-text text-transparent bg-sims-gradient">
                  {title}
                </h3>
              )}
              {subtitle && (
                <p className="text-sm text-gray-600">{subtitle}</p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Card Content */}
      <div className="relative">
        {children}
      </div>

      {/* Bottom Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-sims-gradient opacity-20 rounded-b-xl" />
    </div>
  );
}; 