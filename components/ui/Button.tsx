'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost';
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  href?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-deep-blue-600 text-white hover:bg-deep-blue-700 shadow-md hover:shadow-lg',
  secondary: 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 hover:bg-slate-200 dark:hover:bg-slate-700',
  accent: 'bg-electric-blue-500 text-white hover:bg-electric-blue-600 shadow-md hover:shadow-lg',
  outline: 'border-2 border-deep-blue-600 dark:border-electric-blue-400 text-deep-blue-600 dark:text-electric-blue-400 hover:bg-deep-blue-50 dark:hover:bg-slate-900/50',
  ghost: 'text-deep-blue-600 dark:text-electric-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800/50',
};

const sizeStyles: Record<ButtonSize, string> = {
  xs: 'px-3 py-1.5 text-xs',
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
  xl: 'px-10 py-5 text-xl',
};

const baseStyles = 'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-electric-blue-500 focus:ring-offset-white dark:focus:ring-offset-slate-950 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed';

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      href,
      children,
      ...props
    },
    ref
  ) => {
    const buttonClass = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      fullWidth && 'w-full',
      className
    );

    if (href) {
      return (
        <Link href={href} className={buttonClass}>
          {children}
        </Link>
      );
    }

    return (
      <button className={buttonClass} ref={ref} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
