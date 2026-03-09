import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const HeaderPage = ({ title }) => {
  const navigate = useNavigate();
  const location = useLocation();

  let displayTitle = title;
  if (!displayTitle) {
    const segments = location.pathname.split('/').filter(Boolean);
    if (segments.length > 0) {
      displayTitle = segments[segments.length - 1].replace(/-/g, ' ');
    } else {
      displayTitle = 'Outdoor'; 
    }
  }

  const formattedTitle = displayTitle ? displayTitle.charAt(0).toUpperCase() + displayTitle.slice(1) : '';

  return (
    <div 
      className='w-full background-img2 p-4 lg:h-50 h-30   flex items-center justify-center relative'
      >

      
      <div className='relative flex flex-col items-center justify-center text-center'>
        <h1 className='text-2xl font-bold text-title uppercase tracking-wide mb-4'>
          {displayTitle}
        </h1>
        <div className='flex items-center space-x-3 text-xs font-medium text-title'>
          <span onClick={() => navigate("/")} className='hover:text-brand transition-colors duration-300 cursor-pointer'>Home</span>
          <span className='text-subtitle text-xs'>•</span>
          <span className='capitalize text-body'>{formattedTitle}</span>
        </div>
      </div>  
    </div>
  );
};

export default HeaderPage;