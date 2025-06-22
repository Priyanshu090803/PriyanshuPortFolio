import { motion } from 'framer-motion'

const Marquee = () => {
  return (
    <div className='    md:py-32 py-24 from-[#c3a6cc] to-[#2e1735] bg-gradient-to-r  w-full rounded-t-2xl z-20 '
    data-scroll data-scroll-section data-scroll-speed=".03"
    >
        <div className='flex  border-neutral-600  border-y whitespace-nowrap  overflow-hidden text-neutral-300'>
            <motion.h1
            initial={{x:0}}
            animate={{x:"-100%"}}
            transition={{
              repeat:Infinity,
              ease:"linear",
              duration:10
            }}
            className=' md:text-[18vw] text-[170px] pr-20 font-bold uppercase leading-none font-monoserrat'>I am a developer</motion.h1>
            <motion.h1
            initial={{x:0}}
            animate={{x:"-100%"}}
            transition={{
              repeat:Infinity,
              ease:"linear",
              duration:10
            }}
            className=' md:text-[18vw] text-[170px] pr-20 font-bold uppercase leading-none font-monoserrat'>I am a developer</motion.h1>
        </div>
    </div>
  )
}

export default Marquee