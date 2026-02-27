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
    <div className="w-full mx-auto px-4 py-16 font-sans relative">
      <div className="text-center mb-12">
        <p className="text-xs text-gray-400 font-semibold tracking-wider mb-2 uppercase">
          5.00 FROM 1230+ REVIEWS
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
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
              className="w-full shrink-0 flex flex-col md:flex-row gap-8 md:gap-16 px-4"
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
                      // Let's make the second item in the desktop view slightly faded, as in the user's image,
                      // OR we can just keep them both full opacity like a normal slider. Let's stick to full opacity but slightly muted text to match the design.
                      idx === 1 && itemsPerPage === 2
                        ? "opacity-60 hover:opacity-100" // Faded style for the second one as seen in picture
                        : "opacity-100"
                    }`}
                  >
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-500 fill-current"
                        />
                      ))}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 leading-snug">
                      {review.title}
                    </h3>
                    <p className="text-gray-600 mb-8 leading-relaxed text-sm md:text-base">
                      {review.text}
                    </p>

                    <div className="flex items-center mt-auto">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <p className="font-bold text-gray-900 text-sm">
                          {review.name}{" "}
                          <span className="text-gray-400 font-normal text-xs ml-1 uppercase">
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
      <div className="flex items-center justify-center mt-12 gap-6 relative">
        <button
          onClick={handlePrev}
          className="p-1 hover:text-gray-600 transition-colors"
          aria-label="Previous Review"
        >
          <ArrowLeft className="w-5 h-5 text-gray-900" />
        </button>

        <div className="flex gap-3">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToDot(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                currentIndex === index
                  ? "bg-black"
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
          <ArrowRight className="w-5 h-5 text-gray-900" />
        </button>

        {/* Scroll up button similar to image */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="absolute right-0 w-10 h-10 border border-yellow-400 rounded-full flex items-center justify-center text-yellow-500 hover:bg-yellow-50 transition-colors"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default CustomerReviews;
