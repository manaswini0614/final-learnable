import React from 'react';

interface PlumbobLoaderProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeClasses = {
  sm: 'w-8 h-8',
  md: 'w-12 h-12',
  lg: 'w-16 h-16'
};

export function PlumbobLoader({ size = 'md', className = '' }: PlumbobLoaderProps) {
  return (
    <div className={`plumbob-loading ${sizeClasses[size]} ${className}`}>
      <div className="plumbob-inner" />
    </div>
  );
} 