import React, { useState } from 'react';
import { Star } from 'lucide-react';

const ProductReviews = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  return (
    <div className="flex flex-col md:flex-row gap-8 w-full">
      {/* Left Column */}
      <div className="w-full md:w-[35%] lg:w-[30%] border border-gray-100 bg-white p-6 rounded-sm  shadow-xl flex flex-col">
        <h2 className="text-[18px] font-bold text-gray-900 mb-4">Reviews</h2>
        <p className="text-[13px] text-gray-500 mb-6 font-medium">Be the first to write a review</p>
        
        <div className="bg-[#f8f8f8] py-8 px-4 flex flex-col items-center justify-center rounded-sm mt-auto">
          <span className="text-[14px] text-gray-800 mb-3">Click to review:</span>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                onClick={() => setRating(star)}
                className="focus:outline-none transition-transform hover:scale-110"
              >
                <Star 
                  className={`w-[26px] h-[26px] stroke-[1.2] ${
                    star <= (hoverRating || rating) 
                      ? "fill-black text-black" 
                      : "text-gray-700"
                  } transition-colors`} 
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex-1 border border-gray-100 bg-white flex items-center shadow-xl justify-center  rounded-sm shadow-[0_2px_15px_rgba(0,0,0,0.04)] ">
        <p className="text-[13px] text-gray-500 font-medium">
          No reviews yet, lead the way and share your thoughts
        </p>
      </div>
    </div>
  );
};

export default ProductReviews;
