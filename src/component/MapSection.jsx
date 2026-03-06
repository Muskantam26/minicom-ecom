import React from 'react';
import { FaFacebookF, FaInstagram, FaXTwitter, FaTiktok } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const MapSection = ({ mapSrc, storeInfo }) => {
  const navigate = useNavigate();
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12 bg-white">
      <div className="w-full flex flex-col md:block relative max-w-[1400px] mx-auto">
        <div className="w-full overflow-hidden rounded-2xl shadow-sm border-2 border-gray-100 h-[300px] md:h-[500px] lg:h-[600px]">
          <iframe
            src={mapSrc}
            width="100%"
            height="100%"
            className="w-full h-full object-cover"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map Location"
          ></iframe>
        </div>
        
        {storeInfo && (
          <div className="mt-6 md:mt-0 md:absolute md:top-1/2 md:-translate-y-1/2 md:left-8 lg:left-12 bg-brand-hover text-white p-6 md:p-8 rounded-xl md:max-w-sm z-10 shadow-2xl space-y-5">
            {storeInfo.address && (
              <p className="text-sm md:text-base leading-relaxed">
                <span className="text-yellow-500 font-semibold mr-2">Address:</span>
                {storeInfo.address}
              </p>
            )}
            {storeInfo.email && (
              <p className="text-sm md:text-base">
                <span className="text-yellow-500 font-semibold mr-2">Email:</span>
                {storeInfo.email}
              </p>
            )}
            {storeInfo.phone && (
              <p className="text-sm md:text-base">
                <span className="text-yellow-500 font-semibold mr-2">Call Us:</span>
                {storeInfo.phone}
              </p>
            )}
            {storeInfo.openingTime && (
              <p className="text-sm md:text-base leading-relaxed">
                <span className="text-yellow-500 font-semibold mr-2">Opening time:</span>
                {storeInfo.openingTime}
              </p>
            )}
            
            {storeInfo.socials && (
              <div className="flex gap-3 pt-2">
                {storeInfo.socials.facebook && (
                  <span onClick={() => navigate(storeInfo.socials.facebook)} className="bg-white text-black p-2 rounded hover:bg-gray-200 transition-colors cursor-pointer inline-flex">
                    <FaFacebookF size={18} />
                  </span>
                )}
                {storeInfo.socials.instagram && (
                  <span onClick={() => navigate(storeInfo.socials.instagram)} className="bg-white text-black p-2 rounded hover:bg-gray-200 transition-colors cursor-pointer inline-flex">
                    <FaInstagram size={18} />
                  </span>
                )}
                {storeInfo.socials.twitter && (
                  <span onClick={() => navigate(storeInfo.socials.twitter)} className="bg-white text-black p-2 rounded hover:bg-gray-200 transition-colors cursor-pointer inline-flex">
                    <FaXTwitter size={18} />
                  </span>
                )}
                {storeInfo.socials.tiktok && (
                  <span onClick={() => navigate(storeInfo.socials.tiktok)} className="bg-white text-black p-2 rounded hover:bg-gray-200 transition-colors cursor-pointer inline-flex">
                    <FaTiktok size={18} />
                  </span>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MapSection;
