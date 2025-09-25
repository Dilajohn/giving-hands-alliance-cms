'use client';

import * as React from 'react';

interface PopoverProps {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function Popover({ children, open, onOpenChange }: PopoverProps) {
  return <div>{React.Children.map(children, child => (React.isValidElement(child) ? React.cloneElement(child, { open, onOpenChange }) : child))}</div>;
}

interface PopoverTriggerProps {
  children: React.ReactElement;
}

export function PopoverTrigger({ children }: PopoverTriggerProps) {
  const child = React.Children.only(children);

  return React.cloneElement(child, {
    onClick: (e: React.MouseEvent) => {
      e.preventDefault();
      if (child.props.onClick) child.props.onClick(e);
      if (child.props.open !== undefined) return;
      if (child.props.onOpenChange) {
        child.props.onOpenChange(!child.props.open);
      }
    },
  });
}

interface PopoverContentProps {
  children: React.ReactNode;
  className?: string;
}

export function PopoverContent({ children, className = '' }: PopoverContentProps) {
  return <div className={`absolute z-50 mt-2 rounded-md shadow-lg bg-gha-dark/90 backdrop-blur-md p-4 border border-gha-orange ${className}`}>{children}</div>;
}
