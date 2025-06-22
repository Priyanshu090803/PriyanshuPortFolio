import React from 'react'
import { MY_IMG } from '../Utils/constants'
import { easeInOut, motion } from 'framer-motion'

const About = () => {

    let sentence1="With expertise in JavaScript, React, Node.js, and modern CSS frameworks like Tailwind, I build seamless and interactive web experiences. I love bringing designs to life with smooth animations using GSAP & Framer Motion and ensuring robust backends with Express, MongoDB, and Mongoose"
    
    let sentence2 ="Whether it's a sleek front-end interface or a scalable full-stack application, I focus on writing clean, efficient code while keeping user experience at the forefront."
    const w1=sentence1.split(" ")
    const w2=sentence2.split(" ")
  return (
    
    <div className=' w-full h-full md:py-20  md:px-16 px-4 bg-[#ffffff] rounded-t-3xl  text-neutral-900'
    data-scroll data-scroll-section data-scroll-speed=".1"

    
    >
       <div className=' w-full flex justify-center   '>
        <h2 className=' md:text-6xl text-3xl font-monoserrat md:leading-[4.5vw] tracking-tight'>
           Hi, I'm Priyanshu, a passionate web developer dedicated to crafting fast, responsive, and visually stunning websites.
        </h2>
        </div>
        <div className='  border-[#d4dabd] mt-10 border'></div>

        <div className='  flex md:pt-10 md:mb-12 justify-between md:flex-row flex-col'>
            <h2 className=' text-xl    md:mt-10 mt-6 font-semibold hover:text-rose-500 text-emerald-800 uppercase duration-500 delay-200 ease-in-out transition-all  hover:scale-95'>What you can expect:</h2>
            <div className=' md:w-[70%] w-[100%]  flex md:flex-row flex-col p-2 gap-2 '>
               <div className='  flex md:gap-10 gap-9 md:p-10 p-2 flex-wrap cursor-pointer'>
                {
                    w1.map((item,index)=>{
                        return(
                            <p  className='  -mx-4 -mb-10 text-lg md:text-3xl font-monoserrat text-emerald-800 hover:text-red-500 hover:scale-95 tracking-tighter duration-500 ease-in-out transition-all delay-75 '>{item}</p>
                        )
                    })
                }
                </div>
                <div className='  flex gap-10 p-10 flex-wrap cursor-pointer'>
                {
                    w2.map((item,index)=>{
                        return(
                            <p  className=' hover:scale-95  -mx-4 -mb-12 text-lg md:text-3xl font-monoserrat text-emerald-800 hover:text-red-500 tracking-tighter duration-500 ease-in-out transition-all delay-75'>{item}</p>
                        )
                    })
                }
                </div>
            </div> 

        </div> 

        <div className='  border-[#a8ba68] my-16 border'></div>

        <div className='  h-full [perspective::1000px] [transform-style:preserve-3d] w-full flex md:justify-between justify-center px-16 py-16 md:flex-row flex-col gap-10 mt-10'>
            <div className='  flex flex-col md:gap-24  gap-10'>
            <h2 className=' text-4xl hover:text-rose-500  delay-200 duration-500 ease-in-out transition-all font-monoserrat  text-neutral-900 md:mt-10 mt-0 font-medium  hover:scale-95'>I automate boring tasks with scripts!</h2>
               <div className='  border-[#a8ba68]  border'></div>
            <p className=' font-monoserrat text-lg text-neutral-900 hover:text-rose-400 delay-200 duration-500 ease-in-out transition-all  hover:scale-95'>Let's build something amazing together!</p>
            </div>
            <motion.img 
            whileHover={{
                rotateX:20,
                rotateY:20,
                y:-50,
                transition:{
                duration:0.3,
                ease:"easeInOut"
                }
            }}
            initial={{
                opacity:0
            }}
            whileInView={{
                opacity:1,
                scale:1,
                transition:{
                    duration:3,
                    // delay:0.3
                }
            }}
            viewport={{
                once:true
            }}
            src={MY_IMG}
            className=' md:w-[30vw]    hover:shadow-[0_4px_6px_1px_rgba(80,40,0,0.5),0_2px_4px_-1px_rgba(0,110,30,0.06)] rounded-md w-60 delay-200 duration-500 ease-in-out transition-all'/>
        </div>

        </div>
  )
}

export default About