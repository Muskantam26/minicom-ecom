import React, { useState } from "react";
import { Heart, ShoppingBag, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

/**
 * ProductCard Component
 * A reusable product card with hover effects and actions
 * 
 * @param {Object} props
 * @param {Object} props.product - Product data
 * @param {string} props.product.id - Product ID
 * @param {string} props.product.title - Product title
 * @param {string} props.product.price - Current price
 * @param {string} props.product.originalPrice - Original price (optional)
 * @param {string} props.product.discount - Discount percentage (optional)
 * @param {string} props.product.image - Primary image URL
 * @param {string} props.product.hoverImage - Hover image URL (optional)
 * @param {boolean} props.product.isNew - Show "New" badge (optional)
 * @param {'default' | 'compact'} props.variant - Card layout variant
 * @param {string} props.className - Additional CSS classes
 */
const ProductCard = ({
  product,
  variant = "default",
  className = "",
  onAddToCart,
  onAddToWishlist,
  ...props
}) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const {
    id,
    title,
    price,
    originalPrice,
    discount,
    image,
    hoverImage,
    isNew,
  } = product;

  const handleClick = () => {
    navigate(`/product/${id}`);
  };

  if (variant === "compact") {
    return (
      <div
        className={`flex items-start gap-4 group cursor-pointer ${className}`}
        onClick={handleClick}
        {...props}
      >
        {/* Image Container */}
        <div className="relative w-24 h-24 flex-shrink-0 bg-[var(--color-surface)] rounded-[var(--border-radius-md)] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain p-2 transition-opacity duration-[var(--transition-normal)]"
          />
          {discount && (
            <span className="absolute top-2 left-2 bg-[var(--color-error)] text-white text-[10px] font-medium px-2 py-0.5 rounded-full">
              {discount}
            </span>
          )}
        </div>

        {/* Details */}
        <div className="flex flex-col pt-1">
          <h3 className="text-[13px] text-[var(--color-text)] leading-snug mb-2 line-clamp-2 group-hover:text-[var(--color-hover)] transition-colors duration-[var(--transition-fast)]">
            {title}
          </h3>
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-[var(--color-title)]">{price}</span>
            {originalPrice && (
              <span className="text-sm text-[var(--color-text-muted)] line-through">{originalPrice}</span>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div
      className={`group relative flex flex-col ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {/* Image Container */}
      <div
        className="relative aspect-[4/5] bg-[var(--color-surface)] rounded-[var(--product-corner-radius-image)] overflow-hidden cursor-pointer"
        onClick={handleClick}
      >
        {/* Primary Image */}
        <img
          src={image}
          alt={title}
          className={`absolute inset-0 w-full h-full object-contain p-4 transition-opacity duration-[var(--transition-normal)] ${
            isHovered && hoverImage ? "opacity-0" : "opacity-100"
          }`}
        />

        {/* Hover Image */}
        {hoverImage && (
          <img
            src={hoverImage}
            alt={title}
            className={`absolute inset-0 w-full h-full object-contain p-4 transition-opacity duration-[var(--transition-normal)] ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          />
        )}

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {isNew && (
            <span className="bg-[var(--color-success)] text-white text-[10px] font-bold px-2 py-1 rounded-sm uppercase">
              New
            </span>
          )}
          {discount && (
            <span className="bg-[var(--color-error)] text-white text-[10px] font-bold px-2 py-1 rounded-sm">
              {discount}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div
          className={`absolute right-3 top-3 flex flex-col gap-2 transition-all duration-[var(--transition-normal)] ${
            isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
          }`}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              onAddToWishlist?.(product);
            }}
            className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-[var(--color-button)] hover:text-[var(--color-button-text)] transition-colors duration-[var(--transition-fast)]"
            aria-label="Add to wishlist"
          >
            <Heart className="w-4 h-4" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/product/${id}`);
            }}
            className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-[var(--color-button)] hover:text-[var(--color-button-text)] transition-colors duration-[var(--transition-fast)]"
            aria-label="Quick view"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>

        {/* Add to Cart Button */}
        <div
          className={`absolute bottom-3 left-3 right-3 transition-all duration-[var(--transition-normal)] ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart?.(product);
            }}
            className="w-full py-3 bg-white text-[var(--color-title)] text-[10px] font-bold uppercase tracking-wider rounded-[var(--button-corner)] hover:bg-[var(--color-button)] hover:text-[var(--color-button-text)] transition-colors duration-[var(--transition-fast)] flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Product Details */}
      <div className="pt-4">
        <h3
          onClick={handleClick}
          className="text-sm text-[var(--color-text)] leading-snug mb-2 line-clamp-2 cursor-pointer hover:text-[var(--color-hover)] transition-colors duration-[var(--transition-fast)]"
        >
          {title}
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-base font-bold text-[var(--color-title)]">{price}</span>
          {originalPrice && (
            <span className="text-sm text-[var(--color-text-muted)] line-through">{originalPrice}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
