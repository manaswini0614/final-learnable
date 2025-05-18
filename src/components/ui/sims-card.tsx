import React from 'react';

interface SimsCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'default' | 'hover' | 'interactive';
  className?: string;
}

export function SimsCard({ 
  children, 
  variant = 'default', 
  className = '',
  ...props 
}: SimsCardProps) {
  const variantClasses = {
    default: 'sims-card',
    hover: 'sims-card hover:scale-105',
    interactive: 'sims-card cursor-pointer active:scale-95'
  };

  return (
    <div 
      className={`${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
} 