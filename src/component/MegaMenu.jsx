import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";

export const MegaMenu = ({ isOpen, isHome }) => {
  const [hoveredMenu, setHoveredMenu] = useState(null);

  const menuItems = [
    { id: 1, name: "HOME", path: "/" },
    { id: 2, name: "COLLECTIONS", path: "/collection" },
    { id: 3, name: "PRODUCTS", path: "/products" },
    { 
      id: 4, 
      name: "PAGES", 
      path: "/pages",
      hasSubmenu: true,
      submenu: [
        { name: "404 Error", path: "/404" },
        { name: "About Us", path: "/about" },
        { name: "Contact Us", path: "/contact" },
        { name: "FAQS Page", path: "/faqs" },
        { name: "Store Direction Page", path: "/store-direction" },
        { name: "Store Location Page", path: "/store-location" },
        { name: "Testimonial Page", path: "/testimonial" },
      ]
    },
    { id: 5, name: "BLOG", path: "/blog" },
  ];

  return (
    <div
      className={`absolute top-full left-0 w-full flex justify-center text-white transition-all duration-300 ease-in-out z-40 overflow-visible ${
        isHome ? 'bg-transparent' : 'bg-black'
      } ${
        isOpen ? "max-h-[800px] opacity-100 border-t border-gray-800" : "max-h-0 opacity-0 hidden"
      }`}
    >
      <div className="container mx-auto px-8 py-6">
        <ul className="flex flex-wrap gap-8 font-medium text-xs ml-50">
          {menuItems.map((menu) => (
            <li 
              key={menu.id} 
              className="cursor-pointer relative group transition-colors"
              onMouseEnter={() => setHoveredMenu(menu.id)}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <Link to={menu.path} className={`flex items-center gap-1 hover:text-[var(--color-button)] ${hoveredMenu === menu.id ? 'text-[var(--color-button)]' : ''}`}>
                {menu.name}
                {menu.hasSubmenu && <FaAngleDown size={10} />}
              </Link>
              
              {/* Submenu Dropdown */}
              {menu.hasSubmenu && (
                <div 
                  className={`absolute left-0 top-full mt-4 w-56 bg-white shadow-xl rounded-md overflow-hidden transition-all duration-300 transform origin-top ${
                    hoveredMenu === menu.id ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-95 invisible'
                  }`}
                >
                  <ul className="py-2 text-gray-800 flex flex-col">
                    {menu.submenu.map((sub, idx) => (
                      <li key={idx} className="hover:bg-gray-100 hover:text-black transition-colors px-5 py-2.5">
                        <Link to={sub.path} className="block w-full">{sub.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
