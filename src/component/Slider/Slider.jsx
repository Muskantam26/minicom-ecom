import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button1 } from "../Btn/Button1";

export const Slider = ({ slides, slideDuration = 5000, className = "" }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slides?.length || 0;

  useEffect(() => {
    if (totalSlides <= 1) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, slideDuration);

    return () => clearInterval(timer);
  }, [totalSlides, slideDuration]);

  if (!slides || totalSlides === 0) return null;

  const handlePrev = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  const handleNext = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);

  const activeSlide = slides[currentSlide];

  return (
    <div className={`relative w-full h-full bg-brand-hover overflow-hidden group ${className}`}>
      {/* Background Images with Crossfade */}
      {slides.map((slide, index) => (
        <div
          key={slide.id || index}
          className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-80" : "opacity-0"
          }`}
          style={{ backgroundImage: `url("${slide.image}")` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
        </div>
      ))}

      {/* Slider Content */}
      <div className="relative z-20 h-full flex flex-col justify-center md:justify-end items-center md:items-start pb-20 md:pb-5 px-[5%] md:px-[3%] pt-20 text-center md:text-left">
        <div className="max-w-2xl text-white flex flex-col items-center md:items-start">
          
          {activeSlide.subheading && (
            <motion.h4
              key={`sub-${currentSlide}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="text-[10px] md:text-xs font-medium tracking-widest uppercase mb-2"
            >
              {activeSlide.subheading}
            </motion.h4>
          )}

          {activeSlide.heading && (
            <motion.h1
              key={`head-${currentSlide}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl md:text-sm lg:text-4xl font-bold leading-tight mb-6 md:mb-10"
            >
              {activeSlide.heading.split("\n").map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i !== activeSlide.heading.split("\n").length - 1 && <br />}
                </React.Fragment>
              ))}
            </motion.h1>
          )}

          {activeSlide.linkText && (
            <motion.div
              key={`btn-${currentSlide}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button1
                variant="primary"
                text={activeSlide.linkText}
                iconPosition="right "
                className="bg-white font-medium hover:bg-yellow-500 "
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                }
              />
            </motion.div>
          )}
        </div>
      </div>

      {/* Bottom Slider Controls */}
      {totalSlides > 1 && (
        <div className="absolute bottom-10 left-0 w-full flex justify-center items-center gap-4 text-white z-10 text-xs font-bold">
          <button onClick={handlePrev} className="hover:text-[var(--color-button)] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <span className="w-6 text-center">{String(currentSlide + 1).padStart(2, "0")}</span>

          <div className="w-48 h-[2px] bg-white/30 relative rounded-full overflow-hidden">
            <motion.div
              key={currentSlide}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: slideDuration / 1000, ease: "linear" }}
              className="absolute left-0 top-0 h-full bg-white"
            />
          </div>

          <span className="w-6 text-center text-[var(--color-button)]">{String(totalSlides).padStart(2, "0")}</span>

          <button onClick={handleNext} className="hover:text-[var(--color-button)] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};
