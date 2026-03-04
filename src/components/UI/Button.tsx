import { ButtonHTMLAttributes } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & { loading?: boolean };

export default function Button({ loading, disabled, children, className = '', ...props }: Props) {
  return (
    <button
      disabled={disabled || loading}
      className={`rounded border border-[#111111] px-4 py-2 text-sm font-medium transition hover:bg-[#111111] hover:text-white active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d40000] ${className}`}
      {...props}
    >
      {loading ? 'Loading...' : children}
    </button>
  );
}
