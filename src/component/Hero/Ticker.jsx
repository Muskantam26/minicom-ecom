import React from "react";
import { ShieldCheck, Wrench, Truck, BadgeDollarSign } from "lucide-react";



export const Ticker = ({ data = [] }) => {
  return (
    <div className="w-full bg-white border-y border-gray-100 overflow-hidden py-4 z-10 relative flex">
      {/* Ticker Container */}
      <div className="flex animate-ticker whitespace-nowrap">
        {/* Render items twice for infinite loop */}
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center space-x-12 px-8 min-w-max">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex items-center text-[#181818] text-[20px] tracking-wide"
                style={{
                  fontFamily:
                    "var(--section-subheading-font-family, sans-serif)",
                }}
              >
                {item.icon}
                <span
                  className="font-light  mr-4"
                  style={{ letterSpacing: "0px" }}
                >
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
