import React from "react";

/**
 * Input Component
 * A reusable input field with consistent styling
 * 
 * @param {Object} props
 * @param {'text' | 'email' | 'password' | 'number' | 'search'} props.type - Input type
 * @param {'default' | 'filled'} props.variant - Input style variant
 * @param {'sm' | 'md' | 'lg'} props.size - Input size
 * @param {string} props.label - Optional label text
 * @param {string} props.error - Error message
 * @param {string} props.className - Additional CSS classes
 */
const Input = ({
  type = "text",
  variant = "default",
  size = "md",
  label,
  error,
  className = "",
  ...props
}) => {
  const baseClasses = `
    w-full outline-none
    transition-colors duration-[var(--transition-fast)]
    placeholder-[var(--color-text-muted)]
    text-[var(--color-title)]
  `;

  const variantClasses = {
    default: `
      bg-transparent
      border border-[var(--color-border)]
      rounded-[var(--border-radius-md)]
      focus:border-[var(--color-title)]
    `,
    filled: `
      bg-[var(--color-surface)]
      border border-transparent
      rounded-[var(--border-radius-md)]
      focus:bg-white focus:border-[var(--color-border)]
    `,
  };

  const sizeClasses = {
    sm: "px-3 py-2 text-xs",
    md: "px-4 py-3 text-sm",
    lg: "px-5 py-4 text-base",
  };

  const errorClasses = error ? "border-[var(--color-error)]" : "";

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label className="text-sm font-medium text-[var(--color-title)]">
          {label}
        </label>
      )}
      <input
        type={type}
        className={`
          ${baseClasses}
          ${variantClasses[variant]}
          ${sizeClasses[size]}
          ${errorClasses}
          ${className}
        `}
        {...props}
      />
      {error && (
        <span className="text-xs text-[var(--color-error)]">{error}</span>
      )}
    </div>
  );
};

export default Input;
