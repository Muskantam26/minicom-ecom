import React from "react";

const CoreFeatures = ({ data }) => {
  return (
    <div className="w-full mx-auto   md:px-8 py-10 md:py-16">
      {data?.subtitle && (
        <p className="text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-1  text-center md:text-left">
          {data.subtitle}
        </p>
      )}
      {data?.title && (
        <h2 className="text-xl md:text-[28px] font-bold uppercase tracking-wide mb-8 md:mb-12 text-black leading-snug text-center md:text-left">
          {data.title.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br className="hidden md:block" />
            </React.Fragment>
          ))}
        </h2>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {data?.features?.map((feature, index) => (
          <div key={index} className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gray-50 flex items-center justify-center mb-4 md:mb-6">
              {feature.icon}
            </div>
            <h3 className="text-[14px] md:text-[15px] font-bold mb-2 md:mb-3 text-black">{feature.title}</h3>
            <p className="text-[12px] md:text-[13px] text-gray-500 leading-relaxed px-4 md:px-0">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreFeatures;
