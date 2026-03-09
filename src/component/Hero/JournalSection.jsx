import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const JournalSection = ({ data = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setVisibleItems(1);
      else if (window.innerWidth < 1024) setVisibleItems(2);
      else setVisibleItems(3);
    };

    handleResize(); // Initial setup
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(data.length / visibleItems);
  const maxIndex = data.length - visibleItems > 0 ? data.length - visibleItems : 0;

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
    <div className="w-full max-w-screen-2xl mx-auto  sm:px-8 py-10 md:py-16">
      
      {/* Mobile-centric Header & Control Layout (matches the screenshot) */}
      <div className="flex flex-col mb-6 md:mb-10">
        
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold uppercase text-gray-900 mb-2 md:mb-4">
          THE MINICOM JOURNAL
        </h2>
        
        {/* Subtitle / Category text */}
        <div className="flex items-center gap-4 mb-6 md:mb-8">
          <span className="text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-widest block">
            DESIGN & TRENDS
          </span>
          {/* Visible on larger screens for styling */}
          <div className="hidden md:block h-px bg-brand-hover w-24"></div>
        </div>

        {/* Navigation Controls (Below header text, above image slider for mobile, keeping line style from image) */}
        <div className="flex items-center gap-4 w-full justify-start md:justify-end">
          <button
            onClick={prevSlide}
            className="text-gray-500 hover:text-black transition-colors focus:outline-none flex items-center gap-2"
          >
            <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
            <div className="h-px bg-gray-400 hover:bg-black transition-colors w-8 md:w-12 hidden sm:block"></div>
          </button>
          
          <div className="flex items-center gap-3 md:gap-4 mx-2">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToPage(idx)}
                className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-colors ${
                  currentPage === idx
                    ? "bg-gray-900 border-gray-900"
                    : "border-2 border-gray-200 hover:border-gray-400 bg-transparent"
                }`}
                aria-label={`Go to page ${idx + 1}`}
              ></button>
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="text-gray-500 hover:text-black transition-colors focus:outline-none flex items-center gap-2"
          >
            <div className="h-px bg-gray-400 hover:bg-black transition-colors w-8 md:w-12 hidden sm:block"></div>
            <ArrowRight className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
          </button>
        </div>

      </div>

      {/* Slider Container */}
      <div className="overflow-hidden mt-6 md:mt-2">
        <div
          className="flex transition-transform duration-500 ease-in-out -mx-3"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
          }}
        >
          {data.map((item) => (
            <div
              key={item.id}
              className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-3 cursor-pointer group"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-5">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Badge matching the 'NEWS' look */}
                <div className="absolute bottom-5 left-5 bg-white px-5 py-2 rounded-full shadow-md transition-transform duration-300 group-hover:-translate-y-1">
                  <span className="text-[11px] md:text-xs font-bold text-gray-900 tracking-wide uppercase">{item.badge}</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2 mt-2 md:mt-4">
                <div className="flex items-center gap-3 text-[10px] md:text-[11px] font-bold text-gray-400 tracking-wide uppercase">
                  <span>BY <span className="text-gray-900">{item.author}</span></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-900"></span>
                  <span>{item.date}</span>
                </div>
                <h3 className="text-[18px] md:text-[20px] font-bold text-gray-900 leading-snug group-hover:text-yellow-600 transition-colors duration-300 mt-1 md:mt-2">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JournalSection;
