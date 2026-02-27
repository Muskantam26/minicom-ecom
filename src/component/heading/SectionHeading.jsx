import React from "react";

const SectionHeading = ({
  subtitle = "THE ULTIMATE FURNITURE EDIT",
  title = "EXCLUSIVE PICKS ELEVATE YOUR SPACE",
  description = "Discover a curated selection of premium furniture designed to transform your home. From timeless elegance to modern sophistication, these exclusive picks bring style, comfort, and functionality to every corner of your space. Upgrade your living with the finest craftsmanship and trendsetting designs!",
}) => {
  return (
    <div className="flex flex-col justify-center items-center text-center w-full px-4 mb-10 max-w-4xl mx-auto space-y-4">
      {subtitle && (
        <p className="text-[10px] font-bold text-gray-500 tracking-widest uppercase">
          {subtitle}
        </p>
      )}

      {title && (
        <h2 className="text-3xl text-black font-bold uppercase tracking-wide">
          {title}
        </h2>
      )}

      {description && (
        <p className="text-sm text-gray-600 max-w-4xl leading-relaxed mt-4">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
