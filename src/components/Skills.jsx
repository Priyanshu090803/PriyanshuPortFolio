import CircularGallery from './ui/CircularGallery';
import { motion } from 'framer-motion'
        

const Skills = () => {

  return (
    <motion.div className='  h-full  w-full  overflow-hidden px-8 py-8 pb-20'
   
    >
      <div className=' flex items-center justify-center'>
          <motion.h2 
          initial={{
            scale:0.4,
            y:100
          }}
            whileInView={{
              opacity:1,
              scale:1.15,
              y:0,
              transition:{
                duration:1.5
              }
            }}
          // animate={{
          //   opacity:1,
          //   x:0,
          //   transition:{
          //     duration:1
          //   }
          // }}
       
          whileHover={{
          scale:1,
          transition:{
          duration:0.4,
          ease:"easeInOut"
     }
 }}
 whileTap={{
   scale:.9,
          transition:{
          duration:0.4,
          ease:"easeInOut"
     }
 }}
    className={` font-plex leading-none  tracking-tighter font-semibold uppercase     hover:bg-gradient-to-r  hover:from-neutral-300 hover:bg-clip-text hover:text-transparent hover:to-[#2a272b]  
        text-6xl  md:text-[10vw] bg-gradient-to-tr from-neutral-300  to-[#35393c] bg-clip-text text-transparent 
`}>Skills</motion.h2>
        
</div>
<div
className=' h-full w-full'
style={{ height: '500px', position: 'relative' }}>
  <CircularGallery bend={2} textColor="#ffffff" borderRadius={0.1} />
</div>

    </motion.div>
  )
}

export default Skills