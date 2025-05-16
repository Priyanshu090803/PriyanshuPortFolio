import React from 'react'
import { LANDING_PAGE_HEADING } from '../Utils/constants'
import { FaArrowUp } from 'react-icons/fa'

const LandingPage = () => {
  return (
    <div className=' w-full h-full bg-black pt-1'>
        <div className=' mt-40 px-20 gap-2 flex flex-col'>
            {
                LANDING_PAGE_HEADING.map((heading,index)=>{
                return(
                <div className=' flex items-center gap-2'>
                  
                {index===1 && (<div 
                className=' shadow-xs hover:shadow-none shadow-neutral-600 bg-gradient-to-r from-emerald-700  hover:bg-gradient-to-r  hover:from-neutral-300 hover:to-neutral-900 w-36 rounded-lg h-24 flex items-center overflow-hidden cursor-pointer hover:scale-110 delay-150 justify-center duration-800 transition-all ease-in-out'>
                    <h1 className='  h-full w-full pt-[20%] py-2 -rotate-[38deg] font-bold text-[27px] scale-115 hover:scale-80 hover:rotate-360 duration-800 text-black hover:text-neutral-100 hover:text-shadow-blue-200 hover:text-shadow-xs delay-150 uppercase'>Priyanshu</h1></div>)}
                <h1 key={index} className={` text-9xl font-plex leading-none tracking-tighter font-medium uppercase ${index==1&& 'hover:to-cyan-900 hover:bg-clip-text hover:text-transparent  text-[#cdea68] hover:scale-90 hover:bg-gradient-to-r hover:from-gray-300 delay-200 duration-500 ease-in-out transition-all'}`}>{heading}</h1>
            </div>
            )}        )
            }
            
        </div>

        <div className=' border-t-[1px] border-zinc-700 mt-24 flex justify-between px-20 py-10 shadow-2xl'>
            {
            ["Building website gives me adrenaline rush! 💉","Passionate about building. 👷"].map((item,index)=><p
            className=' font-monoserrat text-fuchsia-100 font-light text-base hover:text-neutral-500 hover:scale-95 delay-300 duration-500 ease-in-out transition-all '
            key={index}>
                {item}
            </p>)
            }
           <div className='group flex items-center gap-2 cursor-pointer  '>
  <div className=' bg-white px-2 py-1 rounded-4xl font-monoserrat font-light text-neutral-900  uppercase group-hover:bg-gradient-to-r group-hover:bg-[#cdea68]  group-hover:text-neutral-900 transition-all duration-800 group-hover:opacity-95 delay-300  ease-in-out'>
    <h1 className='  text-lg'>Should we Connect?</h1>
  </div>
  <div className=' bg-white rounded-[50%] flex items-center p-2 font-light text-neutral-900 uppercase group-hover:bg-gradient-to-r group-hover:bg-[#cdea68]  group-hover:text-neutral-900 transition-all duration-800 group-hover:opacity-95 delay-300  ease-in-out'>
    <FaArrowUp className='rotate-45 text-lg' />
  </div>
</div>
        </div>
    </div>
  )
}

export default LandingPage