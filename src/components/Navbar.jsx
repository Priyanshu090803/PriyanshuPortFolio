import React from 'react'
import { LOGO, NAV_LINKS } from '../Utils/constants'

const Navbar = () => {
  return (
    <div className=' px-10 py-1 items-center flex  z-[999] fixed w-full '>
      <div className='  rounded-2xl px-2 w-full flex justify-between overflow-hidden bg-background/90 shadow-md shadow-neutral-950 backdrop-blur supports-[backdrop-filter]:bg-background/70'>
      <div className=' w-28 overflow-hidden'>
       <h2 className=' italic -rotate-[10deg] font-plex text-2xl hover:scale-80 transition-all text-neutral-800 border rounded-2xl  hover:opacity-70 cursor-pointer duration-800 delay-150'>Priyanshu</h2>
      </div>

      <div className=' links  font-plex items-center flex gap-12 font-light text-base '>
        {
          NAV_LINKS.map((item,index)=><a 
          className=' cursor-pointer hover:text-neutral-500 text-amber-50 transition-all duration-600 ease-in-out  delay-100 hover:scale-95 hover:border-b-1 '
          key={index}>{item}</a>)
        }
      </div>
      </div>
    </div>
  )
}

export default Navbar