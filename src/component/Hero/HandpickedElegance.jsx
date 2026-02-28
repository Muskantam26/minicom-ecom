import React, { useState, useEffect } from "react";
import { Star, Eye, ShoppingBag, ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";



const HandpickedElegance = ({ 
  data = [], 
  itemsPerRow = 5, 
  isSlider = true,
  title = "HANDPICKED ELEGANCE",
  subtitle = "TIMELESS ELEGANCE FOR YOUR HOME"
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(itemsPerRow);

  // Handle responsive visible items count
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setVisibleItems(1);
      else if (window.innerWidth < 768) setVisibleItems(2);
      else if (window.innerWidth < 1024) setVisibleItems(3);
      else setVisibleItems(itemsPerRow);
    };

    handleResize(); // Initial setup
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [itemsPerRow]);

  const totalPages = Math.ceil(data.length / visibleItems);
  const maxIndex = data.length - visibleItems;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goToPage = (pageIndex) => {
    const newIndex = pageIndex * visibleItems;
    setCurrentIndex(newIndex > maxIndex ? maxIndex : newIndex);
  };

  const currentPage = Math.ceil(currentIndex / visibleItems);

  return (
    <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-8 py-10">
      {/* Header */}
      <div className={`flex flex-wrap md:flex-nowrap items-center ${title || subtitle ? 'justify-between' : 'justify-end'} mb-8 pb-4`}>
        {(title || subtitle) && (
        <div className="flex items-center gap-4 flex-grow w-full md:w-auto">
          {title && (
          <h2 className="text-xl md:text-2xl font-bold uppercase text-gray-900 whitespace-nowrap">
            {title}
          </h2>
          )}
          {title && subtitle && <div className="h-px bg-black w-12 md:w-32"></div>}
          {subtitle && (
          <span className="text-xs md:text-xs text-gray-400 font-medium uppercase tracking-wider truncate">
            {subtitle}
          </span>
          )}
        </div>
        )}

        {/* Navigation */}
        {isSlider && (
        <div className="flex items-center gap-4 mt-4 md:mt-0 justify-end w-full md:w-auto">
          <button
            onClick={prevSlide}
            className="text-gray-500 hover:text-black transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToPage(idx)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentPage === idx
                    ? "bg-black"
                    : "border border-gray-300 hover:border-black"
                }`}
              ></button>
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="text-gray-500 hover:text-black transition-colors"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
        )}
      </div>

      {/* Product Slider/Grid Container */}
      <div className={isSlider ? "overflow-hidden" : ""}>
        <div
          className={`flex ${isSlider ? "transition-transform duration-500 ease-in-out" : "flex-wrap"} -mx-3`}
          style={isSlider ? {
            transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
          } : {}}
        >
          {data.map((product) => (
            <div
              key={product.id}
              className={`w-full sm:w-1/2 md:w-1/3 ${itemsPerRow === 3 ? 'lg:w-1/3' : itemsPerRow === 4 ? 'lg:w-1/4' : 'lg:w-1/5'} flex-shrink-0 px-3 ${!isSlider ? 'mb-8' : ''}`}
            >
              <Link to={`/product/${product.id}`} className="group flex flex-col cursor-pointer h-full">
                {/* Image Container */}
                <div className="relative aspect-[4/5] bg-[#f8f8f8] mb-4 overflow-hidden flex items-center justify-center p-6">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Hover Icons (Top Right) */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-out z-10">
                    <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-black hover:bg-yellow-500 shadow-sm transition-colors">
                      <Star className="w-4 h-4" />
                    </button>
                    <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-gray-700 hover:text-black shadow-sm transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Hover Icon (Bottom Right) */}
                  <div className="absolute bottom-4 right-4 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out delay-75 z-10">
                    <button className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 shadow-sm transition-colors">
                      <ShoppingBag className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Product Details */}
                <div className="flex flex-col gap-1.5 flex-grow px-1">
                  {/* Stars */}
                  <div className="flex items-center text-[#d1d5db]">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-sm text-gray-800 font-medium leading-relaxed line-clamp-2 mt-1">
                    {product.name}
                  </h3>

                  {/* Price */}
                  <p className="text-[15px] font-bold text-gray-900 mt-2">
                    {product.price}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HandpickedElegance;
