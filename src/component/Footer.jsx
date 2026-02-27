import React from 'react';
import { ArrowUp } from 'lucide-react';
import { MainContent } from '../constant/MainContent';

const Footer = ({ data }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-black text-white py-16 px-4 md:px-8 font-sans">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Logo and Intro Section */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="flex items-center gap-3">
             <img src={MainContent.appLogo} alt="Logo here" className="w-40" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              {data.aboutText}
            </p>
            <div className="flex gap-4 mt-2">
              {data.socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.url} 
                  className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition-colors"
                  aria-label={social.label}
                >
                  <span dangerouslySetInnerHTML={{ __html: social.iconSvg }} className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Side Sections */}
          <div className="lg:col-span-8">
            {/* Newsletter Row */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
              <div className="md:col-span-4">
                <h3 className="text-sm font-bold tracking-wider mb-2 uppercase">{data.newsletter.title}</h3>
                <p className="text-gray-400 text-xs uppercase tracking-wide">{data.newsletter.subtitle}</p>
              </div>
              <div className="md:col-span-8">
                <form className="flex w-full" onSubmit={(e) => e.preventDefault()}>
                  <input 
                    type="email" 
                    placeholder={data.newsletter.placeholder} 
                    className="flex-1 bg-transparent border border-gray-800 text-white px-4 py-3 text-sm focus:outline-none focus:border-gray-600 transition-colors placeholder-gray-500"
                    required
                  />
                  <button 
                    type="submit" 
                    className="bg-white text-black px-8 py-3 text-sm font-bold tracking-wider hover:bg-gray-200 transition-colors whitespace-nowrap"
                  >
                    {data.newsletter.buttonText}
                  </button>
                </form>
              </div>
            </div>

            {/* Links Columns */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {/* Customer Care */}
              <div>
                <h3 className="text-sm font-bold tracking-wider mb-6 uppercase">{data.links.customerCare.title}</h3>
                <ul className="flex flex-col gap-4">
                  {data.links.customerCare.items.map((link, index) => (
                    <li key={index}>
                      <a href={link.url} className="text-gray-400 hover:text-white text-xs uppercase tracking-wide transition-colors">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Help & Support */}
              <div>
                <h3 className="text-sm font-bold tracking-wider mb-6 uppercase">{data.links.helpSupport.title}</h3>
                <ul className="flex flex-col gap-4">
                  {data.links.helpSupport.items.map((link, index) => (
                    <li key={index}>
                      <a href={link.url} className="text-gray-400 hover:text-white text-xs uppercase tracking-wide transition-colors">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company Info */}
              <div>
                <h3 className="text-sm font-bold tracking-wider mb-6 uppercase">{data.links.companyInfo.title}</h3>
                <ul className="flex flex-col gap-4">
                  {data.links.companyInfo.items.map((link, index) => (
                    <li key={index}>
                      <a href={link.url} className="text-gray-400 hover:text-white text-xs uppercase tracking-wide transition-colors">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
        </div>

        {/* Bottom Bar */}
        {/* <div className="mt-20 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6 relative">
          <div className="flex flex-col gap-1 text-xs text-gray-400 uppercase tracking-widest text-center md:text-left">
            <span>{data.copyright}</span>
            <span>{data.allRightsReserved}</span>
          </div>

          <div className="flex items-center gap-3">
            {data.paymentMethods.map((method, index) => (
              <img 
                key={index}
                src={method.image} 
                alt={method.name} 
                className="h-8 object-contain rounded bg-white p-1" 
              />
            ))}
          </div>

       
          */}
        {/* </div> */}
      </div>
    </footer>
  );
};

export default Footer;
