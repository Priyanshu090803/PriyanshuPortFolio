import React from 'react'
import { LOGO, NAV_LINKS } from '../Utils/constants'

const Navbar = () => {
  return (
    <div className=' fixed w-full px-8 py-6 flex items-center justify-between z-[999]'>
      <div className=''>
       
        <img 
        className=' w-32 hover:scale-95 transition-all duration-200 hover:opacity-80 cursor-pointer'
        src={LOGO}
        />

      </div>

      <div className=' links  font-plex items-center flex gap-12 font-light text-base '>
        {
          NAV_LINKS.map((item,index)=><a 
          className=' cursor-pointer hover:text-neutral-500  transition-all duration-600 ease-in-out transition-all delay-100 hover:scale-95 hover:border-b-1 '
          key={index}>{item}</a>)
        }
      </div>
    </div>
  )
}

export default Navbar