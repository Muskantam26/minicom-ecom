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
      <div className='w-full bg-white py-20 px-4 sm:px-6 mx-auto'>
        <div className=' mx-auto mb-10'>
          
          {/* Top Paragraphs */}
          {data.topParagraphs && data.topParagraphs.length > 0 && (
             <div className='mb-8 space-y-6'>
                {data.topParagraphs.map((para, index) => (
                   <p key={index} className={`text-[15px] leading-relaxed ${index === 0 ? 'text-black font-semibold tracking-wide' : 'text-[#666]'}`}>
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
                  className='w-full relative flex items-center justify-between py-6 text-left focus:outline-none bg-white transition-colors group'
                >
                  <span className={`font-bold text-[14px] transition-colors ${openId === q.id ? 'text-brand' : 'text-black group-hover:text-brand'}`}>
                    {q.question}
                  </span>
                  {openId === q.id ? (
                     <ChevronUp className="w-4 h-4 text-brand flex-shrink-0" />
                  ) : (
                     <ChevronDown className="w-4 h-4 text-black group-hover:text-brand flex-shrink-0 transition-colors" />
                  )}
                  {/* Animated Yellow Line */}
                  <span 
                    className={`absolute bottom-0 left-0 w-[30%] h-[3px] bg-brand transition-transform duration-500 ease-out border-none ${
                      openId === q.id ? 'origin-left scale-x-100' : 'origin-left -scale-x-0'
                    }`}
                  ></span>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                    openId === q.id ? 'max-h-[500px] opacity-100 pb-6' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className='text-[#666] leading-relaxed text-[15px] pr-4'>
                    {q.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Help Section */}
          {data.bottomSection && (
              <div className='mt-24 text-center flex flex-col items-center justify-center space-y-4'>
                 <h3 className='text-[22px] font-bold text-black'>{data.bottomSection.title}</h3>
                 <p className='text-[18px] font-bold text-black uppercase tracking-wider mb-2'>{data.bottomSection.subtitle}</p>
                 <button onClick={() => navigate(data.bottomSection.buttonLink)} className='inline-block rounded px-10 py-[15px] bg-brand text-black text-[13px] font-bold transition-all hover:bg-brand-hover hover:text-brand-text-hover uppercase mt-4'>
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
    <div className='background-img w-full py-20 px-4 '>
      <div className='p-5 mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24'>
        
        {/* Left Side */}
        <div className='w-full lg:w-[40%] text-black'>
          <h2 className='text-2xl font-extrabold mb-8 uppercase leading-tight'>{data.title}</h2>
          <p className='text-gray-600 mb-10  text-sm'>
            {data.description}
          </p>
          <div className='flex flex-col gap-2'>
            {data.buttons?.map((btn) => (
              <div onClick={() => navigate(btn.link)} key={btn.id} className='flex items-center gap-5 group cursor-pointer'>
                <div className='w-[40px] h-[40px] rounded-full bg-brand-hover flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-xl'>
                  {btn.icon}
                </div>
                <span className='font-bold text-xs uppercase t text-[#1a1a1a]'>
                  {btn.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Accordion */}
        <div className='w-full lg:w-[60%] flex flex-col gap-4 mt-8 lg:mt-0'>
          {data.questions?.map((q) => (
            <div key={q.id} className='bg-white rounded-sm shadow-[0_2px_20px_rgba(0,0,0,0.04)] overflow-hidden'>
              <button 
                onClick={() => toggleAccordion(q.id)}
                className='w-full flex items-center  justify-between p-6 md:p-7 text-left focus:outline-none bg-white hover:bg-[#fcfcfc] transition-colors'
              >
                <span className={`font-bold text-[13px] uppercase tracking-wider ${openId === q.id ? 'text-black' : 'text-[#333]'}`}>
                  {q.question}
                </span>
                {openId === q.id ? (
                   <ChevronUp className="w-[18px] h-[18px] text-gray-900 flex-shrink-0" />
                ) : (
                   <ChevronDown className="w-[18px] h-[18px] text-gray-600 flex-shrink-0" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                  openId === q.id ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className='px-6 md:px-7 pb-7 text-gray-500 leading-relaxed text-[15px]'>
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