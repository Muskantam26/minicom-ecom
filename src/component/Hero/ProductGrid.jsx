import React from 'react';
import { motion } from 'framer-motion';

const ProductGrid = ({ data }) => {
  if (!data || data.length === 0) return null;

  return (
    <div className="w-full p-4 md:p-5 mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {data.map((categoryGroup, index) => (
          <div key={index} className="flex flex-col">
            {/* Category Title */}
            <h2 className="text-lg md:text-[22px] font-bold text-gray-900 mb-4 md:mb-6 pb-3 md:pb-4 border-b border-gray-100 uppercase">
              {categoryGroup.category}
            </h2>
            
            {/* Product List */}
            <div className="flex flex-col gap-4 md:gap-6">
              {categoryGroup.items.map((item) => (
                <div key={item.id} className="flex items-start gap-3 md:gap-4 group cursor-pointer">
                  {/* Image Container with framer-motion hover effect */}
                  <motion.div 
                    initial="initial"
                    whileHover="hover"
                    className="relative w-[80px] h-[80px] md:w-[100px] md:h-[100px] flex-shrink-0 bg-[#F9F9F9] rounded-md overflow-hidden"
                  >
                    <motion.img
                      variants={{
                        initial: { opacity: 1, scale: 1 },
                        hover: { opacity: 0, scale: 0.95 }
                      }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-contain p-2"
                    />
                    <motion.img
                      variants={{
                        initial: { opacity: 0, scale: 1.05 },
                        hover: { opacity: 1, scale: 1 }
                      }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      src={item.hoverImage}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-contain p-2"
                    />
                    
                    {/* Discount Badge */}
                    {item.discount && (
                      <span className="absolute top-1 left-1 md:top-2 md:left-2 bg-[#F97316] shadow-sm text-white text-[9px] md:text-[10px] font-medium px-1.5 md:px-2 py-0.5 rounded-full z-10">
                        {item.discount}
                      </span>
                    )}
                  </motion.div>
                  
                  {/* Product Details */}
                  <div className="flex flex-col pt-1 md:pt-2">
                    <h3 className="text-xs md:text-[13px] text-gray-700 leading-snug md:leading-[1.4] mb-1.5 md:mb-2 group-hover:text-brand-hover transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-1.5 md:gap-2">
                      <span className="text-[13px] md:text-[14px] font-bold text-gray-900">
                        {item.price}
                      </span>
                      {item.originalPrice && (
                        <span className="text-xs md:text-[13px] text-[#A3A3A3] line-through">
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
