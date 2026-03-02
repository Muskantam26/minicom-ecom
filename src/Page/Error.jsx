import React from 'react';
import { useNavigate } from 'react-router-dom';

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center py-16 bg-white">
      
  
      <div className="background-img3 w-full h-[250px] sm:h-[350px] md:h-[450px] max-w-[800px] mx-auto mb-8">
      </div>

      <h1 className="text-2xl md:text-4xl font-bold text-title mb-4">
        PAGE NOT FOUND
      </h1>
      
      <p className="text-body mb-10 text-base md:text-lg">
        We're sorry — something has gone wrong on our end.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <button 
          onClick={() => navigate("/")}
          className="bg-brand text-[#000000] font-bold py-4 px-8 text-xs tracking-widest uppercase hover:bg-brand-hover hover:text-brand-text-hover transition-all duration-300"
        >
          Back To Homepage
        </button>
        <button 
          onClick={() => navigate("/collection")}
          className="bg-brand text-[#000000] font-bold py-4 px-8 text-xs tracking-widest uppercase hover:bg-brand-hover hover:text-brand-text-hover transition-all duration-300"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default Error;