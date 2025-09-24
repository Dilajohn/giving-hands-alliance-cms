'use client';

import * as React from 'react';

export function Popover({ children, open, onOpenChange }) {
  return (
    <div>
      {React.Children.map(children, child => React.cloneElement(child, { open, onOpenChange }))}
    </div>
  );
}

export function PopoverTrigger({ children }) {
  const child = React.Children.only(children);

  return React.cloneElement(child, {
    onClick: e => {
      e.preventDefault();
      if (child.props.onClick) child.props.onClick(e);
      if (child.props.open !== undefined) return;
      child.props.onOpenChange(!child.props.open);
    },
  });
}

export function PopoverContent({ children, className }) {
  return (
    <div className={`absolute z-50 mt-2 rounded-md shadow-lg bg-gha-dark/90 backdrop-blur-md p-4 border border-gha-orange ${className}`}>
      {children}
    </div>
  );
}
