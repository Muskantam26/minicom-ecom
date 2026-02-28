import React from 'react'
import HeaderPage from '../component/headerPage'
import SidebarFilter from '../collections/SidebarFilter'
import HandpickedElegance from '../component/Hero/HandpickedElegance'
import CoreFeatures from '../component/Hero/CoreFeatures'
import { Leaf, Lightbulb, PencilRuler, Recycle } from 'lucide-react'
import Tags from '../collections/Tags'
import CollectionProduct from '../collections/CollectionProduct'



const Collection = () => {

    const handpickedEleganceData = [
  {
    id: 1,
    name: "Modern Single Sofa Chair For Stylish Living Room",
    price: "$200.00",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    name: "Decorative Cactus Plant Pot For Indoor Display",
    price: "$37.00",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    name: "Solid Wood TV Stand With Storage Drawers Design",
    price: "$135.00",
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    name: "Modern Wooden Lounge Chair With Wide Fabric Arms",
    price: "$155.00",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80",
  },
  {
    id: 5,
    name: "Modern Low Profile Swivel Sofa With Soft Seat",
    price: "$125.00",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80",
  },
  {
    id: 6,
    name: "Minimalist White Ceramic Vases Set",
    price: "$45.00",
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80",
  },
  {
    id: 7,
    name: "Classic Wooden Dining Chair With Curved Back",
    price: "$89.00",
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80",
  },
  {
    id: 8,
    name: "Round Coffee Table With Golden Metal Legs",
    price: "$210.00",
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80",
  },
  {
    id: 9,
    name: "Minimalist White Ceramic Vases Set",
    price: "$45.00",
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80",
  },
  {
    id: 10,
    name: "Classic Wooden Dining Chair With Curved Back",
    price: "$89.00",
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80",
  },
  {
    id: 11,
    name: "Round Coffee Table With Golden Metal Legs",
    price: "$210.00",
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80",
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

        <div className='relative z-20 -mt-28 max-w-[1400px] mx-auto px-10'>
          <CollectionProduct/>
        </div>

    <div className='flex p-5 mt-5'>
         <div className=''>
            <SidebarFilter/>
         </div>
         <div className='flex-1 overflow-hidden'>
        <HandpickedElegance data={handpickedEleganceData} itemsPerRow={3} isSlider={false} />

        <button className='bg-yellow-400 p-5 px-15 ml-80 rounded text-xs  font-medium flex justify-center items-center hover:bg-black hover:text-white'>Load More Items</button>
        </div>
       </div>

<div className='mt-10'><Tags/></div>
     

       <div className='mt-10'>
    
        <CoreFeatures  data={coreFeaturesData}/>
 
       </div>
         <div className='mt-10'>
        <HandpickedElegance data={handpickedEleganceData} />
       </div>
    </div>
  )
}

export default Collection