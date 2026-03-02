import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderPage from '../component/headerPage';
import HandpickedElegance from '../component/Hero/HandpickedElegance';

const TrashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600 hover:text-black transition-colors cursor-pointer">
    <path d="M3 6h18"></path>
    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
    <line x1="10" y1="11" x2="10" y2="17"></line>
    <line x1="14" y1="11" x2="14" y2="17"></line>
  </svg>
);

const TruckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#3b9f67]">
    <rect x="1" y="3" width="15" height="13"></rect>
    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
    <circle cx="5.5" cy="18.5" r="2.5"></circle>
    <circle cx="18.5" cy="18.5" r="2.5"></circle>
  </svg>
);


const recommendedProducts = [
  {
    id: 101,
    name: "Solid Wood Plant Stand for Indoor Pot Display",
    price: "$19.99",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&q=80",
  },
  {
    id: 102,
    name: "Solid Wood Bedside Cabinet with Two Storage Drawers",
    price: "$19.99",
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80",
  },
  {
    id: 103,
    name: "Solid Wood Bed Frame with Classic Vintage Design",
    price: "$19.99",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80",
  }
];

const ShopingCart = () => {

  const navigate = useNavigate();
  const [items, setItems] = useState([
    {
      id: 1,
      title: "Wooden Base Table Lamp with Fabric Shade Design",
      price: 35.00,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80",
    }
  ]);

  const freeShippingThreshold = 1000;
  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const progress = Math.min((total / freeShippingThreshold) * 100, 100);
  const remainingForFreeShipping = Math.max(freeShippingThreshold - total, 0);

  const updateQuantity = (id, delta) => {
    setItems((prevItems) => 
      prevItems.map(item => {
        if (item.id === id) {
          const newQuantity = Math.max(1, item.quantity + delta);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const removeItem = (id) => {
    setItems((prevItems) => prevItems.filter(item => item.id !== id));
  };

  return (
    <div>
      <HeaderPage title={"Shopping Cart"}/>
      
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Column: Cart Table */}
          <div className="w-full lg:w-[65%]">
            {/* Table Header */}
            <div className="grid grid-cols-12 bg-[#f4f4f4] py-4 px-6 text-[11px] font-bold tracking-widest text-gray-900 uppercase">
              <div className="col-span-6">PRODUCT</div>
              <div className="col-span-2 text-center">PRICE</div>
              <div className="col-span-2 text-center">QTY</div>
              <div className="col-span-2 text-right">TOTAL</div>
            </div>

            {/* Table Body */}
            <div className="border border-gray-100 mb-6">
              {items.length > 0 ? items.map(item => (
                <div key={item.id} className="grid grid-cols-12 items-center py-6 px-6 border-b border-gray-100 last:border-b-0">
                  <div className="col-span-6 flex items-center gap-6">
                    <button onClick={() => removeItem(item.id)}>
                      <TrashIcon />
                    </button>
                    <div className="w-[80px] h-[100px] bg-[#f8f8f8] flex items-center justify-center p-2 shrink-0">
                      <img src={item.image} alt={item.title} className="max-w-full max-h-full object-contain mix-blend-multiply" />
                    </div>
                    <div className="text-[14px] text-gray-900 font-medium max-w-[250px] leading-relaxed">
                      {item.title}
                    </div>
                  </div>
                  
                  <div className="col-span-2 text-center text-[14px] font-bold text-gray-900">
                    ${item.price.toFixed(2)}
                  </div>
                  
                  <div className="col-span-2 flex justify-center">
                    <div className="flex border border-gray-200 items-center w-[90px] h-10 bg-white">
                      <button onClick={() => updateQuantity(item.id, -1)} className="w-8 h-full flex items-center justify-center text-gray-400 hover:text-black transition-colors">-</button>
                      <span className="flex-1 text-center font-bold text-[13px] text-gray-900">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)} className="w-8 h-full flex items-center justify-center text-gray-400 hover:text-black transition-colors">+</button>
                    </div>
                  </div>

                  <div className="col-span-2 text-right text-[14px] font-medium text-gray-500">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              )) : (
                <div className="py-12 text-center text-gray-500 font-medium">Your cart is empty.</div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <button className="flex-1 bg-[#f4f4f4] hover:bg-gray-200 text-gray-900 font-bold text-[11px] tracking-widest py-4 transition-colors uppercase cursor-pointer" onClick={()=>navigate("/checkout")}>
                PROCEED TO CHECKOUT
              </button>
              <div onClick={() => navigate("/products")} className="flex-1 flex cursor-pointer">
                <button className="w-full bg-[#ffc107] hover:bg-[#e6b00c] text-black font-bold text-[11px] tracking-widest py-4 transition-colors uppercase pointer-events-none">
                  CONTINUE SHOPPING
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Order Summary */}
          <div className="w-full lg:w-[35%]">
            <div className="bg-[#f4f4f4] border border-gray-100 p-8">
              <div className="text-[11px]  font-bold tracking-widest text-gray-900 uppercase pb-6 border-b border-white mb-6">
                THERE ARE {items.reduce((acc, item) => acc + item.quantity, 0)} ITEMS IN YOUR CART
              </div>
              
              <div className="flex justify-between items-center mb-6">
                <span className="text-[14px] font-bold text-gray-900 uppercase tracking-widest">TOTAL:</span>
                <span className="text-[24px] font-bold text-gray-900">${total.toFixed(2)}</span>
              </div>

              <div className="flex justify-between items-start mb-10 text-[13px]">
                <span className="font-bold text-gray-900 uppercase tracking-widest w-[100px]">SHIPPING :</span>
                <span className="text-gray-500 text-right leading-relaxed">
                  Shipping & taxes calculated at checkout
                </span>
              </div>

              <div className="mb-4">
                <div className="text-[#3b9f67] text-[13px] font-bold mb-4 uppercase tracking-wide">
                  {remainingForFreeShipping > 0 
                    ? `SPEND $${remainingForFreeShipping.toFixed(2)} FOR FREE SHIPPING` 
                    : "CONGRATULATIONS! YOU'VE GOT FREE SHIPPING"}
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full border border-[#3b9f67] bg-white text-[#3b9f67]">
                    <TruckIcon />
                  </div>
                  <div className="flex-1 h-2 bg-gray-200">
                    <div 
                      className="h-full bg-[#3b9f67] transition-all duration-300" 
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="text-[13px] text-gray-500 mt-6">
                Free shipping for any orders above $1,000.00
              </div>
            </div>
          </div>

        </div>

        {/* You may also like these products */}

        <div className="mt-20">
          <h1 className='text-black text-2xl font-bold'>You may also like these products</h1>
          <HandpickedElegance 
            data={recommendedProducts} 
            itemsPerRow={4} 
            isSlider={false}
            title="" 
            subtitle=""
            
          />
        </div>
      </div>
    </div>
  );
};

export default ShopingCart;