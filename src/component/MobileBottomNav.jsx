import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, LayoutGrid, Star, User } from 'lucide-react';

const MobileBottomNav = ({ setIsAccountOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: 'Home', icon: Home, path: '/' },
    { name: 'Shopping', icon: LayoutGrid, path: '/collection' },
    { name: 'Wishlist', icon: Star, path: '/wishlist', badge: 1 },
    { name: 'Account', icon: User, path: '/' },
  ];

  return (
    <>
      <div className="h-16 lg:hidden " />
      <div className="fixed  bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-between items-center z-[0] lg:hidden">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <div 
              key={index}
              onClick={() => {
                if (item.name === 'Account') {
                  setIsAccountOpen(true);
                } else {
                  navigate(item.path);
                }
              }}
              className="flex flex-col items-center justify-center p-3 cursor-pointer w-[25%]"
            >
              <div className="relative">
                <Icon size={22} className={isActive ? 'text-gray-900' : 'text-gray-600'} />
                {item.badge && (
                  <span className="absolute -top-1 -right-2 bg-yellow-400 text-black text-[10px] font-bold w-[14px] h-[14px] rounded-full flex items-center justify-center">
                    {item.badge}
                  </span>
                )}
              </div>
              <span className={`text-[10px] mt-1.5 font-medium ${isActive ? 'text-gray-900' : 'text-gray-500'} uppercase`}>
                {item.name}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MobileBottomNav;
