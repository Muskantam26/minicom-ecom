import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const HeaderPage = ({ title }) => {
  const location = useLocation();
  
  // Determine title from URL if not passed as prop
  let displayTitle = title;
  if (!displayTitle) {
    const segments = location.pathname.split('/').filter(Boolean);
    if (segments.length > 0) {
      displayTitle = segments[segments.length - 1].replace(/-/g, ' ');
    } else {
      displayTitle = 'Outdoor'; // fallback
    }
  }

  // Capitalize for the breadcrumb trail
  const formattedTitle = displayTitle ? displayTitle.charAt(0).toUpperCase() + displayTitle.slice(1) : '';

  return (
    <div 
      className='w-full background-img2 min-h-80 flex items-center justify-center relative'

    >
      {/* Optional faint overlay to ensure text readability */}
      <div className='absolute inset-0 bg-white/10'></div>
      
      <div className='relative z-10 flex flex-col items-center justify-center text-center px-4 mt-8'>
        <h1 className='text-2xl font-bold text-[#181818] uppercase tracking-wide mb-4'>
          {displayTitle}
        </h1>
        <div className='flex items-center space-x-3 text-xs font-medium text-[#181818]'>
          <Link to="/" className='hover:text-[#fdc402] transition-colors duration-300'>Home</Link>
          <span className='text-[#666666] text-xs'>•</span>
          <span className='capitalize text-[#535353]'>{formattedTitle}</span>
        </div>
      </div>
    </div>
  );
};

export default HeaderPage;