import { Trash2, CalendarDays } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const WishlistItem = ({ item, onRemove }) => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between p-6 bg-white border border-gray-200 rounded-md mb-4 hover:shadow-sm transition-shadow">
      <div className="flex items-center gap-6">
        <button 
          onClick={() => onRemove(item.id)}
          className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full text-gray-500 hover:text-red-500 hover:bg-red-50 transition-colors shrink-0"
          aria-label="Remove from wishlist"
        >
          <Trash2 className="w-4 h-4" />
        </button>
        
        <div className="w-[100px] h-[100px] bg-gray-50 flex items-center justify-center p-2 rounded shrink-0">
          <img 
            src={item.image} 
            alt={item.name} 
            className="w-full h-full object-contain mix-blend-multiply"
          />
        </div>

        <div className="flex flex-col py-1">
          <span onClick={() => navigate(item.slug)} className="text-[14px] font-bold text-gray-900 hover:text-yellow-500 transition-colors cursor-pointer">
            {item.name}
          </span>
          <span className="text-[14px] font-bold text-gray-900 mt-2">{item.price}</span>
          <div className="flex items-center gap-1.5 text-[11px] text-gray-400 mt-2 font-medium uppercase tracking-wider">
            <CalendarDays className="w-3.5 h-3.5" />
            <span>{item.dateAdded}</span>
          </div>
        </div>
      </div>

      <button className="bg-[#FFC100] hover:bg-yellow-500 text-black text-[11px] font-bold py-3.5 px-6 rounded-xs uppercase tracking-wider transition-colors whitespace-nowrap shrink-0">
        Quick View
      </button>
    </div>
  );
};
export default WishlistItem