import { Plus, Minus, TagsIcon } from 'lucide-react'
import React, { useState } from 'react'

const Tags = ({
  tagsList = ['Basket', 'Bedroom', 'Cotton', 'Kitchen', 'Knife', 'Living room', 'Sofa', 'Wood'],
  sectionTitle = "OUTDOOR",
  paragraphs = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et tincidunt elit. Etiam ullamcorper eu tortor eu cursus. Praesent feugiat felis ut gravida auctor. Sed mollis, erat non euismod egestas, quam nisi fringilla orci, sit amet ultrices est sapien in velit. Donec congue orci at felis aliquet, nec finibus lectus consectetur. Nunc commodo vestibulum erat. Mauris rhoncus elit sit amet augue viverra mattis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    "Etiam rhoncus dui at nunc elementum elementum. Nullam leo massa, pharetra a commodo quis, porttitor quis dolor. Nam luctus lacus ac sagittis accumsan. Pellentesque eget posuere elit. Mauris ut justo cursus lacus tristique rhoncus. Aenean iaculis, tortor quis eleifend malesuada, ex urna porta turpis, sed ultricies lacus metus ac nulla. Cras pretium sem quis urna cursus placerat. Proin at nisi in urna lobortis dictum nec vitae mauris. Nam sit amet rutrum enim, sit amet dictum est. Praesent ut enim lacinia, tincidunt nisl ut, pretium leo. Curabitur maximus vulputate ipsum id gravida."
  ]
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // If there's only 1 paragraph, we still show it, but no "SEE MORE" button is needed
  const visibleParagraphs = isExpanded ? paragraphs : paragraphs.slice(0, 1);

  return (
    <div className='bg-[#f2f2f2] w-full p-5 lg:p-10'>
      <h1 className='flex items-center gap-2 font-bold mt-5 lg:mt-10 text-lg lg:text-xl'>
        <TagsIcon className="w-5 h-5 lg:w-6 lg:h-6"/>TAGS
      </h1>

      <div className='flex flex-wrap gap-2 lg:gap-3 mt-6 lg:mt-10'>
        {tagsList.map((tag, index) => (
          <button 
            key={index} 
            className='bg-white text-xs lg:text-sm text-gray-700 rounded py-2 lg:py-3 border px-4 lg:px-7 border-gray-400 hover:bg-gray-100 transition-colors'
          >
            {tag}
          </button>
        ))}
      </div>

      <div className='mt-8 lg:mt-12'>
        <h1 className='text-lg lg:text-xl font-semibold'>{sectionTitle}</h1>
        {visibleParagraphs.map((para, index) => (
          <p key={index} className='text-xs text-gray-700 tracking-wide mt-4 lg:mt-5 leading-relaxed'>
            {para}
          </p>
        ))}
      </div>

      {paragraphs.length > 1 && (
        <div className='flex items-center text-gray-600 text-center justify-center mt-8 lg:mt-10 mb-5 lg:mb-10'>
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className='text-[10px] lg:text-xs gap-2 cursor-pointer flex items-center text-gray-600 text-center justify-center hover:text-black transition-colors'
          >
            {isExpanded ? (
              <>SEE LESS <Minus size={13} className="lg:w-4 lg:h-4"/></>
            ) : (
              <>SEE MORE <Plus size={13} className="lg:w-4 lg:h-4"/></>
            )}
          </button>
        </div>
      )}
    </div>
  )
}

export default Tags