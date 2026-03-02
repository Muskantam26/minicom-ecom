import React, { useState } from 'react';
import { Search, CreditCard, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    country: 'United States',
    firstName: '',
    lastName: '',
    address: '',
    apartment: '',
    city: '',
    state: '',
    zip: '',
    saveInfo: false
  });

  // Example dynamic cart items array as requested
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Wooden Base Table Lamp with Fabric Shade Design',
      price: 35.00,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=200&h=200' 
    }
  ]);

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 'Enter shipping address'; // Can be calculated dynamically later based on address
  const total = subtotal; // Would add shipping here if calculated

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      {/* Container */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row h-full lg:min-h-screen">
        
        {/* Left Column - Form */}
        <div className="w-full lg:w-[55%] xl:w-[60%] p-6 lg:py-12 lg:pr-12 xl:pr-16 order-2 lg:order-1 ml-auto lg:max-w-3xl">
          
          <div className="space-y-10 lg:pl-10">
            {/* Contact Section */}
            <section>
              <div className="flex justify-between items-end mb-4">
                <h2 className="text-xl font-medium tracking-tight">Contact</h2>
                <span onClick={() => navigate("/login")} className="text-sm text-blue-600 hover:text-blue-800 underline underline-offset-2 cursor-pointer">Sign in</span>
              </div>
              <div className="relative">
                <input 
                  type="text" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email or mobile phone number" 
                  className="w-full px-3 py-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600 transition-colors text-sm"
                />
              </div>
            </section>

            {/* Delivery Section */}
            <section>
              <h2 className="text-xl font-medium tracking-tight mb-4">Delivery</h2>
              <div className="space-y-3">
                {/* Country Selection */}
                <div className="relative border border-gray-300 rounded focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 transition-colors bg-white">
                  <label className="absolute text-[11px] text-gray-500 top-1.5 left-3">Country/Region</label>
                  <select 
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full pl-3 pr-10 pt-5 pb-1 appearance-none bg-transparent focus:outline-none text-sm cursor-pointer"
                  >
                    <option value="United States">United States</option>
                    <option value="Canada">Canada</option>
                    <option value="United Kingdom">United Kingdom</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>

                {/* Name Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="relative border border-gray-300 rounded focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 transition-colors">
                    <input 
                      type="text" 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="First name (optional)" 
                      className="w-full px-3 py-3 bg-transparent focus:outline-none text-sm placeholder-gray-500"
                    />
                  </div>
                  <div className="relative border border-gray-300 rounded focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 transition-colors">
                    <input 
                      type="text" 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Last name" 
                      className="w-full px-3 py-3 bg-transparent focus:outline-none text-sm placeholder-gray-500"
                    />
                  </div>
                </div>

                {/* Address */}
                <div className="relative border border-gray-300 rounded focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 transition-colors">
                  <input 
                    type="text" 
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Address" 
                    className="w-full px-3 py-3 pr-10 bg-transparent focus:outline-none text-sm placeholder-gray-500"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
                    <Search className="h-4 w-4" />
                  </div>
                </div>

                {/* Apartment */}
                <div className="relative border border-gray-300 rounded focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 transition-colors">
                  <input 
                    type="text" 
                    name="apartment"
                    value={formData.apartment}
                    onChange={handleInputChange}
                    placeholder="Apartment, suite, etc. (optional)" 
                    className="w-full px-3 py-3 bg-transparent focus:outline-none text-sm placeholder-gray-500"
                  />
                </div>

                {/* City, State, Zip Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="relative border border-gray-300 rounded focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 transition-colors">
                    <input 
                      type="text" 
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="City" 
                      className="w-full px-3 py-3 bg-transparent focus:outline-none text-sm placeholder-gray-500"
                    />
                  </div>
                  
                  {/* State Select */}
                  <div className="relative border border-gray-300 rounded focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 transition-colors bg-white">
                    <label className="absolute text-[11px] text-gray-500 top-1.5 left-3 z-10">State</label>
                    <select 
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="w-full pl-3 pr-10 pt-5 pb-1 appearance-none bg-transparent focus:outline-none text-sm relative z-20 cursor-pointer"
                    >
                      <option value="" disabled className="hidden"></option>
                      <option value="CA">California</option>
                      <option value="NY">New York</option>
                      <option value="TX">Texas</option>
                      <option value="IL">Illinois</option>
                      {/* Add more states as needed */}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 z-10">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                    </div>
                  </div>

                  <div className="relative border border-gray-300 rounded focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 transition-colors">
                    <input 
                      type="text" 
                      name="zip"
                      value={formData.zip}
                      onChange={handleInputChange}
                      placeholder="ZIP code" 
                      className="w-full px-3 py-3 bg-transparent focus:outline-none text-sm placeholder-gray-500"
                    />
                  </div>
                </div>

                {/* Save info checkbox */}
                <div className="flex items-center pt-2">
                  <input 
                    type="checkbox" 
                    id="saveInfo"
                    name="saveInfo"
                    checked={formData.saveInfo}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded cursor-pointer accent-blue-600"
                  />
                  <label htmlFor="saveInfo" className="ml-2 block text-sm text-gray-700 cursor-pointer">
                    Save this information for next time
                  </label>
                </div>
              </div>
            </section>

            {/* Shipping Method Section */}
            <section className="pt-2">
              <h2 className="text-xl font-medium tracking-tight mb-4">Shipping method</h2>
              <div className="bg-[#f2f2f2] text-gray-600 text-sm py-4 px-4 rounded flex items-center justify-center border border-gray-200">
                Enter your shipping address to view available shipping methods.
              </div>
            </section>

            {/* Payment Section */}
            <section className="pt-2">
              <h2 className="text-xl font-medium tracking-tight">Payment</h2>
              <p className="text-sm text-gray-500 mb-4 mt-1">All transactions are secure and encrypted.</p>
              
              <div className="bg-[#f2f2f2] border border-gray-200 rounded p-12 flex flex-col items-center justify-center text-center">
                <div className="relative mb-3 flex items-center justify-center">
                  {/* Custom icon combining CreditCard and Exclamation */}
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                    <line x1="1" y1="10" x2="23" y2="10"></line>
                  </svg>
                  <div className="absolute -top-1 -right-2 bg-[#f2f2f2] rounded-full p-0.5 border border-gray-300">
                    <AlertCircle className="w-5 h-5 text-gray-500 stroke-1" />
                  </div>
                </div>
                <p className="text-gray-600 text-sm">This store can't accept payments right now.</p>
              </div>
            </section>

            {/* Pay Now Button */}
            <button className="w-full bg-[#f4f4f4] hover:bg-gray-200 text-gray-400 font-medium py-4 px-4 rounded border border-gray-200 transition duration-150 ease-in-out cursor-not-allowed">
              Pay now
            </button>
            
            {/* Footer Links */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <span onClick={() => navigate("/privacy-policy")} className="text-[13px] text-blue-600 hover:text-blue-800 hover:underline cursor-pointer">Privacy policy</span>
            </div>
          </div>
        </div>

        {/* Right Column - Order Summary Base bg: #fafafa, border-l desktop only */}
        <div className="w-full lg:w-[45%] xl:w-[40%] bg-[#fafafa] lg:border-l border-gray-200 p-6 lg:py-12 lg:pl-10 xl:pl-12 order-1 lg:order-2">
          <div className="sticky top-10 space-y-6">
            
            {/* Cart Items */}
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between group">
                  <div className="flex items-center gap-4 relative">
                    {/* Image Box */}
                    <div className="relative h-16 w-16 bg-white border border-gray-200 rounded-lg flex items-center justify-center">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="object-cover h-14 w-14 rounded-md"
                      />
                      {/* Quantity Badge */}
                      <span className="absolute -top-2 -right-2 bg-gray-600/90 text-white text-xs font-semibold rounded-full flex items-center justify-center min-w-[20px] h-5 px-1.5 ring-1 ring-white">
                        {item.quantity}
                      </span>
                    </div>
                    {/* Title */}
                    <span className="text-sm text-gray-800 font-medium max-w-[200px] leading-tight">
                      {item.name}
                    </span>
                  </div>
                  {/* Price */}
                  <span className="text-sm text-gray-800">
                    ${item.price.toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            {/* Subtotals */}
            <div className="pt-4 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal</span>
                <span className="text-gray-800 font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Shipping</span>
                <span className="text-gray-500 text-xs">{shipping}</span>
              </div>
            </div>

            {/* Total */}
            <div className="pt-4">
              <div className="flex justify-between items-center">
                <span className="text-base font-semibold text-gray-800">Total</span>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-gray-500 uppercase font-medium">USD</span>
                  <span className="text-xl font-semibold text-gray-800">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Checkout;