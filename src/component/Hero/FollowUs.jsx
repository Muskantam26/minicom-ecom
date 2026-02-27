import React from "react";

const FollowUS = ({ data }) => {
  // Fallback data in case props are not passed
  const content = data || {
    profileImage: "https://nov-minicom.myshopify.com/cdn/shop/files/icon-rbb.png?crop=center&height=380&v=1750222821&width=380",
    handle: "@Risingbamboo",
    followers: "13K FOLLOWERS",
    title: "FOLLOW US ON INSTAGRAM",
    description: "Stay inspired with our latest furniture trends, design ideas, and exclusive offers! Follow @Minicom on Instagram for daily home inspiration and special deals.",
    buttonText: "FOLLOW US",
    buttonLink: "#",
    images: [
      [
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80",
      ],
      [
        "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=80",
      ],
      [
        "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80",
      ]
    ]
  };

  return (
    <section className="relative w-full bg-[#f8f8f8] overflow-hidden py-10 lg:py-0">
     
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between px-4 sm:px-10 lg:pr-0 h-auto lg:h-[700px] relative">
        
        {/* Left Side Content */}
        <div className="w-full lg:w-1/3 flex flex-col justify-center gap-6 z-20 py-10 relative">
          <div className="flex items-center gap-4">
            <img 
              src={content.profileImage} 
              alt={content.handle} 
              className="w-12 h-12 rounded-full object-cover" 
            />
            <div>
              <h3 className="text-gray-900 font-semibold text-[15px] leading-tight">{content.handle}</h3>
              <p className="text-[#a3a3a3] text-[10px] tracking-widest font-bold uppercase mt-1">
                {content.followers}
              </p>
            </div>
          </div>
          
          <h2 className=" lg:text-2xl font-bold text-black mt-4 tracking-tight">
            {content.title}
          </h2>
          
          <p className="text-gray-500 text-[13px] leading-loose max-w-sm mt-2">
            {content.description}
          </p>
          
          <div className="mt-4">
            <a 
              href={content.buttonLink}
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 text-[11px] font-bold uppercase tracking-widest hover:bg-gray-50 transition-colors shadow-sm border border-gray-100 group"
            >
              {content.buttonText} 
              <span className="transform -rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-gray-500 text-lg leading-none">
                →
              </span>
            </a>
          </div>
        </div>

        {/* Right Side Slider */}
        <div className="w-full lg:w-[60%] h-[500px] lg:h-full relative flex gap-4 overflow-hidden pl-0 lg:pl-10 mt-10 lg:mt-0">
          
          {/* Blur Gradients for the slider area */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#f8f8f8] via-[#f8f8f8]/80 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f8f8f8] via-[#f8f8f8]/80 to-transparent z-10 pointer-events-none"></div>

          {content.images.map((column, colIndex) => {
            const isSlideDown = colIndex === 1;
            // Duplicate array to create a seamless loop
            const items = [...column, ...column];

            return (
              <div key={colIndex} className="flex-1 relative w-full h-full overflow-hidden scrollbar-hide">
                 <div className={`flex flex-col gap-4 w-full ${isSlideDown ? 'animate-slide-down' : 'animate-slide-up'}`}>
                    {items.map((img, imgIndex) => (
                      <div key={imgIndex} className="w-full h-[220px] sm:h-[280px] lg:h-[320px] shrink-0">
                        <img 
                          src={img} 
                          alt="" 
                          className="w-full h-full object-cover rounded-xl shadow-sm" 
                        />
                      </div>
                    ))}
                 </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FollowUS;