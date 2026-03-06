import React from "react";

/**
 * Heading Component
 * A reusable heading component with consistent styling
 * 
 * @param {Object} props
 * @param {'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'} props.as - HTML heading element
 * @param {'xl' | 'lg' | 'md' | 'sm' | 'xs'} props.size - Visual size variant
 * @param {string} props.className - Additional CSS classes
 * @param {React.ReactNode} props.children - Heading content
 */
const Heading = ({
  as: Component = "h2",
  size = "md",
  className = "",
  children,
  ...props
}) => {
  const sizeClasses = {
    xl: "text-4xl md:text-5xl",
    lg: "text-3xl md:text-4xl",
    md: "text-2xl md:text-3xl",
    sm: "text-xl md:text-2xl",
    xs: "text-lg md:text-xl",
  };

  const baseClasses = "font-bold leading-tight tracking-wide text-[var(--color-title)]";

  return (
    <Component
      className={`${baseClasses} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Heading;
