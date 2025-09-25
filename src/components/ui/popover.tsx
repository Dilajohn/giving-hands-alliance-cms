'use client';

import * as React from 'react';

interface PopoverProps {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function Popover({ children, open, onOpenChange }: PopoverProps) {
  return (
    <div>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          const childProps = child.type as any;
          if (childProps.propTypes && (childProps.propTypes.open || childProps.propTypes.onOpenChange)) {
            return React.cloneElement(child, { open, onOpenChange });
          } else {
            return child;
          }
        } else {
          return child;
        }
      })}
    </div>
  );
}

interface PopoverTriggerProps {
  children: React.ReactElement<{
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    onClick?: (e: React.MouseEvent) => void;
  }>;
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
  return (
    <div className={`absolute z-50 mt-2 rounded-md shadow-lg bg-gha-dark/90 backdrop-blur-md p-4 border border-gha-orange ${className}`}>
      {children}
    </div>
  );
}
