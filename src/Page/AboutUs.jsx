import React from "react";
import HeaderPage from "../component/headerPage";
import InfoSection from "../component/InfoSection";
import { FaPlay } from "react-icons/fa";
import { LayoutTemplate, PackagePlus, Store } from "lucide-react";
import TeamSection from "../component/TeamSection";
import StoreLocations from "../component/StoreLocations";
const teamMembersData = [
  {
    name: "Customer",
    role: "Verified Purchase",
    image: "https://nov-minicom.myshopify.com/cdn/shop/files/about-tes-1.jpg?v=1751104139&width=580"
  },
  {
    name: "Customer",
    role: "Verified Purchase",
    image: "https://nov-minicom.myshopify.com/cdn/shop/files/about-tes-2.jpg?v=1751104139&width=580"
  },
  {
    name: "Customer",
    role: "Verified Purchase",
    image: "https://nov-minicom.myshopify.com/cdn/shop/files/about-tes-3.jpg?v=1751104139&width=580"
  },
  {
    name: "Customer",
    role: "Verified Purchase",
    image: "https://nov-minicom.myshopify.com/cdn/shop/files/about-tes-4.jpg?v=1751104139&width=580"
  }
];

const workSteps = [
  {
    icon: <LayoutTemplate size={48} strokeWidth={1.5} />,
    title: "Choose A Theme",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consequat ut ex vel finibus. Nunc eget molestie purus."
  },
  {
    icon: <PackagePlus size={48} strokeWidth={1.5} />,
    title: "Add Products",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consequat ut ex vel finibus. Nunc eget molestie purus."
  },
  {
    icon: <Store size={48} strokeWidth={1.5} />,
    title: "Start Selling",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consequat ut ex vel finibus. Nunc eget molestie purus."
  }
];

const storeLocationsData = [
  {
    title: "Los Angeles",
    address: "3123 Canis Heights Drive, Marina, CA 90071",
    image: "https://nov-minicom.myshopify.com/cdn/shop/files/about-local-1.jpg?v=1751106497&width=768"
  },
  {
    title: "New York",
    address: "1904 James Street, Rochester, NY 14604",
    image: "https://nov-minicom.myshopify.com/cdn/shop/files/about-local-2.jpg?v=1751106497&width=768" 
  },
  {
    title: "California",
    address: "3605 Martha Street, Phoenix, AZ 86040",
    image: "https://nov-minicom.myshopify.com/cdn/shop/files/about-local-3.jpg?v=1751106497&width=768"
  }
];

const AboutUs = () => {
  return (
    <div className="bg-white text-gray-800">
      <HeaderPage />

      <div className="p-5 flex gap-5 mt-10 rounded">
        <div className="w-[70%] overflow-hidden rounded-sm shadow">
          <img 
            src="https://nov-minicom.myshopify.com/cdn/shop/files/about-us-1.jpg?v=1749029624&width=1296" 
            alt="img here" 
            className="w-full h-full object-cover transition-transform duration-1500 hover:scale-110"
          />
        </div>
        <div className="w-[30%] overflow-hidden rounded-sm shadow">
          <img 
            src="https://nov-minicom.myshopify.com/cdn/shop/files/about-us-2.jpg?v=1751102053&width=768" 
            alt="img here"  
            className="w-full h-full object-cover transition-transform duration-1500 hover:scale-110"
          />
        </div>
      </div>


    



<div className="flex-col text-center mt-10">
  <p className="text-sm text-gray-700 font-semibold">Real Customer Experience</p>
  <h1 className="text-3xl font-bold text-black">Videos From Our Clients</h1>
</div>

<div className="flex gap-5 mt-10 p-5">
  <div className="relative group w-full">
    <img src="https://nov-minicom.myshopify.com/cdn/shop/files/about-us-video-1.jpg?v=1749029624&width=1920" alt="img here" className="rounded shadow w-full h-full object-cover"/>
    <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
      <div className="icon_play pointer-events-auto">
        <FaPlay className="ml-1" />
      </div>
    </div>
  </div>
  <div className="relative group w-full">
    <img src="https://nov-minicom.myshopify.com/cdn/shop/files/about-us-video-5.jpg?v=1749029625&width=1920" alt="img here"  className="rounded shadow w-full h-full object-cover"/>
    <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
      <div className="icon_play pointer-events-auto">
        <FaPlay className="ml-1" />
      </div>
    </div>
  </div>
  <div className="relative group w-full">
    <img src="https://nov-minicom.myshopify.com/cdn/shop/files/about-us-video-2.jpg?v=1749029625&width=1920" alt="img here " className="rounded shadow w-full h-full object-cover"/>
    <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
      <div className="icon_play pointer-events-auto">
        <FaPlay className="ml-1" />
      </div>
    </div>
  </div>
</div>


      <div className="flex-col text-center mt-10 w-full">
        <p className="text-sm font-medium text-gray-500 tracking-widest mb-4">How We Work</p>
        <h2 className="text-2xl md:text-3xl font-bold text-black mb-16">
          We Give You The Power To Create Spaces That<br className="hidden md:block" />
          Are Just Right For You
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-10 ">
          {workSteps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center flex-1">
              <div className="mb-6 text-black text-bold">
                {step.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-black">{step.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed max-w-[400px] mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>


        <InfoSection 
        title="Why choose us ?" 
        description="Maecenas congue metus id turpis iaculis mattis. Sed pellentesque id arcu id scelerisque. Ut ullamcorper rutrum justo, at blandit eros maximus ut. Integer non tincidunt justo, rhoncus Aenean venenatis sed purus ac sollicitudin. Nulla mauris risus, commodo et luctus rutrum, lobortis sed mauris. Integer congue, sem elementum varius tristique."
        image="https://nov-minicom.myshopify.com/cdn/shop/files/about-us-why-choose-us.jpg?v=1749029625&width=900"
        reverse={false}
      />
      
      <InfoSection 
        title="Trusted Online Shopping" 
        description="Maecenas congue metus id turpis iaculis mattis. Sed pellentesque id arcu id scelerisque. Ut ullamcorper rutrum justo, at blandit eros maximus ut. Integer non tincidunt justo, rhoncus Aenean venenatis sed purus ac sollicitudin. Nulla mauris risus, commodo et luctus rutrum, lobortis sed mauris. Integer congue, sem elementum varius tristique."
        image="https://nov-minicom.myshopify.com/cdn/shop/files/about-us-trusted-online.jpg?v=1749029624&width=900"
        reverse={true}
      />
      
      <TeamSection 
        subtitle="Our Teams" 
        title="The Passionate Team Bringing Our Designs to Life" 
        teamMembers={teamMembersData} 
      />

      <StoreLocations 
        subtitle="Our Locations"
        title="Stores System"
        locations={storeLocationsData}
      />

    </div>
  );
};

export default AboutUs;