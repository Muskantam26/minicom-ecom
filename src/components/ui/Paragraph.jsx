import React from "react";

/**
 * Paragraph Component
 * A reusable text component with consistent styling
 * 
 * @param {Object} props
 * @param {'default' | 'lead' | 'small' | 'muted'} props.variant - Text style variant
 * @param {string} props.className - Additional CSS classes
 * @param {React.ReactNode} props.children - Text content
 */
const Paragraph = ({
  variant = "default",
  className = "",
  children,
  ...props
}) => {
  const variantClasses = {
    default: "text-sm leading-relaxed text-[var(--color-text)]",
    lead: "text-base md:text-lg leading-relaxed text-[var(--color-text)]",
    small: "text-xs leading-relaxed text-[var(--color-text)]",
    muted: "text-sm leading-relaxed text-[var(--color-text-muted)]",
  };

  return (
    <p className={`${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </p>
  );
};

export default Paragraph;
