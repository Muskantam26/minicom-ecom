// import React, { useState } from 'react';

// const SidebarFilter = () => {
//   // --- Dynamic Data Mocks ---
//   const availabilityOptions = [
//     { id: 'in-stock', label: 'In stock', count: 28 },
//     { id: 'out-of-stock', label: 'Out of stock', count: 0 },
//   ];

//   const brandOptions = [
//     { id: 'zonex', label: 'Zonex', count: 28 },
//   ];

//   const colorOptions = [
//     '#ffffff', '#d4a373', '#2b2b2b', '#e07a5f', '#81b29a', '#f2cc8f'
//   ];

//   const shapeOptions = [
//     { id: 'round', label: 'Round', count: 2 },
//     { id: 'square', label: 'Square', count: 4 },
//     { id: 'rectangle', label: 'Rectangle', count: 6 },
//     { id: 'oval', label: 'Oval', count: 18 },
//     { id: 'triangle', label: 'Triangle', count: 1 },
//     { id: 'octagon', label: 'Octagon', count: 1 },
//   ];

//   const sizeOptions = ['Medium', 'Large', 'Small'];

//   // --- State for dynamic interactions (expand on these as needed) ---
//   const [priceRange, setPriceRange] = useState({ min: 135, max: 270 });

//   return (
//     <aside className="w-64 flex-shrink-0 pr-6 border-r border-gray-200 hidden md:block">
//       {/* Clear All Button */}
//       <div className="mb-8">
//         <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-xs py-3 px-4 rounded transition-colors tracking-wider">
//           CLEAR ALL
//         </button>
//       </div>

//       {/* AVAILABILITY */}
//       <FilterSection title="AVAILABILITY">
//         <div className="space-y-3">
//           {availabilityOptions.map((option) => (
//             <CheckboxRow key={option.id} id={option.id} label={option.label} count={option.count} />
//           ))}
//         </div>
//       </FilterSection>

//       {/* PRICE */}
//       <FilterSection title="PRICE">
//         <div className="flex items-center justify-between space-x-2 mt-4">
//           <input
//             type="number"
//             value={priceRange.min}
//             onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
//             className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-center"
//           />
//           <span className="text-gray-400">-</span>
//           <input
//             type="number"
//             value={priceRange.max}
//             onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
//             className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-center"
//           />
//         </div>
//       </FilterSection>

//       {/* BRAND */}
//       <FilterSection title="BRAND">
//         <div className="space-y-3">
//           {brandOptions.map((option) => (
//             <CheckboxRow key={option.id} id={option.id} label={option.label} count={option.count} />
//           ))}
//         </div>
//       </FilterSection>

//       {/* COLOR */}
//       <FilterSection title="COLOR">
//         <div className="flex flex-wrap gap-2">
//           {colorOptions.map((color, index) => (
//             <button
//               key={index}
//               className={`w-6 h-6 rounded-full border border-gray-200 cursor-pointer hover:scale-110 transition-transform ${color === '#ffffff' ? 'shadow-sm' : ''}`}
//               style={{ backgroundColor: color }}
//               aria-label={`Select color ${color}`}
//             />
//           ))}
//         </div>
//       </FilterSection>

//       {/* SHAPE */}
//       <FilterSection title="SHAPE">
//         <div className="space-y-3">
//           {shapeOptions.map((option) => (
//             <CheckboxRow key={option.id} id={option.id} label={option.label} count={option.count} />
//           ))}
//         </div>
//       </FilterSection>

//       {/* SIZE */}
//       <FilterSection title="SIZE">
//         <div className="flex flex-wrap gap-2">
//           {sizeOptions.map((size) => (
//             <button
//               key={size}
//               className="border border-gray-300 text-gray-600 text-xs py-1.5 px-3 rounded hover:border-black hover:text-black transition-colors"
//             >
//               {size}
//             </button>
//           ))}
//         </div>
//       </FilterSection>
//     </aside>
//   );
// };

// export default SidebarFilter;

// // --- Helper Components for clean code ---

// const FilterSection = ({ title, children }) => (
//   <div className="mb-8 border-t border-gray-200 pt-4">
//     <div className="flex justify-between items-center mb-4">
//       <h3 className="text-sm font-semibold tracking-wide uppercase">{title}</h3>
//       <button className="text-xs text-gray-500 hover:text-black hover:underline cursor-pointer">
//         RESET
//       </button>
//     </div>
//     {children}
//   </div>
// );

// const CheckboxRow = ({ id, label, count }) => (
//   <div className="flex items-center justify-between group cursor-pointer">
//     <div className="flex items-center">
//       <input
//         type="checkbox"
//         id={id}
//         className="w-4 h-4 border-gray-300 rounded text-black focus:ring-black cursor-pointer"
//       />
//       <label htmlFor={id} className="ml-3 text-sm text-gray-600 group-hover:text-black cursor-pointer">
//         {label}
//       </label>
//     </div>
//     <span className="text-xs text-gray-400">({count})</span>
//   </div>
// );



import { Filter, Menu, Plus, Trash2 } from 'lucide-react'
import React, { useState } from 'react'
import { FaAngleUp } from "react-icons/fa6";
import PriceFilter from './PriceFilter';

const SidebarFilter = () => {

  const [priceRange, setPriceRange] = useState([0, 270]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedColor, setSelectedColor] = useState(null);
  
  const brands = [
    { id: 'nov-minicom', label: 'Nov Minicom', count: 28 }
  ];

  const colors = [
    { id: 'mixed-1', style: { background: 'linear-gradient(135deg, #000000 50%, #d4a373 50%)' } },
    { id: 'red', style: { backgroundColor: '#a63a3a' } },
    { id: 'teal', style: { backgroundColor: '#5c9e99' } },
    { id: 'orange', style: { backgroundColor: '#fa8a4f' } },
    { id: 'mixed-2', style: { background: 'linear-gradient(135deg, #d8d8d8 50%, #000000 50%)' } },
    { id: 'white', style: { backgroundColor: '#ffffff' }, extraClass: 'border-2' },
  ];

  const handleBrandToggle = (id) => {
    setSelectedBrands(prev => 
      prev.includes(id) ? prev.filter(b => b !== id) : [...prev, id]
    );
  };

  const handleResetPrice = () => setPriceRange([0, 270]);
  const handleResetBrand = () => setSelectedBrands([]);
  const handleResetColor = () => setSelectedColor(null);

  return (
    <aside className="w-72 pr-6 border-r border-gray-100 pb-10">
      <div>
        <div className='flex items-center text-gray-900 mt-10 space-x-2 pb-6 border-b border-gray-200'>
          <Menu/> <h1 className='font-bold text-xl'>CATEGORIES</h1>
        </div>
        <ul className='space-y-1 text-sm font-medium text-gray-700 mt-6'>
          <li className='p-3 bg-[#f6f6f6] px-5 rounded cursor-pointer transition hover:bg-gray-200'>Home Decor</li>
          <li className='p-3 bg-[#f6f6f6] px-5 rounded cursor-pointer transition hover:bg-gray-200'>Bedroom</li>
          <li className='p-3 bg-[#f6f6f6] px-5 rounded cursor-pointer transition hover:bg-gray-200'>Outdoor</li>
          <li className='p-3 bg-[#f6f6f6] px-5 rounded cursor-pointer transition hover:bg-gray-200'>Table & Desks</li>
          <li className='p-3 bg-[#f6f6f6] px-5 rounded cursor-pointer transition hover:bg-gray-200'>Plant Pots</li>
          <li className='p-3 bg-[#f6f6f6] px-5 rounded cursor-pointer transition hover:bg-gray-200'>Dining Room</li>
          <li className='p-3 bg-[#f6f6f6] px-5 rounded cursor-pointer transition hover:bg-gray-200'>Living Room</li>
          <li className='flex p-3 bg-[#f6f6f6] px-5 rounded items-center gap-2 cursor-pointer transition hover:bg-gray-200'>See More <Plus size={15}/></li>
        </ul>
      </div>
  
      <div className="mt-8 border-t border-gray-200 pt-8">
        <div className='flex items-center space-x-2 text-gray-900'>
          <Filter/><h1 className='font-bold text-xl'>FILTER BY</h1>
        </div>
        
        <button className='flex justify-center items-center gap-2 bg-yellow-400 p-4 w-full rounded text-xs text-center font-bold tracking-wider mt-6 hover:bg-yellow-500 transition-colors uppercase'>
          <Trash2 size={16}/> CLEAR ALL
        </button>
      </div>

      <div className='mt-8 pt-6 border-t border-gray-200'>
        <div className='flex justify-between items-center'>
            <h1 className='flex items-center text-gray-900 text-sm font-bold gap-2 uppercase'><FaAngleUp/>PRICE</h1>
            <button onClick={handleResetPrice} className='text-[10px] text-gray-400 font-bold hover:text-black uppercase tracking-wider'>RESET</button>
        </div>
        <div className="mt-2">
            <PriceFilter priceRange={priceRange} setPriceRange={setPriceRange} />
        </div>
      </div>

      <div className='mt-8 pt-6 border-t border-gray-200'>
        <div className='flex justify-between items-center'>
            <h1 className='flex items-center text-gray-900 text-sm font-bold gap-2 uppercase'><FaAngleUp/>BRAND</h1>
            <button onClick={handleResetBrand} className='text-[10px] text-gray-400 font-bold hover:text-black uppercase tracking-wider'>RESET</button>
        </div>
        <div className='mt-4 flex flex-col space-y-3'>
          {brands.map(brand => (
            <div key={brand.id} className='flex items-center justify-between'>
              <div className='flex items-center space-x-3'>
                <input 
                  type="checkbox" 
                  className='w-4 h-4 rounded border-gray-300 text-yellow-400 focus:ring-yellow-400 cursor-pointer' 
                  checked={selectedBrands.includes(brand.id)}
                  onChange={() => handleBrandToggle(brand.id)}
                  id={`brand-${brand.id}`}
                />
                <label htmlFor={`brand-${brand.id}`} className='text-gray-600 text-sm cursor-pointer'>{brand.label}</label>
              </div>
              <span className='text-xs text-black'>({brand.count})</span>
            </div>
          ))}
        </div>
      </div>

      <div className='mt-8 pt-6 border-t border-gray-200'>
        <div className='flex justify-between items-center'>
            <h1 className='flex items-center text-gray-900 text-sm font-bold gap-2 uppercase'><FaAngleUp/>COLOR</h1>
            <button onClick={handleResetColor} className='text-[10px] text-gray-400 font-bold hover:text-black uppercase tracking-wider'>RESET</button>
        </div>
        <div className='flex flex-wrap gap-3 mt-5 px-1'>
          {colors.map((color) => (
            <button
              key={color.id}
              onClick={() => setSelectedColor(color.id)}
              className={`w-7 h-7 rounded-full cursor-pointer relative overflow-hidden ring-1 ring-gray-200 transition-transform hover:scale-110 ${selectedColor === color.id ? 'ring-2 ring-black ring-offset-2' : ''} ${color.extraClass || ''}`}
              style={color.style}
              aria-label={`Select color ${color.id}`}
            />
          ))}
        </div>
      </div>

      <div className='mt-8 pt-6 border-t border-gray-200'>
        <h1 className='flex items-center text-gray-900 text-sm font-bold gap-2 uppercase'><FaAngleUp/>MORE FILTERS</h1>
        <div className='flex flex-col text-gray-600 space-y-3 mt-4'>
          {['Basket', 'Bedroom', 'Cotton', 'Kitchen', 'Knife', 'Living room'].map((item) => (
            <div key={item} className='flex items-center space-x-3'>
              <input type="checkbox" id={`filter-${item}`} className='w-4 h-4 rounded border-gray-300' />
              <label htmlFor={`filter-${item}`} className="text-sm cursor-pointer">{item}</label>
            </div>
          ))}
        </div>
      </div>

      <div className='mt-8 pt-6 border-t border-gray-200'>
        <h1 className='flex items-center text-gray-900 text-sm font-bold gap-2 uppercase'><FaAngleUp/>PRODUCT TYPE</h1>
        <div className='flex flex-col text-gray-600 space-y-3 mt-4'>
          {['Armchairs', 'Basket', 'Desks', 'Knife', 'Nightstands', 'Plant Stands'].map((type) => (
            <div key={type} className='flex items-center space-x-3'>
              <input type="checkbox" id={`type-${type}`} className='w-4 h-4 rounded border-gray-300' />
              <label htmlFor={`type-${type}`} className="text-sm cursor-pointer">{type}</label>
            </div>
          ))}
        </div>
      </div>

      <div className='mt-8 pt-6 border-t border-gray-200'>
         <h1 className='flex items-center text-gray-900 text-sm font-bold gap-2 uppercase'><FaAngleUp/>SIZE</h1>
         <div className='grid grid-cols-2 gap-3 mt-4 text-[10px] uppercase font-bold tracking-wider'>
          {['Small', 'Medium', 'Large'].map((s) => (
            <button key={s} className='border border-gray-300 py-2.5 rounded hover:bg-black hover:text-white transition-colors cursor-pointer'>{s}</button>
          ))}
         </div>
      </div>
    </aside>
  )
}

export default SidebarFilter