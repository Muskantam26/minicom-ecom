import React, { useState } from "react";



const ShoppingGuide = ({ data = [] }) => {
  const [activeTab, setActiveTab] = useState(1);

  const handleClick = (id) => {
    setActiveTab(id);
  };

  return (
    <div className="w-auto bg-gray-100 p-10  rounded-2xl ">
      <div className="max-w-screen-2xl mx-auto px-1 sm:px-8 flex flex-col lg:flex-row gap-12 lg:gap-24">
        {/* Left Content */}
        <div className="w-full  flex flex-col justify-center">
          {/* Section Title */}
          <div className="mb-12">
            <h4 className="text-xs font-bold text-gray-400 tracking-[0.2em] uppercase mb-4">
              STEP TO BUY - SIMPLE & HASSLE-FREE
            </h4>
            <h2 className="text-xl font-bold w-100 text-black leading-tight tracking-wider">
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
                  <div className="flex flex-col items-center mr-6">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-colors duration-300 ${
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
                  <div className="flex flex-col justify-start pt-2">
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
        <div className="w-full relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
          {data.map((step) => (
            <div
              key={step.id}
              className={`absolute inset-0 w-full h-full transition-transform duration-700 ease-in-out ${
                activeTab === step.id
                  ? "translate-x-0 opacity-100 z-10"
                  : activeTab < step.id
                    ? "translate-x-full opacity-0 z-0"
                    : "-translate-x-full opacity-0 z-0"
              }`}
            >
              <img
                src={step.image}
                alt={step.title}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShoppingGuide;
