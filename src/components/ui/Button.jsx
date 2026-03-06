import React from "react";

/**
 * Button Component
 * A reusable button with multiple variants and sizes
 * 
 * @param {Object} props
 * @param {'primary' | 'secondary' | 'outline' | 'ghost'} props.variant - Button style variant
 * @param {'sm' | 'md' | 'lg'} props.size - Button size
 * @param {boolean} props.fullWidth - Whether button takes full width
 * @param {React.ReactNode} props.icon - Optional icon element
 * @param {'left' | 'right'} props.iconPosition - Position of the icon
 * @param {string} props.className - Additional CSS classes
 * @param {React.ReactNode} props.children - Button content
 */
const Button = ({
  variant = "primary",
  size = "md",
  fullWidth = false,
  icon = null,
  iconPosition = "left",
  className = "",
  children,
  ...props
}) => {
  const baseClasses = `
    inline-flex items-center justify-center gap-2
    font-bold uppercase tracking-wider
    transition-all duration-[var(--transition-normal)]
    rounded-[var(--button-corner)]
    outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-button)]
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const variantClasses = {
    primary: `
      bg-[var(--color-button)] text-[var(--color-button-text)]
      border border-[var(--color-button-border)]
      hover:bg-[var(--color-button-hover)] hover:text-[var(--color-button-text-hover)]
      hover:border-[var(--color-button-border-hover)]
    `,
    secondary: `
      bg-[var(--color-secondary-button)] text-[var(--color-secondary-button-text)]
      border border-[var(--color-secondary-button-border)]
      hover:bg-[var(--color-secondary-button-hover)] hover:text-[var(--color-secondary-button-text-hover)]
      hover:border-[var(--color-secondary-button-border-hover)]
    `,
    outline: `
      bg-transparent text-[var(--color-title)]
      border border-[var(--color-border)]
      hover:bg-[var(--color-button)] hover:text-[var(--color-button-text)]
      hover:border-[var(--color-button)]
    `,
    ghost: `
      bg-transparent text-[var(--color-title)]
      border border-transparent
      hover:bg-[var(--color-surface)] hover:text-[var(--color-hover)]
    `,
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-[10px]",
    md: "px-6 py-3 text-xs",
    lg: "px-8 py-4 text-sm",
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${widthClass}
        ${className}
      `}
      {...props}
    >
      {iconPosition === "left" && icon}
      {children && <span>{children}</span>}
      {iconPosition === "right" && icon}
    </button>
  );
};

export default Button;
