import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Star, Heart, Share2, HelpCircle, MessageCircle, Leaf, PencilRuler, Recycle, Lightbulb, Package, Truck, Check } from 'lucide-react';
import CoreFeatures from '../component/Hero/CoreFeatures';
import ProductReviews from '../component/ProductReviews';
import HandpickedElegance from '../component/Hero/HandpickedElegance';

// Mock product details specifically designed to match the provided screenshot
const productData = {
  id: "1",
  name: "Decorative Cactus Plant Pot For Indoor Display",
  price: "$37.00",
  description: "Donec dapibus tellus sem, quis aliquam libero pharetra non. Nam vitae fermentum leo. Pellentesque bibendum dui eu mi tempor sodales. Integer gravida odio in sem laoreet tempus. Nunc vehicula nibh mauris, id bibendum metus facilisis...",
  available: true,
  tags: ["Kitchen"],
  sku: "a 123",
  categories: ["Dining Room", "Kitchen", "Lighting", "Living Room", "Office", "Outdoor", "Plant Pots"],
  colors: [
    { name: "WHITE", class: "bg-white", border: "border-yellow-400" },
    { name: "ORANGE", class: "bg-orange-400", border: "border-transparent" },
    { name: "TEAL", class: "bg-teal-600", border: "border-transparent" }
  ],
  sizes: ["SMALL", "MEDIUM", "LARGE"],
  images: [
    "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&q=80",
  ]
};


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
];


const Products = () => {
  const { id } = useParams();
  
  // In a real app, we would fetch the product using the ID. 
  // For now we just use the mocked data.
  const product = productData;

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('Description');

  const handlePrevImage = () => {
    setSelectedImage((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setSelectedImage((prev) => (prev === product.images.length - 1 ? 0 : prev + 1));
  };

  const handleDecreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleIncreaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <div className="max-w-[1400px] mx-auto">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-900 mb-8 font-medium mt-5">
        <Link to="/" className="hover:underline">Home</Link>
        <span className="mx-2">•</span>
        <span className="text-gray-600">{product.name}</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 text-gray-900">
        
        {/* Left Column: Images */}
        <div className="w-full lg:w-[55%] flex flex-col md:flex-row gap-4 h-[600px]">
          {/* Thumbnails */}
          <div className="flex flex-row md:flex-col gap-4 overflow-x-auto md:w-20 lg:w-24 shrink-0 scrollbar-hide">
            {product.images.map((img, idx) => (
              <button 
                key={idx} 
                onClick={() => setSelectedImage(idx)}
                className={`w-20 md:w-full aspect-[4/5] bg-gray-50 flex items-center justify-center p-2 rounded border ${selectedImage === idx ? 'border-yellow-400' : 'border-transparent hover:border-gray-200'} transition-colors`}
              >
                <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-contain mix-blend-multiply" />
              </button>
            ))}
          </div>
          
          {/* Main Image */}
          <div className="flex-1 bg-gray-50 relative flex items-center justify-center p-12 rounded">
            <button 
              onClick={handlePrevImage}
              className="absolute left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow hover:bg-gray-100 transition disabled:opacity-50"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <img 
              src={product.images[selectedImage]} 
              alt={product.name} 
              className="w-full h-full object-contain mix-blend-multiply transition-opacity duration-300" 
            />
            <button 
              onClick={handleNextImage}
              className="absolute right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow hover:bg-gray-100 transition disabled:opacity-50"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Right Column: Details */}
        <div className="w-full lg:w-[45%] flex flex-col">
          <h1 className="text-xl md:text-[20px] font-bold text-gray-900 mb-3">{product.name}</h1>
          
          {/* Reviews */}
          <div className="flex items-center gap-3 mb-5">
            <div className="flex text-gray-300">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
            </div>
            <span className="text-sm font-medium text-gray-500">(0)</span>
            <button className="text-[11px] font-bold tracking-wider hover:text-yellow-500 transition-colors">VIEW ALL REVIEWS</button>
          </div>

          <div className="text-[28px] font-bold text-gray-900 mb-6">{product.price}</div>

          <div className="text-[13px] text-gray-500 leading-[1.8] mb-8">
            {product.description}
          </div>

          <div className="flex items-center gap-4 mb-3 text-[13px]">
            <span className="font-bold w-[90px]">AVAILABLE:</span>
            {product.available ? (
              <span className="text-green-500 flex items-center gap-1 font-medium">IN STOCK <Check className="w-3.5 h-3.5" /></span>
            ) : (
              <span className="text-red-500 font-medium">OUT OF STOCK</span>
            )}
          </div>
          <div className="flex items-center gap-4 mb-3 text-[13px]">
            <span className="font-bold w-[90px]">TAGS:</span>
            <span className="text-gray-600">{product.tags.join(', ')}</span>
          </div>
          <div className="flex items-center gap-4 mb-3 text-[13px]">
            <span className="font-bold w-[90px]">SKU:</span>
            <span className="text-gray-600">{product.sku}</span>
          </div>
          <div className="flex items-start gap-4 mb-8 text-[13px]">
            <span className="font-bold w-[90px] shrink-0 mt-0.5">CATEGORY:</span>
            <span className="text-gray-600 leading-relaxed">{product.categories.join(', ')}</span>
          </div>

          {/* Color Selection */}
          <div className="mb-6">
            <div className="text-[13px] font-bold mb-3 uppercase">COLOR: {selectedColor.name}</div>
            <div className="flex gap-3">
              {product.colors.map(color => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color)}
                  className={`w-9 h-9 rounded-full relative ${color.class} ${selectedColor.name === color.name ? 'ring-1 ring-offset-2 ring-gray-900' : ''} border ${color.border}`}
                  aria-label={`Select ${color.name} color`}
                />
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="mb-8">
            <div className="text-[13px] font-bold mb-3 uppercase">SIZE: {selectedSize}</div>
            <div className="flex gap-3">
              {product.sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-6 py-2 border text-[11px] font-bold tracking-wider rounded-sm ${selectedSize === size ? 'bg-black text-white border-black' : 'bg-white text-gray-900 border-gray-200 hover:border-gray-400'} transition-all`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity & Actions */}
          <div className="flex gap-4 mb-4 h-12">
            <div className="flex border border-gray-200 items-center w-[120px] rounded-sm bg-white">
              <button onClick={handleDecreaseQuantity} className="w-10 h-full flex items-center justify-center text-gray-500 hover:text-black transition-colors">-</button>
              <span className="flex-1 text-center font-medium text-sm">{quantity}</span>
              <button onClick={handleIncreaseQuantity} className="w-10 h-full flex items-center justify-center text-gray-500 hover:text-black transition-colors">+</button>
            </div>
            
            <button className="flex-1 bg-gray-100 hover:bg-yellow-400 text-black font-bold text-xs tracking-wider rounded-sm transition-colors uppercase">
              Add To Bag
            </button>
            
            <button className="w-12 h-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-sm transition-colors text-gray-600">
              <Heart className="w-5 h-5 fill-current" />
            </button>
          </div>

          <button className="w-full h-12 border border-gray-200 hover:border-black font-bold text-xs tracking-wider rounded-sm transition-colors mb-8 uppercase bg-white">
            Buy It Now
          </button>

          {/* Additional Links */}
          <div className="flex gap-8 border-b border-gray-100 pb-8 mb-8">
            <button className="flex items-center gap-2 text-[13px] font-bold hover:text-yellow-500 transition-colors">
              <Share2 className="w-4 h-4" /> SHARE
            </button>
            <button className="flex items-center gap-2 text-[13px] font-bold hover:text-yellow-500 transition-colors">
              <HelpCircle className="w-4 h-4" /> ASK A QUESTION
            </button>
            <button className="flex items-center gap-2 text-[13px] font-bold hover:text-yellow-500 transition-colors">
              <MessageCircle className="w-4 h-4" /> FAQ
            </button>
          </div>

          {/* Benefits Box */}
          <div className="border border-gray-200 rounded-xl p-8 mb-8 text-center">
            <h3 className="text-[13px] font-bold mb-6">THE BENEFITS OF CHOOSING US</h3>
            <div className="grid grid-cols-4 gap-4">
              <div className="flex flex-col items-center gap-3">
                <Leaf className="w-7 h-7" strokeWidth={1.5} />
                <span className="text-[10px] font-bold whitespace-nowrap">ECO-FRIENDLY<br/>MATERIALS</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <PencilRuler className="w-7 h-7" strokeWidth={1.5} />
                <span className="text-[10px] font-bold whitespace-nowrap">EFFORTLESS<br/>ASSEMBLY</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <Truck className="w-7 h-7" strokeWidth={1.5} />
                <span className="text-[10px] font-bold whitespace-nowrap">FREE SHIPPING<br/>AND RETURNS</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <Recycle className="w-7 h-7" strokeWidth={1.5} />
                <span className="text-[10px] font-bold whitespace-nowrap">GIVING BACK<br/>TO NATURE</span>
              </div>
            </div>
          </div>

          {/* Shipping Info */}
          <div className="flex flex-col gap-4 text-[13px] text-gray-500">
            <div className="flex items-center gap-3">
              <Package className="w-5 h-5 text-gray-400" />
              <span>Orders ship within 5 to 10 business days.</span>
            </div>
            <div className="flex items-center gap-3">
              <Truck className="w-5 h-5 text-gray-400" />
              <span>Hoorey ! This item ships free to the US</span>
            </div>
          </div>

        </div>
      </div>

      {/* Product Tabs Section */}
      <div className="mt-20 w-full mb-16">
        {/* Tab Headers */}
        <div className="flex flex-wrap gap-10 md:gap-16 mb-8">
          {['Description', 'Delivery policy', 'Shipping & Return', 'Custom Tab'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-[19px] font-bold transition-colors ${
                activeTab === tab ? 'text-[#FFC100]' : 'text-zinc-800 hover:text-gray-500'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="text-[14px] text-gray-500 leading-[1.8] max-w-[100%]">
          {activeTab === 'Description' && (
            <div className="space-y-5">
              <p>
                Donec dapibus tellus sem, quis aliquam libero pharetra non. Nam vitae fermentum leo. Pellentesque bibendum dui eu mi tempor sodales. Integer gravida odio in sem laoreet tempus. Nunc vehicula nibh mauris, id bibendum metus facilisis iaculis. Phasellus suscipit dictum lacus eu auctor. Duis commodo faucibus lectus, et accumsan quam egestas at. Praesent eros mi, condimentum sit amet felis quis, hendrerit ullamcorper turpis. Etiam vel cursus elit, ut semper velit. Aenean sagittis leo massa, fermentum sollicitudin sem facilisis vel. Suspendisse potenti. Fusce porta tincidunt interdum.
              </p>
              <p>
                Praesent nec diam eleifend, vestibulum justo aliquet, aliquam ipsum. Curabitur egestas, augue a pellentesque ornare, tellus velit pulvinar nisl, sit amet placerat enim sem vel elit. Duis a mi metus. Suspendisse vulputate velit tempus efficitur lacus sit amet nunc ultricies ac gravida ante tempor
              </p>
              <h4 className="font-bold text-[16px] text-gray-700 mt-6 mb-2">Lorem Ipsum</h4>
              <ul className="list-disc pl-5 space-y-1.5 ml-2">
                <li>Condimentum sit amet felis</li>
                <li>Vestibulum justo aliquet</li>
                <li>Hendrerit ullamcorper turpis</li>
                <li>Pellentesque ornare tellus velit</li>
                <li>Nam vitae fermentum leo</li>
              </ul>
            </div>
          )}

          {activeTab === 'Delivery policy' && (
            <div>
              <p>Delivery policy information will be displayed here.</p>
            </div>
          )}

          {activeTab === 'Shipping & Return' && (
            <div>
              <p>Shipping & Return policy information will be displayed here.</p>
            </div>
          )}

          {activeTab === 'Custom Tab' && (
            <div>
              <p>Custom tab content can be placed here.</p>
            </div>
          )}
        </div>
      </div>

      <div className="mt-20">
        <CoreFeatures data={coreFeaturesData} />
      </div>

      
      {/* Reviews Section */}
      <div className="mb-20">
        <ProductReviews />
      </div>


{/* Related Products */}

<h1 className='text-2xl font-bold flex text-center items-center justify-center'>PRODUCT RELATED</h1>
<HandpickedElegance data={handpickedEleganceData} title="" subtitle=""/>
            


<h1 className='text-2xl font-bold flex text-center items-center justify-center mt-5'>RECENTLY VIEWED PRODUCTS</h1>
<HandpickedElegance data={handpickedEleganceData} title="" subtitle=""/>
    </div>
  );
};

export default Products;