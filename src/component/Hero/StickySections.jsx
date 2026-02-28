import React from "react";
import { ArrowUpRight } from "lucide-react";

const StickySections = ({ data }) => {
  return (
    <div className="relative w-full pb-[10vh]">
      {data.map((item, index) => (
        <div
          key={index}
          className="sticky top-[10vh] w-full h-[80vh] flex flex-col md:flex-row overflow-hidden shadow-2xl shadow-black/5 rounded-3xl border border-gray-100 bg-white"
          style={{
           
            zIndex: index + 10,
            marginTop: index === 0 ? "0" : "10vh", 
          }}
        >
          {/* Left Side: Content */}
          <div className="w-full md:w-1/2 bg-[#f9f9f9] flex flex-col justify-center items-start p-10 md:p-20 lg:p-32 h-1/2 md:h-full">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 uppercase mb-6 tracking-wide leading-tight">
              {item.title}
            </h2>
            <p className="text-gray-600 text-lg md:text-xl mb-10 leading-relaxed max-w-lg">
              {item.description}
            </p>
            {item.buttonText && (
              <button className="bg-black text-white px-8 py-4 text-sm md:text-base font-bold uppercase tracking-widest flex items-center gap-3 hover:bg-gray-800 transition-colors duration-300">
                {item.buttonText}
                <ArrowUpRight size={20} />
              </button>
            )}
          </div>

          {/* Right Side: Image */}
          <div className="w-full md:w-1/2 h-1/2 md:h-full relative">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default StickySections;
