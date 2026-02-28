import React from "react";
import { Slider } from "@mui/material";

const PriceFilter = ({ priceRange, setPriceRange, min = 0, max = 270 }) => {
   const marks = [
    //  { value: 0, label: '0' },
    //  { value: 67, label: '67' },
    //  { value: 135, label: '135' },
    //  { value: 202, label: '202' },
    //  { value: 270, label: '270' },
   ];

   const handleSliderChange = (event, newValue) => {
       setPriceRange(newValue);
   };

   const handleMinChange = (e) => {
       const val = e.target.value === '' ? '' : Number(e.target.value);
       setPriceRange([val, priceRange[1]]);
   };

   const handleMaxChange = (e) => {
       const val = e.target.value === '' ? '' : Number(e.target.value);
       setPriceRange([priceRange[0], val]);
   };

   return (
       <div className="mt-4">
           {/* Add horizontal padding so thumbs and marks don't overflow the sides */}
           <div className="px-3">
             <Slider
                 value={priceRange}
                 onChange={handleSliderChange}
                 min={min}
                 max={max}
                 marks={marks}
                 sx={{
                     color: '#fbbf24', 
                     '& .MuiSlider-thumb': {
                         height: 20,
                         width: 20,
                         backgroundColor: '#fff',
                         border: '2px solid currentColor',
                         '&:hover': {
                           boxShadow: '0 0 0 8px rgba(251, 191, 36, 0.16)',
                         },
                     },
                     '& .MuiSlider-track': {
                         height: 4,
                     },
                     '& .MuiSlider-rail': {
                         color: '#d1d5db',
                         opacity: 1,
                         height: 4,
                     },
                     '& .MuiSlider-mark': {
                         backgroundColor: '#9ca3af',
                         height: 8,
                         width: 1,
                         '&.MuiSlider-markActive': {
                           opacity: 1,
                           backgroundColor: 'currentColor',
                         }
                     },
                     '& .MuiSlider-markLabel': {
                         fontSize: '11px',
                         fontWeight: 500,
                         color: '#6b7280',
                     }
                 }}
             />
           </div>
           
           <div className="flex items-center justify-between mt-8 gap-4 px-1">
             <div className="w-full">
                 <input 
                    type="number" 
                    value={priceRange[0]}
                    onChange={handleMinChange}
                    className="w-full border border-gray-300 rounded text-center py-2 text-sm text-gray-700 focus:outline-none focus:border-yellow-400" 
                 />
             </div>
             <span className="text-gray-400 font-medium">-</span>
             <div className="w-full">
                 <input 
                    type="number" 
                    value={priceRange[1]}
                    onChange={handleMaxChange}
                    className="w-full border border-gray-300 rounded text-center py-2 text-sm text-gray-700 focus:outline-none focus:border-yellow-400" 
                 />
             </div>
           </div>
       </div>
   );
};
export default PriceFilter;