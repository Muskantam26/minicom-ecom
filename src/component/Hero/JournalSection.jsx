import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const JournalSection = ({ data = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(3);

  // Handle responsive visible items count
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
    <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-8 py-10">
      {/* Header */}
      <div className="flex flex-wrap md:flex-nowrap items-center justify-between mb-8 pb-4">
        <div className="flex items-center gap-4 flex-grow w-full md:w-auto">
          <h2 className="text-xl md:text-2xl font-bold uppercase text-gray-900 whitespace-nowrap">
            THE MINICOM JOURNAL
          </h2>
          <div className="h-px bg-black w-12 md:w-24"></div>
          <span className="text-xs md:text-xs text-gray-400 font-medium uppercase tracking-wider truncate">
            DESIGN & TRENDS
          </span>
        </div>

        {/* Navigation */}
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
      </div>

      {/* Slider Container */}
      <div className="overflow-hidden">
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
                <div className="absolute bottom-4 left-4 bg-white px-4 py-1.5 rounded-full shadow-sm">
                  <span className="text-xs font-bold text-gray-900">{item.badge}</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-[11px] font-bold text-gray-400 tracking-wide uppercase">
                  <span>BY <span className="text-gray-900">{item.author}</span></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-900"></span>
                  <span>{item.date}</span>
                </div>
                <h3 className="text-[17px] font-bold text-gray-900 leading-snug group-hover:text-yellow-600 transition-colors duration-300 pr-4">
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
