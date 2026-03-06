import React from "react";

/**
 * Card Component
 * A flexible container component for content
 * 
 * @param {Object} props
 * @param {'default' | 'elevated' | 'outlined'} props.variant - Card style variant
 * @param {'none' | 'sm' | 'md' | 'lg'} props.padding - Card padding size
 * @param {boolean} props.hoverable - Enable hover effect
 * @param {string} props.className - Additional CSS classes
 * @param {React.ReactNode} props.children - Card content
 */
const Card = ({
  variant = "default",
  padding = "md",
  hoverable = false,
  className = "",
  children,
  ...props
}) => {
  const baseClasses = `
    rounded-[var(--border-radius-lg)]
    transition-all duration-[var(--transition-normal)]
  `;

  const variantClasses = {
    default: "bg-[var(--color-background)]",
    elevated: "bg-[var(--color-surface-elevated)] shadow-[var(--shadow-md)]",
    outlined: "bg-[var(--color-background)] border border-[var(--color-border)]",
  };

  const paddingClasses = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  const hoverClass = hoverable
    ? "cursor-pointer hover:shadow-[var(--shadow-lg)] hover:-translate-y-1"
    : "";

  return (
    <div
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${paddingClasses[padding]}
        ${hoverClass}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
