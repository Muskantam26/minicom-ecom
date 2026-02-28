import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { MainContent } from "../constant/MainContent";
import { Button1 } from "./Btn/Button1";
import { Input1 } from "./inputs/input1";
import { MegaMenu } from "./MegaMenu";

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

const UserIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const BagIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
    <path d="M3 6h18" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);

const Header1 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  return (
    <div className={`${isHome ? 'absolute top-0 left-0 bg-transparent' : 'relative bg-black'} w-full z-50`}>
      <div className="w-full py-3 px-8 flex items-center justify-between text-white font-[var(--font-family-primary)] gap-6 z-50 relative">
      {/* Logo Section */}
      <div className="cursor-pointer">
        <img src={MainContent.appLogo} alt="Logo" className="w-50" />
      </div>

      {/* Menu Button */}

      {/* Search Bar */}
      <div className="flex gap-2 w-full ml-6">
        <Button1 
          variant="outline" 
          text="Menu" 
          icon={isMenuOpen ? <CloseIcon /> : <MenuIcon />} 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          isActive={isMenuOpen}
        />
        <div className="flex items-center flex-1 h-13 bg-white rounded">
          <Input1 />
        </div>
        <Button1
          variant="primary"
          text="Search"
          icon={<SearchIcon />}
          iconPosition="right"
        />
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-8 shrink-0">
        {/* Account */}
        <Button1 variant="transparent" text="Account" icon={<UserIcon />} />

        {/* Wishlist */}
        <Button1
          variant="transparent"
          text="Wishlist"
          icon={<StarIcon />}
          badge="1"
        />

        <Button1 variant="cart" icon={<BagIcon />} badge="0" price="$0.00" />
      </div>
      </div>

      {/* Mega Menu Overlay */}
      <MegaMenu isOpen={isMenuOpen} isHome={isHome} />
    </div>
  );
};

export default Header1;
