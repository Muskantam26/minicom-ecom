import React from "react";

const CoreFeatures = ({ data }) => {
  return (
    <div className="w-full  mx-auto px-4 md:px-8 py-16">
      {data?.subtitle && (
        <p className="text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-2">
          {data.subtitle}
        </p>
      )}
      {data?.title && (
        <h2 className="text-2xl md:text-[28px] font-bold uppercase tracking-wide mb-12 text-black leading-snug">
          {data.title.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </h2>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {data?.features?.map((feature, index) => (
          <div key={index} className="flex flex-col items-start text-left">
            <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mb-6">
              {feature.icon}
            </div>
            <h3 className="text-[15px] font-bold mb-3 text-black">{feature.title}</h3>
            <p className="text-[13px] text-gray-500 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreFeatures;
