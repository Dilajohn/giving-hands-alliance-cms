'use client';

import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  role?: string;
  'aria-label'?: string;
}

export function Card({ children, className = '', role, 'aria-label': ariaLabel }: CardProps) {
  return (
    <section className={`rounded-md bg-gha-dark/50 backdrop-blur-md p-4 ${className}`} role={role} aria-label={ariaLabel}>
      {children}
    </section>
  );
}

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

export function CardHeader({ children, className = '' }: CardHeaderProps) {
  return <header className={`mb-3 border-b border-gha-orange pb-2 ${className}`}>{children}</header>;
}

interface CardTitleProps {
  children: ReactNode;
  className?: string;
}

export function CardTitle({ children, className = '' }: CardTitleProps) {
  return <h2 className={`text-gha-orange text-lg font-semibold ${className}`}>{children}</h2>;
}

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export function CardContent({ children, className = '' }: CardContentProps) {
  return <div className={className}>{children}</div>;
}
