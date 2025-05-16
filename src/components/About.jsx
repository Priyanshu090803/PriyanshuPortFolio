import React from 'react'

const About = () => {
    let sentence1="With expertise in JavaScript, React, Node.js, and modern CSS frameworks like Tailwind, I build seamless and interactive web experiences. I love bringing designs to life with smooth animations using GSAP & Framer Motion and ensuring robust backends with Express, MongoDB, and Mongoose"
    
    let sentence2 ="Whether it's a sleek front-end interface or a scalable full-stack application, I focus on writing clean, efficient code while keeping user experience at the forefront."
    const w1=sentence1.split(" ")
    const w2=sentence2.split(" ")
  return (
    
    <div className=' w-full h-full py-20 px-16 bg-[#cdea68] rounded-t-3xl  text-neutral-900'>
      
        <h2 className=' text-[4vw] font-monoserrat leading-[4.5vw] tracking-tight'>
           Hi, I'm Priyanshu, a passionate web developer dedicated to crafting fast, responsive, and visually stunning websites.
        </h2>
        <div className='  border-[#a4b26f] mt-10'></div>
        <div className=' flex pt-10  justify-between md:flex-row flex-col'>
            <h2 className=' text-xl md:ml-0 ml-8 mt-10 font-semibold hover:text-rose-500 text-emerald-800 uppercase duration-500 delay-200 ease-in-out transition-all'>What you can expect:</h2>
            <div className=' md:w-[70%] w-[100%]  flex md:flex-row flex-col p-2 gap-10 '>
               <div className='  flex gap-10 p-10 flex-wrap '>
                {
                    w1.map((item,index)=>{
                        return(
                            <p  className='  -mx-4 -mb-10 text-lg font-monoserrat text-emerald-800 hover:text-red-500 tracking-tighter duration-500 ease-in-out transition-all delay-75 '>{item}</p>
                        )
                    })
                }
                </div>
                <div className='  flex gap-10 p-10 flex-wrap'>
                {
                    w2.map((item,index)=>{
                        return(
                            <p  className='  -mx-4 -mb-12 text-lg font-monoserrat text-emerald-800 hover:text-red-500 tracking-tighter duration-500 ease-in-out transition-all delay-75'>{item}</p>
                        )
                    })
                }
                </div>
            </div>
        </div>    
        </div>
  )
}

export default About