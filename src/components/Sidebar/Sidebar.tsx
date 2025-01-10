import React from 'react'
import { MdOutlineHome } from "react-icons/md";
import { MdOutlineSearch } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import { LuUserRound } from "react-icons/lu";




const Sidebar = () => {
  return (
    <div className='max-w-md mx-auto w-[98%] px-6 py-4 text-3xl flex justify-between border-2 border-gray-300 rounded-3xl text-gray-500'>
        <button className='flex flex-col  items-center'>
            <MdOutlineHome/>
            <p className='text-sm font-bold'>
                Home
            </p>
        </button>
        <button className='flex flex-col  items-center'>
            <MdOutlineSearch/>
            <p className='text-sm font-bold'>
                Explore
            </p>
        </button>
        <button className='flex flex-col  items-center'>
            <IoMdHeartEmpty/>
            <p className='text-sm font-bold'>
                Wishlist
            </p>
        </button>
        <button className='flex flex-col  items-center'>
            <LuUserRound/>
            <p className='text-sm font-bold'>
                Profile
            </p>
        </button>
    </div>
  )
}

export default Sidebar
