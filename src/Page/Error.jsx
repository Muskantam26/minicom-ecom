import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center py-16 bg-white">
      
      
      {/* 404 Image from CSS - Responsive/Dynamic Container */}
      <div className="background-img3 w-full h-[250px] sm:h-[350px] md:h-[450px] max-w-[800px] mx-auto mb-8">
      </div>

      <h1 className="text-2xl md:text-4xl font-bold text-[#181818] mb-4">
        PAGE NOT FOUND
      </h1>
      
      <p className="text-[#535353] mb-10 text-base md:text-lg">
        We're sorry — something has gone wrong on our end.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link 
          to="/" 
          className="bg-[#fdc402] text-[#000000] font-bold py-4 px-8 text-xs tracking-widest uppercase hover:bg-black hover:text-white transition-all duration-300"
        >
          Back To Homepage
        </Link>
        <Link 
          to="/collection" 
          className="bg-[#fdc402] text-[#000000] font-bold py-4 px-8 text-xs tracking-widest uppercase hover:bg-black hover:text-white transition-all duration-300"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default Error;