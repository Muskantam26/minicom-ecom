import React from 'react';

const ProductGrid = ({ data }) => {
  if (!data || data.length === 0) return null;

  return (
    <div className="w-full p-5   mx-auto ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {data.map((categoryGroup, index) => (
          <div key={index} className="flex flex-col">
            {/* Category Title */}
            <h2 className="text-[22px] font-bold text-gray-900 mb-6 pb-4 border-b border-gray-100">
              {categoryGroup.category}
            </h2>
            
            {/* Product List */}
            <div className="flex flex-col gap-6">
              {categoryGroup.items.map((item) => (
                <div key={item.id} className="flex items-start gap-4 group cursor-pointer">
                  {/* Image Container with hover effect */}
                  <div className="relative w-[100px] h-[100px] flex-shrink-0 bg-[#F9F9F9] rounded-md overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-contain p-2 transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0"
                    />
                    <img
                      src={item.hoverImage}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-contain p-2 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100"
                    />
                    
                    {/* Discount Badge */}
                    {item.discount && (
                      <span className="absolute top-2 left-2 bg-[#F97316] shadow-sm text-white text-[10px] font-medium px-2 py-0.5 rounded-full z-10">
                        {item.discount}
                      </span>
                    )}
                  </div>
                  
                  {/* Product Details */}
                  <div className="flex flex-col pt-2">
                    <h3 className="text-[13px] text-gray-700 leading-[1.4] mb-2  transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-[14px] font-bold text-gray-900">
                        {item.price}
                      </span>
                      {item.originalPrice && (
                        <span className="text-[13px] text-[#A3A3A3] line-through">
                          {item.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
