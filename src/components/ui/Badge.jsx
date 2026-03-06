import React from "react";

/**
 * Badge Component
 * A small status indicator or label
 * 
 * @param {Object} props
 * @param {'default' | 'success' | 'error' | 'warning'} props.variant - Badge color variant
 * @param {'sm' | 'md'} props.size - Badge size
 * @param {string} props.className - Additional CSS classes
 * @param {React.ReactNode} props.children - Badge content
 */
const Badge = ({
  variant = "default",
  size = "sm",
  className = "",
  children,
  ...props
}) => {
  const baseClasses = "inline-flex items-center justify-center font-bold uppercase tracking-wide rounded-full";

  const variantClasses = {
    default: "bg-[var(--color-title)] text-white",
    success: "bg-[var(--color-success)] text-white",
    error: "bg-[var(--color-error)] text-white",
    warning: "bg-[var(--color-warning)] text-[var(--color-button-text)]",
  };

  const sizeClasses = {
    sm: "px-2 py-0.5 text-[10px]",
    md: "px-3 py-1 text-xs",
  };

  return (
    <span
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${className}
      `}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
