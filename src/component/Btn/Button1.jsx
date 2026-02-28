import React from "react";

export const Button1 = ({
  text,
  icon,
  badge,
  price,
  onClick,
  className = "",
  variant = "transparent", // 'primary', 'outline', 'transparent', 'cart'
  iconPosition = "left", // 'left', 'right'
  isActive = false,
  ...props
}) => {
  let baseClass = "transition-colors shrink-0 outline-none ";

  if (variant === "primary") {
    baseClass +=
      "flex items-center rounded py-4 gap-2 bg-[var(--color-button)] text-[var(--color-button-text)] hover:bg-[var(--color-button-hover)] hover:text-[var(--color-button-text-hover)] h-full px-6 text-xs uppercase";
  } else if (variant === "outline") {
    baseClass +=
      `flex items-center gap-2 border px-6 h-13 rounded hover:bg-[var(--color-hover)] hover:border-none hover:text-[var(--color-button-text)] ${isActive ? 'bg-[var(--color-hover)] border-transparent text-[var(--color-button-text)]' : 'text-white'}`;
  } else if (variant === "transparent") {
    baseClass +=
      "flex items-center gap-1 text-white hover:text-[var(--color-button)] relative group";
  } else if (variant === "cart") {
    baseClass +=
      "flex items-center gap-3 text-white hover:text-[var(--color-button)] relative";
  }

  const badgeClass =
    variant === "cart"
      ? "absolute -top-4 -right-1 bg-black text-white text-[10px] w-[14px] h-[14px] flex items-center justify-center rounded-full font-bold"
      : "absolute -top-3 -right-2 bg-white/30 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold group-hover:bg-[var(--color-button)] group-hover:text-black transition-colors";

  const iconElement =
    icon || badge != null ? (
      <div className="relative">
        {icon}
        {badge != null && <span className={badgeClass}>{badge}</span>}
      </div>
    ) : null;

  const textElement = text ? (
    <span
      className={
        variant === "outline"
          ? "font-bold text-[10px] tracking-wide uppercase"
          : variant === "primary"
            ? "font-medium"
            : "text-xs font-bold"
      }
    >
      {text}
    </span>
  ) : null;

  return (
    <button
      className={`${baseClass} ${className}`}
      onClick={onClick}
      {...props}
    >
      {iconPosition === "left" && iconElement}
      {textElement}
      {iconPosition === "right" && iconElement}

      {price && (
        <div className="bg-[var(--color-button)] text-black px-2 py-1 rounded text-xs font-bold relative ml-1">
          {price}
          <div className="absolute left-[-4px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-r-[4px] border-r-[var(--color-button)]" />
        </div>
      )}
    </button>
  );
};
