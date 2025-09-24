'use client';

export function Button({ children, className, variant = 'default', ...props }) {
  const baseClass = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

  let variantClass = '';

  switch (variant) {
    case 'outline':
      variantClass = 'border border-gha-gray bg-transparent hover:bg-gha-orange hover:text-gha-dark text-gha-white';
      break;
    default:
      variantClass = 'bg-gha-orange text-gha-dark hover:bg-orange-700';
  }

  return (
    <button className={`${baseClass} ${variantClass} ${className}`} {...props}>
      {children}
    </button>
  );
}
