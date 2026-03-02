import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ContactFormSection = ({
  title = "GET IN TOUCH",
  subtitle = "Please enter the details of your requesst. A member of our support staff will respond as soon as possible.",
  contactInfo = {
    address: "123 Suspendis matti, Visaosang Building VST District, NY Accums, North American",
    email: "support@domain.com",
    phone: "(012)-345-67890",
    openingTime: "Our store has re-opened for shopping, exchanges every day 11am to 7pm"
  },
  socialLinks = [
    { icon: <FaFacebookF />, url: "#" },
    { icon: <FaInstagram />, url: "#" },
    { icon: <FaTwitter />, url: "#" },
    { icon: <FaTiktok />, url: "#" }
  ]
}) => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-10">
        <h2 className="text-2xl font-bold  uppercase">{title}</h2>
        <p className="text-black-500">{subtitle}</p>
      </div>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Left Side - Form */}
        <div className="w-full md:w-2/3">
          <form className="space-y-6">
            <div className="flex flex-col md:flex-row gap-6">
              <input 
                type="text" 
                placeholder="YOUR NAME" 
                className="w-full p-4 border text-xs font-medium border-gray-200 focus:outline-none focus:border-yellow-400 rounded"
              />
              <input 
                type="email" 
                placeholder="YOUR EMAIL" 
                className="w-full p-4 border text-xs font-medium border-gray-200 focus:outline-none focus:border-yellow-400 rounded"
              />
            </div>
            <input 
              type="tel" 
              placeholder="PHONE NUMBER" 
              className="w-full p-4 text-xs  font-medium border border-gray-200 focus:outline-none focus:border-yellow-400 rounded"
            />
            <textarea 
              placeholder="YOUR MESSAGE" 
              rows="6"
              className="w-full p-4 text-xs border font-mediumborder border-gray-200 focus:outline-none focus:border-yellow-400 resize-y rounded"
            ></textarea>
            <button 
              type="button" 
              className="bg-brand  rounded text-black font-semibold py-5 px-15 uppercase text-[10px] hover:bg-brand-hover hover:text-brand-text-hover transition-colors duration-300"
            >
              Submit Now
            </button>
          </form>
        </div>

        {/* Right Side - Contact Info */}
        <div className="w-full md:w-1/3 flex flex-col gap-8 mt-8 md:mt-0">
          <div>
            <p className="font-bold mb-1">Address: <span className="font-normal text-gray-800 text-xs">{contactInfo.address}</span></p>
          </div>
          <div>
            <p className="font-bold mb-1">Email: <span className="font-normal text-gray-800 text-xs">{contactInfo.email}</span></p>
          </div>
          <div>
            <p className="font-bold mb-1">Call Us: <span className="font-normal text-gray-800 text-xs">{contactInfo.phone}</span></p>
          </div>
          <div>
            <p className="font-bold mb-1">Opening time: <span className="font-normal text-gray-800 text-xs ">{contactInfo.openingTime}</span></p>
          </div>
          
          <div className="flex gap-2 mt-4">
            {socialLinks.map((link, index) => (
              <span 
                key={index} 
                onClick={() => navigate(link.url)} 
                className="bg-brand text-black rounded w-7 h-7 flex items-center justify-center hover:bg-brand-hover hover:text-brand-text-hover transition-colors duration-300 cursor-pointer"
              >
                {link.icon}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFormSection;
