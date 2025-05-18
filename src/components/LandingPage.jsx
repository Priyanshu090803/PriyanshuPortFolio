import React from 'react'
import { LANDING_PAGE_HEADING } from '../Utils/constants'
import { FaArrowUp } from 'react-icons/fa'
import { motion } from 'framer-motion'
const LandingPage = () => {
  return (
    <div className=' w-full h-full bg-[#fefbff] pt-1'>
        <div className=' mt-40 px-20 gap-2 flex flex-col'>

                          <div className=' flex  p-2 flex-col gap-2 text-neutral-700 text-[10vw]'>
                            <h2  className={`  font-plex leading-none  tracking-tighter font-medium uppercase `}>I create</h2>
                           <div className=' flex items-center gap-8'>                          
                           <motion.div 
                           initial={{
                            scale:1
                           }}
                           whileHover={{
                            scale:1.2,
                            transition:{
                              duration:0.3,
                              ease:"easeInOut"
                            }
                          
                           }}
                           
                           className=' shadow-md hover:shadow-none shadow-neutral-600 bg-gradient-to-r from-gray-100 to-teal-700   hover:bg-gradient-to-r  hover:from-neutral-300 hover:to-neutral-900 w-36 rounded-lg h-24 flex items-center overflow-hidden cursor-pointer  0 justify-center duration-300 '> 
                            <motion.h2 
                            className='  h-full w-full pt-[20%] py-2 -rotate-[38deg] font-bold text-[27px] scale-115 hover:scale-80 hover:rotate-360 duration-800 text-neutral-900 hover:text-neutral-100 hover:text-shadow-blue-100 hover:text-shadow-xs delay-150 uppercase'>Priyanshu
                            </motion.h2>
                            </motion.div>

                            <motion.h2 
                            whileHover={{
                              scale:.9,
                              transition:{
                                duration:0.3,
                              ease:"easeInOut"
                              }
                            }}
                             className={` font-plex leading-none  tracking-tighter font-medium uppercase    hover:bg-gradient-to-r  hover:from-gray-200 hover:bg-clip-text hover:text-transparent to-cyan-700 
                            text-teal-600
                            `}>Cool</motion.h2>

</div>
                            <h2  className={`  font-plex leading-none  tracking-tighter font-medium uppercase `}>Websites</h2>

                          </div>
            
            
        </div>

        <div className=' border-t-[1px] border-zinc-700 mt-24 flex justify-between px-20 py-10 shadow-2xl'>
            {
            ["Building website gives me adrenaline rush! 💉","Passionate about building. 👷"].map((item,index)=><p
            className=' font-monoserrat text-neutral-900 font-light text-base hover:text-neutral-500 hover:scale-95 delay-300 duration-500 ease-in-out transition-all '
            key={index}>
                {item}
            </p>)
            }
           <div className='group flex items-center gap-2 cursor-pointer  '>
  <div className=' bg-neutral-200 px-2 py-1 rounded-4xl font-monoserrat font-light text-neutral-900  uppercase group-hover:bg-gradient-to-r group-hover:bg-[#cdea68]  group-hover:text-neutral-900 transition-all duration-800 group-hover:opacity-95 delay-300  ease-in-out shadow-md shadow-gray-500'>
    <h1 className='  text-lg'>Should we Connect?</h1>
  </div>
  <div className=' bg-neutral-200 rounded-[50%] flex items-center p-2 font-light text-neutral-900 uppercase group-hover:bg-gradient-to-r group-hover:bg-[#cdea68]  group-hover:text-neutral-900 transition-all duration-800 group-hover:opacity-95 delay-300  ease-in-out shadow-md shadow-gray-500'>
    <FaArrowUp className='rotate-45 text-lg' />
  </div>
</div>
        </div>
    </div>
  )
}

export default LandingPage