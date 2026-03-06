import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Facebook, Instagram, Twitter, Search, ChevronRight, ArrowLeft } from 'lucide-react';
import { BsTiktok } from 'react-icons/bs';

const menuItems = [
  { id: 1, name: "HOME", path: "/" },
  { id: 2, name: "COLLECTIONS", path: "/collection", hasSubmenu: false, submenu: [
     
  ] }, 
  { id: 3, name: "PRODUCTS", path: "/products", hasSubmenu: false, submenu: [
   
  ] },
  { 
    id: 4, 
    name: "PAGES", 
    path: "/pages",
    hasSubmenu: true,
    submenu: [
      { name: "404 Error", path: "/404" },
      { name: "About Us", path: "/about-Us" },
      { name: "Contact Us", path: "/contact" },
      { name: "FAQS Page", path: "/Frequently-Asked-Questions" },
      { name: "Store Direction Page", path: "/page-store-direction" },
      { name: "Store Location Page", path: "/page-store-location" },
      { name: "Testimonial Page", path: "/page-testimonial" },
    ]
  },
 
];

const MobileSidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const handleNavigate = (path) => {
    navigate(path);
    onClose();
    setActiveSubmenu(null);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed  inset-0 bg-black z-[60] lg:hidden"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 left-0 h-full w-[85%] max-w-sm bg-white z-[70] flex flex-col overflow-hidden lg:hidden"
          >
            {/* Search Bar */}
            <div className="p-4 flex items-center">
              <div className="relative w-full bg-gray-100 flex items-center px-4 py-3 rounded-md">
                <input 
                  type="text" 
                  placeholder="ENTER YOUR KEYWORDS" 
                  className="bg-transparent w-full outline-none text-xs font-medium text-gray-600 placeholder-gray-500"
                />
                <Search size={20} className="text-gray-800" />
              </div>
            </div>

            {/* Menu Content */}
            <div className="flex-1 overflow-x-hidden relative">
              <AnimatePresence initial={false} mode="wait">
                {!activeSubmenu ? (
                  <motion.div
                    key="main-menu"
                    initial={{ x: "-100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "-100%" }}
                    transition={{ type: "tween", duration: 0.3 }}
                    className="absolute inset-0 overflow-y-auto px-6 py-4 flex flex-col"
                  >
                    <ul className="flex flex-col gap-6">
                      {menuItems.map((menu) => (
                        <li key={menu.id} className="cursor-pointer">
                          <div 
                            className="flex justify-between items-center text-xs font-medium text-gray-900"
                            onClick={() => menu.hasSubmenu ? setActiveSubmenu(menu) : handleNavigate(menu.path)}
                          >
                            <span>{menu.name}</span>
                            {menu.hasSubmenu && <ChevronRight size={18} className="text-gray-400 font-light" />}
                          </div>
                        </li>
                      ))}
                    </ul>

                    {/* Bottom Container */}
                    <div className="mt-auto pt-12 pb-4">
                      {/* Footer Info */}
                      <div className="space-y-4 text-sm font-medium text-gray-800">
                        <p>Call Us: <span className="text-gray-500 font-normal">+(123)-456-7890</span></p>
                        <p>Email: <span className="text-gray-500 font-normal">info@example.com</span></p>
                      </div>

                      {/* Social Icons */}
                      <div className="flex gap-4 mt-6">
                        <div className="w-10 h-10 bg-gray-100 flex items-center justify-center rounded-md text-gray-900"><Facebook size={18} /></div>
                        <div className="w-10 h-10 bg-gray-100 flex items-center justify-center rounded-md text-gray-900"><Instagram size={18} /></div>
                        <div className="w-10 h-10 bg-gray-100 flex items-center justify-center rounded-md text-gray-900"><Twitter size={18} /></div>
                        <div className="w-10 h-10 bg-gray-100 flex items-center justify-center rounded-md text-gray-900"><BsTiktok size={18} /></div>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="submenu"
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ type: "tween", duration: 0.3 }}
                    className="absolute inset-0 overflow-y-auto w-full"
                  >
                    <div className="flex items-center justify-between border-b px-2">
                       <span className="text-xs font-medium text-gray-900 px-4 py-4 uppercase">{activeSubmenu.name}</span>
                       <div 
                         className="px-4 py-4 cursor-pointer"
                         onClick={() => setActiveSubmenu(null)}
                       >
                         <ArrowLeft size={20} className="text-gray-900" />
                       </div>
                    </div>
                    <ul className="flex flex-col">
                      {activeSubmenu.submenu && activeSubmenu.submenu.map((sub, idx) => (
                        <li 
                          key={idx} 
                          className="px-6 py-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 text-sm font-semibold text-gray-900"
                          onClick={() => handleNavigate(sub.path)}
                        >
                          {sub.name}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileSidebar;