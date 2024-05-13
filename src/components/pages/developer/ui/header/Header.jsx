import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/16/solid';
import React, { useState } from 'react'

const Header = () => {
  let Links =[
    {name:"HOME",link:"/home"},
    {name:"ABOUT",link:"#aboutMe"},
    {name:"PROJECT",link:"/projects"},
    {name:"CONTACT",link:"/contact"},
  ];
  let [open, setOpen] =useState(false);

  return (
    <>
      <div className='shadow-md w-full fixed top-0 left-0 z-[9999] lg:px-[15rem] md: bg-black '>
           <div className='md:flex items-center justify-between bg-black py-4 md:px-10 lg:px-15'>
            {/* logo section */}
            <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
                <img src="../../../public/img/Vector.svg" alt=""  className='size-[60px]'/>
            </div>
            {/* Menu icon */}
            <div onClick={()=>setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                {
                    open ? <XMarkIcon/> : <Bars3BottomRightIcon />
                }
            </div>
            {/* linke items */}
            <ul className={`md:flex md:items-center md:pb-0 pb-1 absolute md:static bg-black md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-[4rem]' : 'top-[-490px]'}`}>
                {
                    Links.map((link, key) => (
                    <li className='md:ml-8 md:my-0 my-7 cursor-pointer' key={key}>
                        <a href={link.link} className='text-white hover:text-porthaccent duration-500'>{link.name}</a>
                    </li>))
                }
                {/* <button className='btn bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static'>Get Started</button> */}
            </ul>
            {/* button */}
           </div>
        </div>
    </>
  )
}

export default Header
