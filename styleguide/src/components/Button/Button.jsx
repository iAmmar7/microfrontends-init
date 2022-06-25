import React from 'react';
import clsx from 'clsx';

const variantMap = {
  primary: 'border-primary text-primary hover:bg-primary hover:text-white',
  secondary: 'border-danger text-danger hover:bg-danger hover:text-white',
  tertiary: 'border-white text-white hover:bg-white hover:text-danger',
};

export default function Button(props) {
  const { children, disabled = false, loading = false, variant = 'primary', className = '', ...remainingProps } = props;

  return (
    <button
      className={clsx(
        'border-2 rounded-full px-12 py-2 inline-block font-semibol transition duration-300',
        variantMap[variant],
        (disabled || loading) && 'opacity-50 bg-secondary',
        className,
      )}
      disabled={disabled || loading}
      {...remainingProps}
    >
      {loading ? 'Loading...' : children}
    </button>
  );
}
