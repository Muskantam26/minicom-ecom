import React, { useState } from 'react';
import HeaderPage from '../component/headerPage';
import { Trash2, CalendarDays } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import WishlistItem from '../component/WishlistItem';

const initialWishlist = [
  {
    id: 1,
    name: 'Solid Wood TV Stand With Storage Drawers Design',
    price: '$135.00',
    dateAdded: 'MAR 02, 2026',
    image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80',
    slug: '/product/1'
  }
];



const Wishlist = () => {
  const navigate = useNavigate();
  const [wishlist, setWishlist] = useState(initialWishlist);

  const handleRemove = (id) => {
    setWishlist(wishlist.filter(item => item.id !== id));
  };

  return (
    <div className="bg-white min-h-screen">
      <HeaderPage title="Page Wishlist" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 mt-8 md:mt-12">
        {wishlist.length > 0 ? (
          <div className="flex flex-col">
            {wishlist.map((item) => (
              <WishlistItem
                key={item.id} 
                item={item} 
                onRemove={handleRemove}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 md:py-16 bg-gray-50 rounded-md border border-gray-100 px-4">
            <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Your wishlist is empty</h2>
            <p className="text-sm md:text-base text-gray-500 mb-6">Browse our collection and add items you love!</p>
            <button onClick={() => navigate("/")} className="inline-block bg-brand-hover text-white text-[12px] md:text-[13px] font-bold py-3 md:py-3.5 px-6 md:px-8 rounded-sm uppercase tracking-wider hover:bg-gray-800 transition-colors">
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;