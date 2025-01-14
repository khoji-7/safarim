import Link from 'next/link';
import React from 'react'
import { BsRecordCircleFill } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";



const Navbar = () => {
  return (
    <div className='max-w-md w-[95%] flex justify-between text-2xl mx-auto'>
       <Link href="/">
       <div className='flex gap-2 items-center '>
            <BsRecordCircleFill/>
            <p className='font-extrabold'>
                Safarim
            </p>
        </div></Link>
        <IoMdNotifications/>
    </div>
  )
}

export default Navbar
