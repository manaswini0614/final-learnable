import { cn } from "@/lib/utils";

interface PlumbobLoaderProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const PlumbobLoader = ({ size = 'md', className }: PlumbobLoaderProps) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  return (
    <div className={cn("relative", className)}>
      <div className={cn(
        sizeClasses[size],
        "relative animate-rotate-plumbob"
      )}>
        {/* Plumbob Shape */}
        <svg
          viewBox="0 0 24 24"
          className="w-full h-full animate-plumbob-glow fill-sims-plumbob"
        >
          <path d="M12 2L22 8V16L12 22L2 16V8L12 2Z" />
        </svg>
        
        {/* Inner Glow */}
        <div className="absolute inset-0 bg-plumbob-pattern opacity-50" />
      </div>
      
      {/* Reflection */}
      <div className={cn(
        sizeClasses[size],
        "absolute top-0 left-0 animate-rotate-plumbob",
        "opacity-30 blur-sm"
      )}>
        <svg
          viewBox="0 0 24 24"
          className="w-full h-full fill-white"
        >
          <path d="M12 2L22 8V16L12 22L2 16V8L12 2Z" />
        </svg>
      </div>
    </div>
  );
}; 