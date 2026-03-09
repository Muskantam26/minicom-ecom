import React from 'react';

const StoreLocations = ({ subtitle, title, locations }) => {
  return (
    <div className="flex-col text-center mt-5 w-full ">
      <p className="text-sm font-medium text-gray-500 mb-4">{subtitle}</p>
      <h2 className="text-3xl font-bold text-black mb-12">{title}</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8  mx-auto">
        {locations.map((location, index) => (
          <div key={index} className="flex flex-col text-center">
            <div className="w-full overflow-hidden rounded-[4px] mb-6 shadow-sm">
              <img 
                src={location.image} 
                alt={location.title} 
                className="w-full h-[250px] md:h-[320px] object-cover hover:scale-110 transition-transform duration-700 cursor-pointer"
              />
            </div>
            <h3 className="text-xl font-bold text-black mb-2">{location.title}</h3>
            <p className="text-sm text-gray-500">{location.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoreLocations;
