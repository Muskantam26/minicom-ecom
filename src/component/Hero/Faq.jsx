import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Faq = ({ data }) => {
  const navigate = useNavigate();
  const [openId, setOpenId] = useState(data?.questions?.[0]?.id || 3);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  if (!data) return null;

  if (data.isPageLayout) {
    return (
      <div className='w-full bg-white  p-5   mx-auto'>
        <div className=' mx-auto  md:mb-10'>
          
          {/* Top Paragraphs */}
          {data.topParagraphs && data.topParagraphs.length > 0 && (
             <div className='mb-6 md:mb-8 space-y-4 md:space-y-6'>
                {data.topParagraphs.map((para, index) => (
                   <p key={index} className={`text-[14px] md:text-[15px] leading-relaxed ${index === 0 ? 'text-black font-semibold tracking-wide' : 'text-[#666]'}`}>
                     {para}
                   </p>
                ))}
             </div>
          )}

          {/* Questions Accordion */}
          <div className='flex flex-col border-b border-outline'>
            {data.questions?.map((q) => (
              <div key={q.id} className='border-t border-outline overflow-hidden'>
                <button 
                  onClick={() => toggleAccordion(q.id)}
                  className='w-full relative flex items-center justify-between py-4 md:py-6 text-left focus:outline-none bg-white transition-colors group'
                >
                  <span className={`font-bold pr-4 text-[13px] md:text-[14px] transition-colors ${openId === q.id ? 'text-brand' : 'text-black group-hover:text-brand'}`}>
                    {q.question}
                  </span>
                  {openId === q.id ? (
                     <ChevronUp className="w-4 h-4 md:w-5 md:h-5 text-brand flex-shrink-0" />
                  ) : (
                     <ChevronDown className="w-4 h-4 md:w-5 md:h-5 text-black group-hover:text-brand flex-shrink-0 transition-colors" />
                  )}
                  {/* Animated Yellow Line */}
                  <span 
                    className={`absolute bottom-0 left-0 w-[30%] h-[2px] md:h-[3px] bg-brand transition-transform duration-500 ease-out border-none ${
                      openId === q.id ? 'origin-left scale-x-100' : 'origin-left -scale-x-0'
                    }`}
                  ></span>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                    openId === q.id ? 'max-h-[500px] opacity-100 pb-4 md:pb-6' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className='text-[#666] leading-relaxed text-[13px] md:text-[15px] pr-4'>
                    {q.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Help Section */}
          {data.bottomSection && (
              <div className='mt-16 md:mt-24 text-center flex flex-col items-center justify-center space-y-3 md:space-y-4'>
                 <h3 className='text-lg md:text-[22px] font-bold text-black'>{data.bottomSection.title}</h3>
                 <p className='text-[14px] md:text-[18px] font-bold text-black uppercase tracking-wider mb-2'>{data.bottomSection.subtitle}</p>
                 <button onClick={() => navigate(data.bottomSection.buttonLink)} className='inline-block rounded px-6 md:px-10 py-3 md:py-[15px] bg-brand text-black text-[11px] md:text-[13px] font-bold transition-all hover:bg-brand-hover hover:text-brand-text-hover uppercase mt-4 w-full sm:w-auto'>
                    {data.bottomSection.buttonText}
                 </button>
              </div>
          )}

        </div>
      </div>
    );
  }

  // Original Hero Layout
  return (
    <div className='background-img w-full py-12 md:py-20 px-4 sm:px-6 md:px-8'>
      <div className='p-0 sm:p-5 mx-auto flex flex-col lg:flex-row gap-10 lg:gap-24'>
        
        {/* Left Side */}
        <div className='w-full lg:w-[40%] text-black'>
          <h2 className='text-xl md:text-2xl font-extrabold mb-4 md:mb-8 uppercase leading-tight'>{data.title}</h2>
          <p className='text-gray-600 mb-6 md:mb-10 text-[13px] md:text-sm leading-relaxed'>
            {data.description}
          </p>
          <div className='flex flex-col gap-3 md:gap-4'>
            {data.buttons?.map((btn) => (
              <div onClick={() => navigate(btn.link)} key={btn.id} className='flex items-center gap-4 md:gap-5 group cursor-pointer'>
                <div className='w-[35px] h-[35px] md:w-[40px] md:h-[40px] rounded-full bg-brand-hover flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-md md:shadow-xl'>
                  {btn.icon}
                </div>
                <span className='font-bold text-[11px] md:text-xs uppercase text-[#1a1a1a]'>
                  {btn.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Accordion */}
        <div className='w-full lg:w-[60%] flex flex-col gap-3 md:gap-4 mt-6 lg:mt-0'>
          {data.questions?.map((q) => (
            <div key={q.id} className='bg-white rounded-sm shadow-[0_2px_10px_rgba(0,0,0,0.04)] md:shadow-[0_2px_20px_rgba(0,0,0,0.04)] overflow-hidden'>
              <button 
                onClick={() => toggleAccordion(q.id)}
                className='w-full flex items-center justify-between p-4 md:p-7 text-left focus:outline-none bg-white hover:bg-[#fcfcfc] transition-colors gap-4'
              >
                <span className={`font-bold text-[12px] md:text-[13px] uppercase tracking-wider leading-snug ${openId === q.id ? 'text-black' : 'text-[#333]'}`}>
                  {q.question}
                </span>
                {openId === q.id ? (
                   <ChevronUp className="w-[16px] h-[16px] md:w-[18px] md:h-[18px] text-gray-900 flex-shrink-0" />
                ) : (
                   <ChevronDown className="w-[16px] h-[16px] md:w-[18px] md:h-[18px] text-gray-600 flex-shrink-0" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                  openId === q.id ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className='px-4 md:px-7 pb-5 md:pb-7 text-gray-500 leading-relaxed text-[13px] md:text-[15px]'>
                  {q.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;