import React from 'react';

const InfoSection = ({ title, description, image, reverse }) => {
  return (
    <div className={`flex flex-col md:flex-row items-center gap-10 p-5 mt-5 ${reverse ? 'md:flex-row-reverse' : ''}`}>
      <div className="flex-1 w-full text-left">
        <h2 className="text-2xl font-bold text-black mb-5">{title}</h2>
        <p className="text-sm text-gray-500 leading-relaxed">
          {description}
        </p>
      </div>
      <div className="flex-1 w-full rounded overflow-hidden shadow group flex justify-center items-center bg-gray-50">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110"
        />
      </div>
    </div>
  );
};

export default InfoSection;
