'use client'

import React from 'react'
import { Input } from './ui/input'
import { SearchIcon } from 'lucide-react'

export const Search = () => {
  return (
    <div className='self-center max-w-[700px] w-full h-10 p-2 flex items-center gap-2 border-2 border-[--input] rounded-lg'>
        <SearchIcon/>
        <input className='bg-transparent outline-none w-full'/>
    </div>
  )
}
