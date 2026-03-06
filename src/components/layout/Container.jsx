import React from "react";

/**
 * Container Component
 * A wrapper component for consistent max-width and padding
 * 
 * @param {Object} props
 * @param {'default' | 'narrow' | 'wide' | 'fluid'} props.size - Container width variant
 * @param {string} props.className - Additional CSS classes
 * @param {React.ReactNode} props.children - Container content
 */
const Container = ({
  size = "default",
  className = "",
  children,
  ...props
}) => {
  const sizeClasses = {
    narrow: "max-w-4xl",
    default: "max-w-[var(--container-max-width)]",
    wide: "max-w-7xl",
    fluid: "max-w-full",
  };

  return (
    <div
      className={`w-full mx-auto px-[var(--container-padding)] ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
