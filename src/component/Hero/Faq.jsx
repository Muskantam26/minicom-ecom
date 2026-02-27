import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Faq = ({ data }) => {
  const [openId, setOpenId] = useState(3);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  if (!data) return null;

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
            {data.buttons.map((btn) => (
              <a href={btn.link} key={btn.id} className='flex items-center gap-5 group'>
                <div className='w-[40px] h-[40px] rounded-full bg-black flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-xl'>
                  {btn.icon}
                </div>
                <span className='font-bold text-xs uppercase t text-[#1a1a1a]'>
                  {btn.text}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Right Side - Accordion */}
        <div className='w-full lg:w-[60%] flex flex-col gap-4 mt-8 lg:mt-0'>
          {data.questions.map((q) => (
            <div key={q.id} className='bg-white rounded-sm shadow-[0_2px_20px_rgba(0,0,0,0.04)] overflow-hidden'>
              <button 
                onClick={() => toggleAccordion(q.id)}
                className='w-full flex items-center justify-between p-6 md:p-7 text-left focus:outline-none bg-white hover:bg-[#fcfcfc] transition-colors'
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