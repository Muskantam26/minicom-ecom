import { Plus, TagsIcon } from 'lucide-react'
import React from 'react'

const Tags = () => {
  return (
    <div className='bg-[#f2f2f2] w-full p-5'>
        <h1 className='flex items-center gap-2 font-bold mt-10'>
    <TagsIcon/>TAGS
    </h1>


    <div className='flex gap-3 mt-10'>
        <button className='bg-white text-xs text-gray-700 rounded py-3 border px-7 border-gray-400'>Basket</button>
        <button  className='bg-white text-xs text-gray-700 rounded py-3 border px-7 border-gray-400'>Bedroom</button>
        <button  className='bg-white text-xs text-gray-700 rounded py-3 border px-7 border-gray-400'>Cotton</button>
        <button  className='bg-white text-xs text-gray-700 rounded py-3 border px-7 border-gray-400'>Kitchen</button>
        <button  className='bg-white text-xs text-gray-700 rounded py-3 border px-7 border-gray-400'>Knife</button>
        <button  className='bg-white text-xs text-gray-700 rounded py-3 border px-7 border-gray-400'>Living room</button>
        <button  className='bg-white text-xs text-gray-700 rounded py-3 border px-7 border-gray-400'>Sofa</button>
        <button  className='bg-white text-xs text-gray-700 rounded py-3 border px-7 border-gray-400'>Wood</button>
    </div>
    <div>
<h1 className='text-xl font-semibold mt-10'>OUTDOOR</h1>
    <p className='text-sm text-gray-700 tracking-wide  mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et tincidunt elit. Etiam ullamcorper eu tortor eu cursus. Praesent feugiat felis ut gravida auctor. Sed mollis, erat non euismod egestas, quam nisi fringilla orci, sit amet ultrices est sapien in velit. Donec congue orci at felis aliquet, nec finibus lectus consectetur. Nunc commodo vestibulum erat. Mauris rhoncus elit sit amet augue viverra mattis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>

<p className='text-sm text-gray-700 tracking-wide mt-5'>Etiam rhoncus dui at nunc elementum elementum. Nullam leo massa, pharetra a commodo quis, porttitor quis dolor. Nam luctus lacus ac sagittis accumsan. Pellentesque eget posuere elit. Mauris ut justo cursus lacus tristique rhoncus. Aenean iaculis, tortor quis eleifend malesuada, ex urna porta turpis, sed ultricies lacus metus ac nulla. Cras pretium sem quis urna cursus placerat. Proin at nisi in urna lobortis dictum nec vitae mauris. Nam sit amet rutrum enim, sit amet dictum est. Praesent ut enim lacinia, tincidunt nisl ut, pretium leo. Curabitur maximus vulputate ipsum id gravida.</p>

    </div>

    <div className='flex items-center text-gray-600 text-center justify-center mt-10'>
<button className='text-[10px] gap-2 cursor-pointer flex items-center text-gray-600 text-center justify-center'>SEE MORE <Plus size={13}/></button>
</div>
    </div>
  )
}

export default Tags