import React from "react";

export const Input1 = ({
  placeholder = "ENTER YOUR KEYWORDS",
  className = "",
  ...props
}) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={`h-full font-normal px-5 text-[10px] w-full text-[var(--color-text)] outline-none bg-transparent ${className}`}
      {...props}
    />
  );
};