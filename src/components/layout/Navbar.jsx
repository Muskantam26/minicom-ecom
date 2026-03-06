import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Menu, X, Search, User, Heart, ShoppingBag } from "lucide-react";
import Button from "../ui/Button";

/**
 * Navbar Component
 * Main navigation bar with search, account, and cart functionality
 * 
 * @param {Object} props
 * @param {string} props.logoSrc - Logo image source
 * @param {string} props.logoAlt - Logo alt text
 * @param {boolean} props.transparent - Whether navbar should be transparent
 * @param {number} props.cartCount - Number of items in cart
 * @param {number} props.wishlistCount - Number of items in wishlist
 * @param {Function} props.onMenuClick - Handler for menu button click
 * @param {Function} props.onCartClick - Handler for cart button click
 * @param {Function} props.onAccountClick - Handler for account button click
 * @param {Function} props.onSearch - Handler for search submission
 */
const Navbar = ({
  logoSrc,
  logoAlt = "Logo",
  transparent = false,
  cartCount = 0,
  wishlistCount = 0,
  cartTotal = "$0.00",
  onMenuClick,
  onCartClick,
  onAccountClick,
  onSearch,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isHome = location.pathname === "/";
  const bgClass = transparent && isHome 
    ? "bg-transparent" 
    : "bg-[var(--color-header-bg)]";

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch?.(searchQuery);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    onMenuClick?.(!isMenuOpen);
  };

  return (
    <header
      className={`w-full z-50 ${
        transparent && isHome ? "absolute top-0 left-0" : "relative"
      } ${bgClass}`}
    >
      <div className="w-full py-3 px-4 md:px-8 flex items-center justify-between text-white gap-4 md:gap-6">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          {logoSrc ? (
            <img src={logoSrc} alt={logoAlt} className="h-8 md:h-10 w-auto" />
          ) : (
            <span className="text-xl font-bold tracking-wide">MINICOM</span>
          )}
        </Link>

        {/* Desktop: Menu + Search */}
        <div className="hidden md:flex items-center gap-2 flex-1 max-w-2xl">
          {/* Menu Toggle */}
          <button
            onClick={handleMenuToggle}
            className={`flex items-center gap-2 px-6 h-12 rounded border transition-colors duration-[var(--transition-fast)] ${
              isMenuOpen
                ? "bg-[var(--color-hover)] border-transparent text-black"
                : "border-white/30 text-white hover:bg-[var(--color-hover)] hover:border-transparent hover:text-black"
            }`}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            <span className="text-[10px] font-bold tracking-wider uppercase">Menu</span>
          </button>

          {/* Search Bar */}
          <form
            onSubmit={handleSearchSubmit}
            className="flex items-center flex-1 h-12 bg-white rounded overflow-hidden"
          >
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ENTER YOUR KEYWORDS"
              className="flex-1 h-full px-5 text-[10px] font-medium text-[var(--color-text)] outline-none bg-transparent uppercase tracking-wide"
            />
            <button
              type="submit"
              className="h-full px-6 bg-[var(--color-button)] text-[var(--color-button-text)] hover:bg-[var(--color-button-hover)] hover:text-[var(--color-button-text-hover)] transition-colors duration-[var(--transition-fast)] flex items-center gap-2"
            >
              <span className="text-[10px] font-bold tracking-wider uppercase hidden lg:inline">Search</span>
              <Search className="w-4 h-4" />
            </button>
          </form>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 md:gap-6 flex-shrink-0">
          {/* Account */}
          <button
            onClick={onAccountClick}
            className="hidden md:flex items-center gap-2 text-white hover:text-[var(--color-hover)] transition-colors duration-[var(--transition-fast)]"
          >
            <User className="w-5 h-5" />
            <span className="text-xs font-bold hidden lg:inline">Account</span>
          </button>

          {/* Wishlist */}
          <button
            onClick={() => navigate("/wishlist")}
            className="relative flex items-center gap-2 text-white hover:text-[var(--color-hover)] transition-colors duration-[var(--transition-fast)]"
          >
            <div className="relative">
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 w-4 h-4 bg-white/30 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </div>
            <span className="text-xs font-bold hidden lg:inline">Wishlist</span>
          </button>

          {/* Cart */}
          <button
            onClick={onCartClick}
            className="flex items-center gap-2 text-white hover:text-[var(--color-hover)] transition-colors duration-[var(--transition-fast)]"
          >
            <div className="relative">
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 w-4 h-4 bg-[var(--color-header-bg)] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
            <div className="hidden md:flex bg-[var(--color-button)] text-black px-2 py-1 rounded text-xs font-bold relative ml-1">
              <div className="absolute left-[-4px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-r-[4px] border-r-[var(--color-button)]" />
              {cartTotal}
            </div>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={handleMenuToggle}
            className="md:hidden flex items-center justify-center w-10 h-10 text-white"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="md:hidden px-4 pb-3">
        <form
          onSubmit={handleSearchSubmit}
          className="flex items-center h-10 bg-white rounded overflow-hidden"
        >
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            className="flex-1 h-full px-4 text-xs text-[var(--color-text)] outline-none bg-transparent"
          />
          <button
            type="submit"
            className="h-full px-4 bg-[var(--color-button)] text-[var(--color-button-text)]"
          >
            <Search className="w-4 h-4" />
          </button>
        </form>
      </div>
    </header>
  );
};

export default Navbar;
