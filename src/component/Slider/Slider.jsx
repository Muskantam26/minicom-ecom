import React, { useState, useEffect } from "react";

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

  const handlePrev = () => {
    if (totalSlides <= 1) return;
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    if (totalSlides <= 1) return;
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  if (!slides || slides.length === 0) return null;

  return (
    <div
      className={`relative w-full h-full bg-black overflow-hidden group ${className}`}
    >
      {/* Background Images with Crossfade */}
      {slides.map((slide, index) => (
        <div
          key={slide.id || index}
          className={`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-80" : "opacity-0"
          }`}
          style={{ backgroundImage: `url("${slide.image}")` }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
        </div>
      ))}

      {/* Slider Content */}
      <div className="relative z-20 h-full flex flex-col justify-end pb-5 px-[3%] pt-20">
        <div className="max-w-2xl text-white">
          {/* Subheading */}
          {slides[currentSlide].subheading && (
            <h4
              key={`sub-${currentSlide}`}
              className="text-[10px] font-[var(--section-subheading-font-weight,500)] tracking-[var(--section-subheading-letter-spacing,1px)] uppercase mb-2 animate-[fadeInUp_0.2s_ease-out_forwards]"
            >
              {slides[currentSlide].subheading}
            </h4>
          )}

          {/* Main Heading */}
          {slides[currentSlide].heading && (
            <h1
              key={`head-${currentSlide}`}
              className="text-xl md:text-5xl lg:text-2xl font-[var(--heading-font-weight,700)] leading-[1.2] mb-10 animate-[fadeInUp_0.7s_ease-out_forwards]"
            >
              {slides[currentSlide].heading.split("\n").map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i !==
                    slides[currentSlide].heading.split("\n").length - 1 && (
                    <br />
                  )}
                </React.Fragment>
              ))}
            </h1>
          )}

          {/* CTA Button */}
          {slides[currentSlide].linkText && (
            <button
              key={`btn-${currentSlide}`}
              className="bg-white text-black px-8 py-4 text-xs font-bold uppercase flex items-center gap-3 hover:bg-[var(--color-button)] hover:text-black transition-colors animate-[fadeInUp_0.9s_ease-out_forwards]"
            >
              {slides[currentSlide].linkText}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Bottom Slider Controls */}
      {totalSlides > 1 && (
        <div className="absolute bottom-10 left-0 w-full flex justify-center items-center gap-4 text-white z-10 text-xs font-bold">
          <button
            onClick={handlePrev}
            className="hover:text-[var(--color-button)] transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <span className="w-6 text-center text-white">
            {String(currentSlide + 1).padStart(2, "0")}
          </span>

          {/* Progress Bar Container */}
          <div className="w-48 h-[2px] bg-white/30 relative flex rounded-full overflow-hidden">
            {/* Animated Progress indicator */}
            <div
              key={currentSlide}
              className="absolute left-0 top-0 h-full bg-white transition-none"
              style={{
                animation: `progress ${slideDuration}ms linear forwards`,
              }}
            />
          </div>

          <span className="w-6 text-center text-[var(--color-button)]">
            {String(totalSlides).padStart(2, "0")}
          </span>

          <button
            onClick={handleNext}
            className="hover:text-[var(--color-button)] transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0px);
          }
        }
        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};
