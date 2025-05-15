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
                className=' bg-emerald-400 hover:bg-rose-400 w-36 rounded-lg h-24 flex items-center overflow-hidden cursor-pointer hover:scale-110 delay-150 justify-center duration-600 transition-all ease-in-out'>
                    <h1 className='  h-full w-full pt-[20%] py-2 -rotate-[38deg] font-bold text-[27px] scale-115 hover:scale-80 hover:rotate-360 duration-800 text-black hover:text-neutral-100 delay-150 uppercase'>Priyanshu</h1></div>)}
                <h1 key={index} className={` text-9xl font-plex leading-none tracking-tighter font-medium uppercase ${index==1&& 'hover:to-cyan-900 hover:bg-clip-text hover:text-transparent  text-yellow-200 hover:scale-90 hover:bg-gradient-to-r hover:from-teal-200 delay-200 duration-500 ease-in-out transition-all'}`}>{heading}</h1>
            </div>
            )}        )
            }
            
        </div>

        <div className=' border-t-[1px] border-zinc-700 mt-24 flex justify-between px-20 py-10 shadow-2xl'>
            {
            ["Building website gives me adrenaline rush! 💉","Passionate about building. 👷"].map((item,index)=><p
            className=' font-monoserrat text-fuchsia-100 font-light text-sm'
            key={index}>
                {item}
            </p>)
            }
            <div className=' flex gap-2'>
                <div className=' border-[0.5px] border-zinc-400 rounded-2xl px-4 py-1 uppercase font-light'>
                    <h1>Should we Connect?</h1>
                </div>
                <div className=' border flex items-center px-2 rounded-[50%]'>
                <FaArrowUp className=' rotate-45' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingPage