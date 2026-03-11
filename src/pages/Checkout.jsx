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
    <div className="min-h-screen bg-background text-title">
      {/* Container */}
      <div className="mx-auto flex flex-col lg:flex-row ">
        
        {/* Left Column - Form */}
        <div className="w-full  p-6 lg:py-12 lg:pr-12 xl:pr-16 order-2 lg:order-1">
          
          <div className="space-y-10 lg:pl-10">
            {/* Contact Section */}
            <section>
              <div className="flex justify-between items-end mb-4">
                <h2>Contact</h2>
                <span onClick={() => navigate("/login")} className="text-sm text-link hover:text-link-hover underline underline-offset-2 cursor-pointer">Sign in</span>
              </div>
              <div className="relative">
                <input 
                  type="text" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email or mobile phone number" 
                  className="w-full px-3 py-3 border border-outline rounded focus:outline-none focus:ring-1 focus:ring-brand focus:border-brand transition-colors text-sm"
                />
              </div>
            </section>

            {/* Delivery Section */}
            <section>
              <h2 className="mb-4">Delivery</h2>
              <div className="space-y-3">
                {/* Country Selection */}
                <div className="relative border border-outline rounded focus-within:border-brand focus-within:ring-1 focus-within:ring-brand transition-colors bg-background">
                  <label className="absolute text-[11px] text-body top-1.5 left-3">Country/Region</label>
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
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-body">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>

                {/* Name Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="relative border border-outline rounded focus-within:border-brand focus-within:ring-1 focus-within:ring-brand transition-colors">
                    <input 
                      type="text" 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="First name (optional)" 
                      className="w-full px-3 py-3 bg-transparent focus:outline-none text-sm placeholder-body"
                    />
                  </div>
                  <div className="relative border border-outline rounded focus-within:border-brand focus-within:ring-1 focus-within:ring-brand transition-colors">
                    <input 
                      type="text" 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Last name" 
                      className="w-full px-3 py-3 bg-transparent focus:outline-none text-sm placeholder-body"
                    />
                  </div>
                </div>

                {/* Address */}
                <div className="relative border border-outline rounded focus-within:border-brand focus-within:ring-1 focus-within:ring-brand transition-colors">
                  <input 
                    type="text" 
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Address" 
                    className="w-full px-3 py-3 pr-10 bg-transparent focus:outline-none text-sm placeholder-body"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-subtitle">
                    <Search className="h-4 w-4" />
                  </div>
                </div>

                {/* Apartment */}
                <div className="relative border border-outline rounded focus-within:border-brand focus-within:ring-1 focus-within:ring-brand transition-colors">
                  <input 
                    type="text" 
                    name="apartment"
                    value={formData.apartment}
                    onChange={handleInputChange}
                    placeholder="Apartment, suite, etc. (optional)" 
                    className="w-full px-3 py-3 bg-transparent focus:outline-none text-sm placeholder-body"
                  />
                </div>

                {/* City, State, Zip Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="relative border border-outline rounded focus-within:border-brand focus-within:ring-1 focus-within:ring-brand transition-colors">
                    <input 
                      type="text" 
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="City" 
                      className="w-full px-3 py-3 bg-transparent focus:outline-none text-sm placeholder-body"
                    />
                  </div>
                  
                  {/* State Select */}
                  <div className="relative border border-outline rounded focus-within:border-brand focus-within:ring-1 focus-within:ring-brand transition-colors bg-background">
                    <label className="absolute text-[11px] text-body top-1.5 left-3 z-10">State</label>
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
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-body z-10">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                    </div>
                  </div>

                  <div className="relative border border-outline rounded focus-within:border-brand focus-within:ring-1 focus-within:ring-brand transition-colors">
                    <input 
                      type="text" 
                      name="zip"
                      value={formData.zip}
                      onChange={handleInputChange}
                      placeholder="ZIP code" 
                      className="w-full px-3 py-3 bg-transparent focus:outline-none text-sm placeholder-body"
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
                    className="h-4 w-4 text-link focus:ring-brand border-outline rounded cursor-pointer accent-brand"
                  />
                  <label htmlFor="saveInfo" className="ml-2 block text-sm text-body cursor-pointer">
                    Save this information for next time
                  </label>
                </div>
              </div>
            </section>

            {/* Shipping Method Section */}
            <section className="pt-2">
              <h2 className="mb-4">Shipping method</h2>
              <div className="bg-secondary text-subtitle text-sm py-4 px-4 rounded flex items-center justify-center border border-outline">
                Enter your shipping address to view available shipping methods.
              </div>
            </section>

            {/* Payment Section */}
            <section className="pt-2">
              <h2>Payment</h2>
              <p className="text-body mb-4 mt-1">All transactions are secure and encrypted.</p>
              
              <div className="bg-secondary border border-outline rounded p-12 flex flex-col items-center justify-center text-center">
                <div className="relative mb-3 flex items-center justify-center">
                  {/* Custom icon combining CreditCard and Exclamation */}
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-subtitle">
                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                    <line x1="1" y1="10" x2="23" y2="10"></line>
                  </svg>
                  <div className="absolute -top-1 -right-2 bg-secondary rounded-full p-0.5 border border-outline">
                    <AlertCircle className="w-5 h-5 text-body stroke-1" />
                  </div>
                </div>
                <p className="text-subtitle">This store can't accept payments right now.</p>
              </div>
            </section>

            {/* Pay Now Button */}
            <button className="w-full bg-secondary hover:bg-outline text-subtitle font-medium py-4 px-4 rounded border border-outline transition duration-150 ease-in-out cursor-not-allowed">
              Pay now
            </button>
            
            {/* Footer Links */}
            <div className="mt-8 pt-6 border-t border-outline">
              <span onClick={() => navigate("/privacy-policy")} className="text-[13px] text-link hover:text-link-hover hover:underline cursor-pointer">Privacy policy</span>
            </div>
          </div>
        </div>

        {/* Right Column - Order Summary Base bg: #fafafa, border-l desktop only */}
        <div className="w-full lg:w-[45%] xl:w-[40%] bg-secondary lg:border-l border-outline p-6 lg:py-12 lg:pl-10 xl:pl-12 order-1 lg:order-2">
          <div className="sticky top-10 space-y-6">
            
            {/* Cart Items */}
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between group">
                  <div className="flex items-center gap-4 relative">
                    {/* Image Box */}
                    <div className="relative h-16 w-16 bg-background border border-outline rounded-lg flex items-center justify-center">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="object-cover h-14 w-14 rounded-md"
                      />
                      {/* Quantity Badge */}
                      <span className="absolute -top-2 -right-2 bg-title/90 text-background text-xs font-semibold rounded-full flex items-center justify-center min-w-[20px] h-5 px-1.5 ring-1 ring-background">
                        {item.quantity}
                      </span>
                    </div>
                    {/* Title */}
                    <span className="text-sm text-title font-medium max-w-[200px] leading-tight">
                      {item.name}
                    </span>
                  </div>
                  {/* Price */}
                  <span className="text-sm text-title">
                    ${item.price.toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            {/* Subtotals */}
            <div className="pt-4 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-subtitle">Subtotal</span>
                <span className="text-title font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-subtitle">Shipping</span>
                <span className="text-body text-xs">{shipping}</span>
              </div>
            </div>

            {/* Total */}
            <div className="pt-4">
              <div className="flex justify-between items-center">
                <span className="text-base font-semibold text-title">Total</span>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-body uppercase font-medium">USD</span>
                  <span className="text-xl font-semibold text-title">${total.toFixed(2)}</span>
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