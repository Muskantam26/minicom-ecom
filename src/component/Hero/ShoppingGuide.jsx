import React, { useState } from "react";
import { motion } from "framer-motion";



const ShoppingGuide = ({ data = [] }) => {
  const [activeTab, setActiveTab] = useState("1");

  const handleClick = (id) => {
    setActiveTab(id);
  };

  return (
    <div className="w-full bg-gray-100 lg:p-10  rounded-2xl ">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 flex flex-col-reverse lg:flex-row gap-8 lg:gap-24">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          {/* Section Title */}
          <div className="mb-8 lg:mb-12">
            <h4 className="text-[10px] lg:text-xs font-bold text-gray-400 tracking-[0.2em] uppercase mb-2 lg:mb-4">
              STEP TO BUY - SIMPLE & HASSLE-FREE
            </h4>
            <h2 className="text-sm lg:text-xl font-bold w-full text-black leading-tight tracking-wider">
              YOUR GUIDE TO A SEAMLESS SHOPPING EXPERIENCE
            </h2>
          </div>

          {/* Accordion Steps */}
          <div className="flex flex-col">
            {data.map((step, index) => {
              const isActiveTab = activeTab === step.id;

              return (
                <div
                  key={step.id}
                  className="flex mb-2 group cursor-pointer"
                  onClick={() => handleClick(step.id)}
                >
                  {/* Step Number & Line */}
                  <div className="flex flex-col items-center mr-4 lg:mr-6 shrink-0">
                    <div
                      className={`w-8 h-8 lg:w-10 lg:h-10 shrink-0 rounded-full flex items-center justify-center text-xs lg:text-sm font-bold transition-colors duration-300 ${
                        isActiveTab
                          ? "bg-yellow-400 text-black"
                          : "bg-gray-200 text-gray-400"
                      }`}
                    >
                      {step.id}
                    </div>
                    {/* Vertical Line */}
                    {index !== data.length - 1 && (
                      <div
                        className={`w-[2px] h-full min-h-[40px] mt-2 transition-colors duration-300 ${
                          isActiveTab ? "bg-yellow-400" : "bg-transparent"
                        }`}
                      ></div>
                    )}
                  </div>

                  {/* Step Content */}
                  <div className="flex flex-col justify-start pt-1 lg:pt-2">
                    <h3
                      className={`text-sm font-bold transition-colors duration-300 ${
                        isActiveTab ? "text-black" : "text-gray-400"
                      }`}
                    >
                      {step.title}
                    </h3>

                    {/* Expandable Content */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        isActiveTab
                          ? "max-h-40 opacity-100 mt-3"
                          : "max-h-0 opacity-0 mt-0"
                      }`}
                    >
                      <p className="text-gray-500 leading-relaxed text-xs md:text-base pr-4">
                        {step.content}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Image Slider */}
        <div className="w-full  relative rounded-sm overflow-hidden  lg:mt-0">
          {data.map((step) => (
            <motion.div
              key={step.id}
              initial={false}
              animate={{
                x: activeTab === step.id ? "0%" : activeTab < step.id ? "100%" : "-100%",
                opacity: activeTab === step.id ? 1 : 0,
                zIndex: activeTab === step.id ? 10 : 0
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={step.image}
                alt={step.title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShoppingGuide;
