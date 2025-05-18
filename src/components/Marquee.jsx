import React from 'react'
import { motion } from 'framer-motion'

const Marquee = () => {
  return (
    <div className=' py-20 from-teal-600 to-[#080808] bg-gradient-to-r  w-full rounded-t-4xl '>
        <div className='flex border-zinc-600 border-y-2 whitespace-nowrap gap-10 overflow-hidden text-neutral-200'>
            <motion.h1 className=' text-[18vw] font-semibold uppercase leading-none font-monoserrat'>I am a developer</motion.h1>
            <motion.h1 className=' text-[18vw] font-semibold uppercase leading-none font-monoserrat'>I am a developer</motion.h1>
        </div>
    </div>
  )
}

export default Marquee