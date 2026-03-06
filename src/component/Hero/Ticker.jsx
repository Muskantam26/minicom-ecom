import React from "react";
import { ShieldCheck, Wrench, Truck, BadgeDollarSign } from "lucide-react";
import { motion } from "framer-motion";

export const Ticker = ({ data = [] }) => {
  return (
    <div className="w-full bg-white  overflow-hidden py-3 md:py-4 z-10 relative flex">
      {/* Ticker Container */}
      <motion.div
        className="flex whitespace-nowrap w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          ease: "linear",
          duration: 15,
          repeat: Infinity,
        }}
      >
        {/* Render items twice for infinite loop */}
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center space-x-6 md:space-x-12 px-4 md:px-8 min-w-max">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex items-center text-title text-[14px] md:text-[16px] lg:text-[20px] tracking-wide"
                style={{
                  fontFamily:
                    "var(--section-subheading-font-family, sans-serif)",
                }}
              >
                {/* Responsive Icon wrapper */}
                <div className="flex items-center justify-center mr-2 md:mr-3 [&>svg]:w-[16px] [&>svg]:h-[16px] md:[&>svg]:w-[20px] md:[&>svg]:h-[20px] lg:[&>svg]:w-[24px] lg:[&>svg]:h-[24px]">
                  {item.icon}
                </div>
                <span
                  className={`${index % 2 === 0 ? "font-semibold" : "font-extralight"} mr-2 md:mr-4`}
                  
                >
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Ticker;
