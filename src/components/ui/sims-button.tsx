import React from 'react';
import { PlumbobLoader } from './plumbob-loader';

interface SimsButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  className?: string;
}

const variantClasses = {
  primary: 'sims-button',
  secondary: 'sims-button bg-secondary hover:bg-secondary-light active:bg-secondary-dark',
  accent: 'sims-button bg-accent hover:bg-accent-light active:bg-accent-dark'
};

const sizeClasses = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg'
};

export function SimsButton({ 
  children, 
  variant = 'primary', 
  size = 'md',
  isLoading = false,
  className = '',
  disabled,
  ...props 
}: SimsButtonProps) {
  return (
    <button 
      className={`
        ${variantClasses[variant]} 
        ${sizeClasses[size]} 
        ${className}
        ${isLoading ? 'cursor-wait' : ''}
      `}
      disabled={disabled || isLoading}
      {...props}
    >
      <div className="flex items-center justify-center gap-2">
        {isLoading && <PlumbobLoader size="sm" />}
        {children}
      </div>
    </button>
  );
} 