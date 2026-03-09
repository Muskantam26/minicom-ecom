import React, { useState, useEffect } from "react";
import { Star, ArrowLeft, ArrowRight, ArrowUp } from "lucide-react";

const CustomerReviews = ({ data = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(2);

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setItemsPerPage(1);
    } else {
      setItemsPerPage(2);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  const goToDot = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full mx-auto   font-sans relative">
      <div className="text-center mb-8 md:mb-12">
        <p className="text-[10px] md:text-xs text-gray-400 font-semibold tracking-wider mb-1 md:mb-2 uppercase">
          5.00 FROM 1230+ REVIEWS
        </p>
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 tracking-tight">
          WHAT CUSTOMERS SAY
        </h2>
      </div>

      <div className="relative overflow-hidden w-full">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {/* We group items into pages */}
          {Array.from({ length: totalPages }).map((_, pageIndex) => (
            <div
              key={pageIndex}
              className="w-full shrink-0 flex flex-col md:flex-row gap-6 md:gap-16 px-2 md:px-4"
            >
              {data
                .slice(
                  pageIndex * itemsPerPage,
                  (pageIndex + 1) * itemsPerPage
                )
                .map((review, idx) => (
                  <div
                    key={review.id}
                    className={`w-full md:w-1/2 flex flex-col justify-start transition-opacity duration-500 ${
                     
                      idx === 1 && itemsPerPage === 2
                        ? "opacity-60 hover:opacity-100"
                        : "opacity-100"
                    }`}
                  >
                    <div className="flex gap-1 mb-3 md:mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-3 h-3 md:w-4 md:h-4 text-yellow-500 fill-current"
                        />
                      ))}
                    </div>
                    <h3 className="text-base md:text-xl font-bold text-gray-900 mb-2 md:mb-4 leading-snug">
                      {review.title}
                    </h3>
                    <p className="text-gray-600 mb-6 md:mb-8 leading-relaxed text-[13px] md:text-base flex text-justify">
                      {review.text}
                    </p>

                    <div className="flex items-center mt-auto">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover mr-3 md:mr-4 border border-gray-100"
                      />
                      <div>
                        <p className="font-bold text-gray-900 text-xs md:text-sm">
                          {review.name}{" "}
                          <span className="text-gray-400 font-normal text-[10px] md:text-xs ml-1 uppercase block sm:inline mt-0.5 sm:mt-0">
                            – {review.location}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>

      {/* Slider Controls */}
      <div className="flex items-center justify-center mt-8 md:mt-12 gap-4 md:gap-6 relative">
        <button
          onClick={handlePrev}
          className="p-1 hover:text-gray-600 transition-colors"
          aria-label="Previous Review"
        >
          <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 text-gray-900" />
        </button>

        <div className="flex gap-2 md:gap-3">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToDot(index)}
              className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all ${
                currentIndex === index
                  ? "bg-brand-hover"
                  : "bg-transparent border border-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="p-1 hover:text-gray-600 transition-colors"
          aria-label="Next Review"
        >
          <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-gray-900" />
        </button>

      </div>
    </div>
  );
};

export default CustomerReviews;
