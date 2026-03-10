import React, { useState } from 'react'
import HeaderPage from '../component/headerPage'
import SidebarFilter from '../collections/SidebarFilter'
import HandpickedElegance from '../component/Hero/HandpickedElegance'
import CoreFeatures from '../component/Hero/CoreFeatures'
import { Leaf, Lightbulb, PencilRuler, Recycle, X, SlidersHorizontal, ChevronDown } from 'lucide-react'
import Tags from '../collections/Tags'
import CollectionProduct from '../collections/CollectionProduct'
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { IoGrid } from "react-icons/io5";
import { CiBoxList } from "react-icons/ci";
import SortDropdown from '../collections/SortDropdown';
import { Button1 } from '../component/Btn/Button1'



const Collection = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const handpickedEleganceData = [
  {
    id: 1,
    name: "Modern Single Sofa Chair For Stylish Living Room",
    price: "$200.00",
    image: "https://nov-minicom.myshopify.com/cdn/shop/files/1-min_bdb6b918-6f94-45a7-b53e-4d9977e4c158.jpg?v=1749111975&width=1120",
  },
  {
    id: 2,
    name: "Decorative Cactus Plant Pot For Indoor Display",
    price: "$37.00",
    image: "//nov-minicom.myshopify.com/cdn/shop/files/1-min_44cdab73-bcb9-483d-ba6c-cbfc32321ed9.jpg?v=1749112427&width=260",
  },
  {
    id: 3,
    name: "Solid Wood TV Stand With Storage Drawers Design",
    price: "$135.00",
    image: "//nov-minicom.myshopify.com/cdn/shop/files/1-min_2ee03dbe-b3f3-4ffe-a2f8-299ecbdfaa06.jpg?v=1749111269&width=260",
  },
  {
    id: 4,
    name: "Modern Wooden Lounge Chair With Wide Fabric Arms",
    price: "$155.00",
    image: "//nov-minicom.myshopify.com/cdn/shop/files/1-min_202fa2e4-302c-481c-aab5-74b98f061838.jpg?v=1749110906&width=260",
  },
  {
    id: 5,
    name: "Modern Low Profile Swivel Sofa With Soft Seat",
    price: "$125.00",
    image: "//nov-minicom.myshopify.com/cdn/shop/files/1-min_be47ec7a-ae18-44a0-ad6b-efeabb425930.jpg?v=1749110719&width=260",
  },
  {
    id: 6,
    name: "Minimalist White Ceramic Vases Set",
    price: "$45.00",
    image: "//nov-minicom.myshopify.com/cdn/shop/files/1-min_0c6275f8-a24e-4702-90d0-bd01e49e1b67.jpg?v=1749111925&width=260",
  },
  {
    id: 7,
    name: "Classic Wooden Dining Chair With Curved Back",
    price: "$89.00",
    image: "//nov-minicom.myshopify.com/cdn/shop/files/1-min_02d0e979-f8f4-49b4-bbc3-c4852675c021.jpg?v=1749111160&width=260",
  },
  {
    id: 8,
    name: "Round Coffee Table With Golden Metal Legs",
    price: "$210.00",
    image: "//nov-minicom.myshopify.com/cdn/shop/files/1-min_dfb1df34-1c68-4ee5-8bfb-ae5b3f5e430b.jpg?v=1749111367&width=260",
  },
  {
    id: 9,
    name: "Minimalist White Ceramic Vases Set",
    price: "$45.00",
    image: "//nov-minicom.myshopify.com/cdn/shop/files/1-min_dfb1df34-1c68-4ee5-8bfb-ae5b3f5e430b.jpg?v=1749111367&width=260",
  },
  {
    id: 10,
    name: "Classic Wooden Dining Chair With Curved Back",
    price: "$89.00",
    image: "//nov-minicom.myshopify.com/cdn/shop/files/1-min_dfb1df34-1c68-4ee5-8bfb-ae5b3f5e430b.jpg?v=1749111367&width=260",
  },
  {
    id: 11,
    name: "Round Coffee Table With Golden Metal Legs",
    price: "$210.00",
    image: "//nov-minicom.myshopify.com/cdn/shop/files/1-min_dfb1df34-1c68-4ee5-8bfb-ae5b3f5e430b.jpg?v=1749111367&width=260",
  },
];

const coreFeaturesData = {
 
  features: [
    {
      icon: <Leaf className="w-6 h-6 text-black" strokeWidth={1.5} />,
      title: "Eco-Friendly Materials",
      description: "We craft our furniture using responsibly sourced, environmentally friendly materials.",
    },
    {
      icon: <PencilRuler className="w-6 h-6 text-black" strokeWidth={1.5} />,
      title: "Effortless Assembly",
      description: "Thoughtfully designed for quick setup, requiring minimal effort and no extra tools.",
    },
    {
      icon: <Recycle className="w-6 h-6 text-black" strokeWidth={1.5} />,
      title: "Giving Back to Nature",
      description: "Every purchase contributes to reforestation efforts, helping restore green spaces.",
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-black" strokeWidth={1.5} />,
      title: "Sustainable Production",
      description: "Dedicated to reducing waste and promoting eco-conscious manufacturing practices.",
    },
  ],
};


  return (
    <div>
    
        <HeaderPage/>

        <div className="p-4 w-full mx-auto">
        <div className='relative z-20 mx-auto'>
          <CollectionProduct/>
        </div>

    <div className='flex flex-col lg:flex-row mt-5 relative'>
         
         {/* Mobile Filter Button */}
         <div className='lg:hidden  flex justify-start p-4'>
           <button onClick={() => setIsFilterOpen(true)} className='flex items-center gap-2 font-bold text-lg cursor-pointer hover:text-gray-600 transition-colors'>
             <SlidersHorizontal className='w-6 h-6' /> FILTER <ChevronDown className='w-5 h-5' />
           </button>
         </div>

         {/* Mobile Sidebar Overlay */}
         <div 
           className={`fixed inset-0 z-[60] bg-black/50 transition-opacity lg:hidden ${isFilterOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
           onClick={() => setIsFilterOpen(false)} 
         />

         {/* Mobile Sidebar Drawer */}
         <div className={`fixed inset-y-0 left-0 z-[70] w-80 max-w-[85vw] bg-white overflow-y-auto transform transition-transform duration-300 ease-in-out lg:hidden ${isFilterOpen ? 'translate-x-0' : '-translate-x-full'} shadow-xl`}>
           <div className="flex justify-between items-center  sticky top-0 bg-white z-10">
            
            
           </div>
           <div className="p-4">
             <SidebarFilter/>
           </div>
         </div>

         {/* Desktop Sidebar */}
         <div className='hidden lg:block w-72 shrink-0'>
            <SidebarFilter/>
         </div>
         
         <div className='flex-1 overflow-hidden lg:pl-5'>
          <div className='w-full sticky  flex justify-between items-center pl-0 lg:pl-4 mb-6 lg:mb-0'>
            <SortDropdown />
            <div className='flex gap-3 items-center text-gray-400 pr-5 lg:pr-5'>
               <button className="bg-black text-white p-2.5 rounded hover:bg-black/90 transition-colors">
                 <IoGrid size={20} className="cursor-pointer" />
               </button>
               {/* <button className="bg-gray-100 text-gray-500 p-2.5 rounded hover:bg-gray-200 transition-colors">
                 <CiBoxList size={22} className="cursor-pointer" />
               </button> */}
            </div>
          </div>
        <HandpickedElegance data={handpickedEleganceData} itemsPerRow={3} isSlider={false}
        title=''
        subtitle=''
        />
        
         <div className="flex justify-center">
          <button className='bg-yellow-400 py-3 px-8 lg:p-5 lg:px-15 xl:mr-80 rounded text-xs font-medium flex justify-left items-center hover:bg-[#d8a849] hover:text-white transition-colors duration-300'>Load More Items</button>
        </div>
        
        </div>
       </div>

<div className='mt-5'><Tags/></div>
     

       <div className=''>
    
        <CoreFeatures  data={coreFeaturesData}/>
 
       </div>
         <div className=''>
          <h1 className='text-2xl item-center justify-center font-bold text-center'>RECENTLY VIEWED PRODUCTS</h1>
        <HandpickedElegance data={handpickedEleganceData} 
        title=''
        subtitle=''
        />
       </div>
       </div>
    </div>
  )
}

export default Collection