import React from 'react'
import { LANDING_PAGE_HEADING } from '../Utils/constants'
import { FaArrowUp } from 'react-icons/fa'
import { motion } from 'framer-motion'
const LandingPage = () => {
  return (
    <div className=' w-full h-full bg-white-  '
    data-scroll data-scroll-section data-scroll-speed="-.1"
    >
        <div className=' mt-20 md:px-20  py-10 gap-2 px-4 flex flex-col'>

                          <div className=' flex  flex-col  text-neutral-700 md:text-[10vw] text-[62px] gap-4' >
                            <h2  className={`  font-plex leading-none  tracking-tighter font-semibold uppercase `}>I create</h2>
                           <div className=' flex items-center md:gap-8 gap-1'>                          
                           <motion.div 
                           initial={{
                            width:0
                           }}
                           animate={{
                            width:"15rem"
                           }}
                           transition={{
                            duration:0.5,
                            ease:"easeInOut"
                           }}
                           whileHover={{
                            scale:1.2,
                            transition:{
                              duration:0.3,
                              ease:"easeInOut"
                            }
                          
                           }}
                           
                           className=' shadow-md hover:shadow-none shadow-neutral-600 bg-gradient-to-r from-purple-200 to-[#4d3b54]   hover:bg-gradient-to-r  hover:from-neutral-300 hover:to-neutral-900 w-36  rounded-lg h-20 md:h-36 flex items-center overflow-hidden cursor-pointer  0 justify-center duration-300 '> 
                            <motion.h2 
                            className='  h-full w-full pt-[20%] py-2 -rotate-[35deg] font-bold text-[22px] md:text-[40px] scale-115 hover:scale-80 hover:rotate-360 duration-800 text-neutral-300 hover:text-neutral-100 hover:text-shadow-blue-100 hover:text-shadow-xs delay-150 uppercase'>Priyanshu
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
                             className={` font-plex leading-none  tracking-tighter font-semibold uppercase    hover:bg-gradient-to-r  hover:from-neutral-300 hover:bg-clip-text hover:text-transparent to-[#614170]  
                            text-[#6e4f7c] text-7xl  md:text-[10vw]
                            `}>Cool</motion.h2>

</div>
                            <h2  className={`  font-plex leading-none  tracking-tighter font-semibold uppercase `}>Websites</h2>

                          </div>
            
            
        </div>

        <div className=' border-t-[1px] border-zinc-300 mt-24 flex justify-between md:px-20 md:py-10 px-4 py-6 gap-6'>
            {
            ["Building website gives me adrenaline rush! 💉","Passionate about building. 👷"].map((item,index)=><p
            className=' font-monoserrat  text-neutral-700 font-medium md:text-xl text-xs hover:text-neutral-500 hover:scale-95 delay-300 duration-500 ease-in-out transition-all '
            key={index}>
                {item} 
            </p>)
            }
           {/* <div className='group flex items-center gap-2 cursor-pointer  '>
  <div className=' bg-neutral-200 px-2 py-1 rounded-4xl font-monoserrat font-light text-neutral-900  uppercase group-hover:bg-gradient-to-r group-hover:bg-[#ae9bb6]   group-hover:text-neutral-900 transition-all duration-800 group-hover:opacity-95 delay-300  ease-in-out shadow-md shadow-gray-500'>
    <h1 className='  text-lg'>Should we Connect?</h1>
  </div>
  <div className=' bg-neutral-200 rounded-[50%] flex items-center p-2 font-light text-neutral-900 uppercase group-hover:bg-gradient-to-r group-hover:bg-[#ae9bb6]    group-hover:text-neutral-900 transition-all duration-800 group-hover:opacity-95 delay-300  ease-in-out shadow-md shadow-gray-500'>
    <FaArrowUp className='rotate-45 text-lg' />
  </div>
</div> */}
        </div>
    </div>
  )
}

export default LandingPage