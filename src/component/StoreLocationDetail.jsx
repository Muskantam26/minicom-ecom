import React from 'react';
import { useNavigate } from 'react-router-dom';

const StoreLocationDetail = ({ image, title, address, email, phone, openingTime, reverse }) => {
  const navigate = useNavigate();
  return (
    <div className={`flex flex-col md:flex-row  w-full bg-white ${reverse ? 'md:flex-row-reverse' : ''}`}>
      {/* Image Section */}
      <div className="md:w-1/2 w-full p-8">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-[400px] md:h-[650px] object-cover rounded shadow "
        />
      </div>
      
      {/* Content Section */}
      <div className="md:w-1/2 w-full flex flex-col justify-center px-8 py-16 md:px-16 lg:px-32">
        <h2 className="text-xl  font-bold text-black mb-10">{title}</h2>
        
        <div className="space-y-5 mb-12 text-[15px] text-gray-600">
          <p>
            <strong className="text-black font-semibold mr-1">Address:</strong> {address}
          </p>
          <p>
            <strong className="text-black font-semibold mr-1">Email:</strong> {email}
          </p>
          <p>
            <strong className="text-black font-semibold mr-1">Call Us:</strong> {phone}
          </p>
          <p className="leading-relaxed">
            <strong className="text-black font-semibold mr-1">Opening time:</strong> {openingTime}
          </p>
        </div>

        <div>
          <button onClick={() => navigate("/page-store-direction")} className="bg-[#ffc107] hover:bg-brand-hover hover:text-brand-text-hover text-black text-[13px] font-bold py-4 px-10 transition-colors duration-300">
            GET DIRECTION
          </button>
        </div>
      </div>
    </div>
  );
};

export default StoreLocationDetail;
