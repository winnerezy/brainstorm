import { Bookmark, Compass, Home, Star } from 'lucide-react'
import React from 'react'

export const Sidebar = () => {
  return (
    <aside className='h-full p-2 w-[250px] hidden lg:flex flex-col items-center gap-6 border fixed top-16'>
      <div className='flex items-center gap-2 hover:bg-gray-50 cursor-pointer w-48 h-10 rounded-md mt-4 px-2'>
        <Home className='size-5'/>
        <p className='text-sm'>Home</p>
      </div>
      <div className='flex items-center gap-2 hover:bg-gray-50 cursor-pointer w-48 h-10 rounded-md px-2'>
        <Compass className='size-5'/>
        <p className='text-sm'>Discover</p>
      </div>
      <div className='flex items-center gap-2 hover:bg-gray-50 cursor-pointer w-48 h-10 rounded-md px-2'>
        <Bookmark className='size-5'/>
        <p className='text-sm'>My Topics</p>
      </div>
      <div className='flex items-center gap-2 hover:bg-gray-50 cursor-pointer w-48 h-10 rounded-md px-2'>
        <Star className='size-5'/>
        <p className='text-sm'>Popular Topics</p>
      </div>
    </aside>
  )
}
