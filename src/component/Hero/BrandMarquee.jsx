import React from "react";



const BrandMarquee = ({ data = [] }) => {
  return (
    <div className="w-full bg-[#f8f8f8] py-12 overflow-hidden border-t border-b border-gray-100">
      <div className="relative flex max-w-[100vw] overflow-hidden group">
        {/* Animated Marquee Strip */}
        <div className="flex w-max animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
          {/* First set of logos */}
          <div className="flex shrink-0 items-center justify-around w-max">
            {data.map((src, index) => (
              <div
                key={`brand-1-${index}`}
                className="mx-8 flex h-16 w-32 items-center justify-center opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 sm:mx-12 md:h-20 md:w-40 lg:mx-16"
              >
                <img
                  src={src}
                  alt={`Brand ${index + 1}`}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Second identical set for seamless looping */}
          <div className="flex shrink-0 items-center justify-around w-max">
            {data.map((src, index) => (
              <div
                key={`brand-2-${index}`}
                className="mx-8 flex h-16 w-32 items-center justify-center opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 sm:mx-12 md:h-20 md:w-40 lg:mx-16"
              >
                <img
                  src={src}
                  alt={`Brand ${index + 1}`}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandMarquee;
