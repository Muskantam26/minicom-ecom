import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const categoriesData = [
  { id: 1, title: 'Bedroom', products: 26, image: 'https://nov-minicom.myshopify.com/cdn/shop/files/cate-bedroom.png?crop=center&height=380&v=1751254345&width=380' },
  { id: 2, title: 'Dining Room', products: 24, image: 'https://nov-minicom.myshopify.com/cdn/shop/files/cate-dining-room.png?crop=center&height=380&v=1751254349&width=380' },
  { id: 3, title: 'Lighting', products: 28, image: 'https://nov-minicom.myshopify.com/cdn/shop/files/cate-lighting.png?crop=center&height=380&v=1751254345&width=380' },
  { id: 4, title: 'Tables & Desks', products: 29, image: 'https://nov-minicom.myshopify.com/cdn/shop/files/cate-table.png?crop=center&height=380&v=1751254345&width=380' },
  { id: 5, title: 'Office', products: 18, image: 'https://nov-minicom.myshopify.com/cdn/shop/files/cate-office.png?crop=center&height=380&v=1751254345&width=380' },
  { id: 6, title: 'Living Room', products: 30, image: 'https://nov-minicom.myshopify.com/cdn/shop/files/cate-livingroom.png?crop=center&height=380&v=1751254350&width=380' },
  { id: 7, title: 'Outdoor', products: 15, image: 'https://nov-minicom.myshopify.com/cdn/shop/files/cate-outdoor.png?crop=center&height=380&v=1751254345&width=380' },
  { id: 8, title: 'Decor', products: 42, image: 'https://nov-minicom.myshopify.com/cdn/shop/files/cate-livingroom.png?crop=center&height=380&v=1751254350&width=380' },
];

const CollectionProduct = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = direction === 'left' ? -350 : 350;
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div className="relative w-full group py-4">
             {/* Left Arrow */}
             <button 
                onClick={() => scroll('left')}
                className="absolute left-0 cursor-pointer lg:-left-15 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white border border-gray-100 rounded-full shadow-[0_4px_15px_rgb(0,0,0,0.08)] flex items-center justify-center text-gray-400 hover:text-black hover:shadow-[0_8px_25px_rgb(0,0,0,0.12)] transition-all duration-300"
             >
                <ChevronLeft size={24} strokeWidth={1.5} />
             </button>

             {/* Scrollable Container */}
             <div 
                ref={scrollRef}
                className="flex gap-6 overflow-x-auto scrollbar-hide [&::-webkit-scrollbar]:hidden snap-x snap-mandatory px-4 pb-8 pt-4 w-full"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
             >
                {categoriesData.map((category) => (
                    <div 
                        key={category.id} 
                        className="flex-none w-[170px] md:w-[200px] bg-white rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-6 flex flex-col items-center justify-center gap-4 transition-all duration-300 snap-center cursor-pointer transform hover:-translate-y-1"
                    >
                        <div className="w-full h-24 md:h-28 flex items-center justify-center mb-2">
                            <img 
                                src={category.image} 
                                alt={category.title} 
                                className="max-h-full object-contain mix-blend-multiply"
                            />
                        </div>
                        <div className="text-center">
                            <h3 className="font-bold text-gray-900 text-[15px]">{category.title}</h3>
                            <p className="text-gray-500 text-[13px] mt-1">{category.products} Products</p>
                        </div>
                    </div>
                ))}
             </div>

             {/* Right Arrow */}
             <button 
                onClick={() => scroll('right')}
                className="absolute right-0 cursor-pointer lg:-right-15 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white border border-gray-100 rounded-full shadow-[0_4px_15px_rgb(0,0,0,0.08)] flex items-center justify-center text-gray-400 hover:text-black hover:shadow-[0_8px_25px_rgb(0,0,0,0.12)] transition-all duration-300"
             >
                <ChevronRight size={24} strokeWidth={1.5} />
             </button>
        </div>
    );
};

export default CollectionProduct;