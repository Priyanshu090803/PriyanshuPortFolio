import React from 'react'
import { motion } from 'framer-motion'


const Projects = () => {
  return (
    <div className='bg-[#f6f8ed] rounded-t-4xl h-full w-full py-20 px-20'>
        <div className=' w-full border-b flex justify-center border-zinc-600 [perspective::1000px][transfrom-style:preserve-3d]'>
            <motion.h1
            style={{
              translateZ:100
            }}
            initial={{
              opacity:0
            }}
            animate={{
              opacity:1
            }}
            whileHover={{
              scale:0.9,
              rotateX:-20,
              rotateY:-20,
              y:-10  
            }}
            transition={{
              duration:0.6
            }}

            className=' hover: text-[10vw] uppercase font-monoserrat mb-10 bg-clip-text font-semibold text-transparent bg-gradient-to-r from-black to-zinc-500  hover:bg-gradient-to-r hover:from-neutral-900  hover:to-neutral-600  text-shadow-sm shadow-blue-400'>Projects</motion.h1>
        </div>
        <div className=' cards w-full flex md:flex-row flex-col py-10 gap-10 items-center h-full flex-wrap justify-center'>
        <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1,
          transition:{
            duration:3
          }}}
          viewport={{
            once:true
          }}
        className='card w-[40vw] h-[40vw] max-w-[400px] max-h-[400px] min-w-[300px] min-h-[300px] rounded-3xl delay-300 duration-500 ease-in-out transition-all hover:scale-[0.98] p-5 relative overflow-hidden group bg-zinc-900 shadow-lg shadow-black/50 hover:shadow-xl hover:shadow-black/70'>
                    {/* Background with parallax effect on hover */}
            <div className='w-full absolute inset-0 z-0 opacity-70 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700 h-full rounded-3xl bg-[url(https://img.freepik.com/free-photo/view-3d-cinema-elements_23-2150720820.jpg)] bg-cover bg-center bg-no-repeat'></div>
  
            {/* Glow overlay */}
            <div className='absolute inset-0 z-1 bg-gradient-to-b from-transparent via-black/70 to-black/90 rounded-3xl'></div>
  
            {/* Content container */}
            <div className='h-full w-full rounded-2xl flex flex-col items-center p-6 gap-6 justify-end relative z-10'>
            {/* Title with shine effect */}
            <div className='flex flex-col w-full text-white font-bold uppercase text-xl text-center'>
            <h3  className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-300 to-gray-800 font-extrabold text-2xl drop-shadow-lg'>
        🎬 Moviezz
            </h3>
            <p className='text-sm font-normal normal-case mt-2 text-zinc-300'>
            AI-Powered Movie Discovery Platform
            </p>
            </div>
    
             {/* Feature pills */}
            <div className='flex flex-wrap justify-center gap-2 w-full'>
      <span className='px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs text-white border border-zinc-600/50'>React.js</span>
      <span className='px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs text-white border border-zinc-600/50'>TMDB API</span>
      <span className='px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs text-white border border-zinc-600/50'>AI Search</span>
      <span className='px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs text-white border border-zinc-600/50'>Tailwind CSS</span>
      <span className='px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs text-white border border-zinc-600/50'>Firebase</span>

            </div>
    
              {/* CTA Buttons */}
            <div className='flex gap-3 w-full'>
      <a 
        href='https://netflix-ai-6b2ce.firebaseapp.com' 
        target='_blank'
        rel='noopener noreferrer'
        className='flex-1 text-center px-4 py-2 bg-gradient-to-r from-teal-500 rounded-full text-white font-medium text-sm  transition-all duration-300 shadow-sm hover:shadow-zinc-500 hover:scale-[1.01]  font-monoserrat'
      >
        Live Demo
      </a>
      <a 
        href='https://github.com/Priyanshu090803/Moviezzzzz......' 
        target='_blank'
        rel='noopener noreferrer'
        className= 'flex-1 text-center px-4 py-2 bg-gradient-to-r from-gray-500 rounded-full text-white font-medium text-sm  transition-all duration-300 shadow-sm hover:shadow-zinc-500 hover:scale-[1.01]  font-monoserrat '
      >
        GitHub
      </a>
             </div>
             </div>
  
            { /* Subtle corner accent */}
            <div className='absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-emerald-500/50 rounded-tr-3xl'></div>
        </motion.div>

         <motion.div
         initial={{opacity:0}}
         whileInView={{opacity:1,
          transition:{
            duration:3
          }}}
          viewport={{
            once:true
          }}
         className='card w-[40vw] h-[40vw] max-w-[400px] max-h-[400px] min-w-[300px] min-h-[300px] rounded-3xl delay-300 duration-500 ease-in-out transition-all hover:scale-[0.98] p-4  md:px-12 relative overflow-hidden group bg-zinc-900 shadow-lg shadow-black/50 hover:shadow-xl hover:shadow-black/70'>
                    {/* Background with parallax effect on hover */}
            <div className='w-full absolute inset-0 z-0 opacity-70 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700 h-full rounded-3xl bg-[url(https://cdn.dribbble.com/userupload/28826307/file/original-cabd01f7f71182b6a9385f6256a64ccf.jpg?format=webp&resize=400x300&vertical=center)] bg-cover bg-center bg-no-repeat'></div>
  
            {/* Glow overlay */}
            <div className='absolute inset-0 z-1 bg-gradient-to-b from-transparent via-black/20 to-black/90 rounded-3xl'></div>
  
            {/* Content container */}
            <div className='h-full w-full rounded-2xl flex flex-col items-center p-6 gap-6 justify-end relative z-10'>
            {/* Title with shine effect */}
            <div className='flex flex-col w-full text-white font-bold uppercase text-xl text-center '>
            <h3  className='text-transparent bg-clip-text bg-gradient-to-r from-orange-100 via-orange-600 to-red-800 font-extrabold text-2xl drop-shadow-lg m'>
            🍔Swiggy clone
            </h3>
            <p className='text-sm font-normal normal-case mt-2 text-zinc-300'>
            Swiggy clone with react
            </p>
            </div>
    
             {/* Feature pills */}
            <div className='flex flex-wrap justify-center gap-2 w-full '>
      <span className='px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs text-white border border-zinc-600/50'>React.js</span>
      <span className='px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs text-white border border-zinc-600/50'>Swiggy API</span>
      <span className='px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs text-white border border-zinc-600/50'>Tailwind CSS</span>

            </div>
    
              {/* CTA Buttons */}
            <div className='flex gap-3 w-full'>
     
      <a 
        href='https://github.com/Priyanshu090803/Swiggy-Food-order-clone' 
        target='_blank'
        rel='noopener noreferrer'
        className= 'flex-1 text-center px-4 py-2 bg-gradient-to-r from-gray-500 rounded-full text-white font-medium text-sm  transition-all duration-300 shadow-sm hover:shadow-zinc-500 hover:scale-[1.01] font-monoserrat '
      >
        GitHub
      </a>
             </div>
             </div>
  
            { /* Subtle corner accent */}
            <div className='absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-orange-300/50 rounded-tr-3xl'></div>
        </motion.div>

         <motion.div
         initial={{opacity:0}}
         whileInView={{opacity:1,
          transition:{
            duration:3
          }}}
          viewport={{
            once:true
          }}
         className='card w-[40vw] h-[40vw] max-w-[400px] max-h-[400px] min-w-[300px] min-h-[300px] rounded-3xl delay-300 duration-500 ease-in-out transition-all hover:scale-[0.98] p-4  md:px-12 relative overflow-hidden group bg-zinc-900 shadow-lg shadow-black/50 hover:shadow-xl hover:shadow-black/70'>
                    {/* Background with parallax effect on hover */}
            <div className='w-full absolute inset-0 z-0 opacity-70 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700 h-full rounded-3xl bg-[urlhttps://imgs.search.brave.com/k4l74FRk9dFrVy0DJnmIfhIRZOrF9oDd8vcIFNdiCRg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9taXJv/Lm1lZGl1bS5jb20v/djIvMSo1UGVmY1dL/X2xCTFFyMXdDRGtI/YTlRLmpwZWc)] bg-cover bg-center bg-no-repeat'></div>
  
            {/* Glow overlay */}
            <div className='absolute inset-0 z-1 bg-gradient-to-b from-transparent via-black/20 to-black/90 rounded-3xl'></div>
  
            {/* Content container */}
            <div className='h-full w-full rounded-2xl flex flex-col items-center p-6 gap-6 justify-end relative z-10'>
            {/* Title with shine effect */}
            <div className='flex flex-col w-full text-white font-bold uppercase text-xl text-center '>
            <h3  className='text-transparent bg-clip-text bg-gradient-to-r from-orange-100 via-gray-600 to-neutral-800 font-extrabold text-xl drop-shadow-lg m'>
            Obyse Agency clone
            </h3> 
            <p className='text-sm font-normal normal-case mt-2 text-zinc-300'>
            Obyse Agency clone with gsap, shery.js
            </p>
            </div>
    
             {/* Feature pills */}
            <div className='flex flex-wrap justify-center gap-2 w-full '>
      <span className='px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs text-white border border-zinc-600/50'>Html</span>
      <span className='px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs text-white border border-zinc-600/50'>Css</span>
      <span className='px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs text-white border border-zinc-600/50'>JavaScript</span>
      <span className='px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs text-white border border-zinc-600/50'>Shery.js</span>
      <span className='px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs text-white border border-zinc-600/50'>GSAP</span>


            </div>
    
              {/* CTA Buttons */}
            <div className='flex gap-3 w-full'>
     
      <a 
        href='https://github.com/Priyanshu090803/obys.agency-Clone' 
        target='_blank'
        rel='noopener noreferrer'
        className= 'flex-1 text-center px-4 py-2 bg-gradient-to-r from-gray-500 rounded-full text-white font-medium text-sm  transition-all duration-300 shadow-sm hover:shadow-zinc-500 hover:scale-[1.01] font-monoserrat '
      >
        GitHub
      </a>
             </div>
             </div>
  
            { /* Subtle corner accent */}
            <div className='absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-orange-300/50 rounded-tr-3xl'></div>
        </motion.div>


        <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1,
          transition:{
            duration:3
          }}}
          viewport={{
            once:true
          }}
        className='card w-[40vw] h-[40vw] max-w-[400px] max-h-[400px] min-w-[300px] min-h-[300px] rounded-3xl delay-300 duration-500 ease-in-out transition-all hover:scale-[0.98] p-4 relative overflow-hidden group bg-zinc-900 shadow-lg shadow-black/50 hover:shadow-xl hover:shadow-black/70'>
                    {/* Background with parallax effect on hover */}
            <div className='w-full absolute inset-0 z-0 opacity-70 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700 h-full rounded-3xl bg-[url(https://img.freepik.com/free-photo/view-3d-cinema-elements_23-2150720820.jpg)] bg-cover bg-center bg-no-repeat'></div>
  
            {/* Glow overlay */}
            <div className='absolute inset-0 z-1 bg-gradient-to-b from-transparent via-black/70 to-black/90 rounded-3xl'></div>
  
            {/* Content container */}
            <div className='h-full w-full rounded-2xl flex flex-col items-center p-6 gap-6 justify-end relative z-10'>
            {/* Title with shine effect */}
            <div className='flex flex-col w-full text-white font-bold uppercase text-xl text-center'>
            <h3  className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-300 to-gray-800 font-extrabold text-2xl drop-shadow-lg'>
        🎬 Moviezz
            </h3>
            <p className='text-sm font-normal normal-case mt-2 text-zinc-300'>
            AI-Powered Movie Discovery Platform
            </p>
            </div>
    
             {/* Feature pills */}
            <div className='flex flex-wrap justify-center gap-2 w-full'>
      <span className='px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs text-white border border-zinc-600/50'>React.js</span>
      <span className='px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs text-white border border-zinc-600/50'>TMDB API</span>
      <span className='px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs text-white border border-zinc-600/50'>AI Search</span>
      <span className='px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs text-white border border-zinc-600/50'>Tailwind CSS</span>
      <span className='px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs text-white border border-zinc-600/50'>Firebase</span>

            </div>
    
              {/* CTA Buttons */}
            <div className='flex gap-3 w-full'>
      <a 
        href='https://netflix-ai-6b2ce.firebaseapp.com' 
        target='_blank'
        rel='noopener noreferrer'
        className='flex-1 text-center px-4 py-2 bg-gradient-to-r from-teal-500 rounded-full text-white font-medium text-sm  transition-all duration-300 shadow-sm hover:shadow-zinc-500 hover:scale-[1.01]  font-monoserrat'
      >
        Live Demo
      </a>
      <a 
        href='https://github.com/Priyanshu090803/Moviezzzzz......' 
        target='_blank'
        rel='noopener noreferrer'
        className= 'flex-1 text-center px-4 py-2 bg-gradient-to-r from-gray-500 rounded-full text-white font-medium text-sm  transition-all duration-300 shadow-sm hover:shadow-zinc-500 hover:scale-[1.01]  font-monoserrat '
      >
        GitHub
      </a>
             </div>
             </div>
  
            { /* Subtle corner accent */}
            <div className='absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-emerald-500/50 rounded-tr-3xl'></div>
        </motion.div>


        <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1,
          transition:{
            duration:3
          }}}
          viewport={{
            once:true
          }}
        className='card w-[40vw] h-[40vw] max-w-[400px] max-h-[400px] min-w-[300px] min-h-[300px] rounded-3xl delay-300 duration-500 ease-in-out transition-all hover:scale-[0.98] p-4 relative overflow-hidden group bg-zinc-900 shadow-lg shadow-black/50 hover:shadow-xl hover:shadow-black/70'>
                    {/* Background with parallax effect on hover */}
            <div className='w-full absolute inset-0 z-0 opacity-70 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700 h-full rounded-3xl bg-[url(https://img.freepik.com/free-photo/view-3d-cinema-elements_23-2150720820.jpg)] bg-cover bg-center bg-no-repeat'></div>
  
            {/* Glow overlay */}
            <div className='absolute inset-0 z-1 bg-gradient-to-b from-transparent via-black/70 to-black/90 rounded-3xl'></div>
  
            {/* Content container */}
            <div className='h-full w-full rounded-2xl flex flex-col items-center p-6 gap-6 justify-end relative z-10'>
            {/* Title with shine effect */}
            <div className='flex flex-col w-full text-white font-bold uppercase text-xl text-center'>
            <h3  className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-300 to-gray-800 font-extrabold text-2xl drop-shadow-lg'>
        🎬 Moviezz
            </h3>
            <p className='text-sm font-normal normal-case mt-2 text-zinc-300'>
            AI-Powered Movie Discovery Platform
            </p>
            </div>
    
             {/* Feature pills */}
            <div className='flex flex-wrap justify-center gap-2 w-full'>
      <span className='px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs text-white border border-zinc-600/50'>React.js</span>
      <span className='px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs text-white border border-zinc-600/50'>TMDB API</span>
      <span className='px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs text-white border border-zinc-600/50'>AI Search</span>
      <span className='px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs text-white border border-zinc-600/50'>Tailwind CSS</span>
      <span className='px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs text-white border border-zinc-600/50'>Firebase</span>

            </div>
    
              {/* CTA Buttons */}
            <div className='flex gap-3 w-full'>
      <a 
        href='https://netflix-ai-6b2ce.firebaseapp.com' 
        target='_blank'
        rel='noopener noreferrer'
        className='flex-1 text-center px-4 py-2 bg-gradient-to-r from-teal-500 rounded-full text-white font-medium text-sm  transition-all duration-300 shadow-sm hover:shadow-zinc-500 hover:scale-[1.01]  font-monoserrat'
      >
        Live Demo
      </a>
      <a 
        href='https://github.com/Priyanshu090803/Moviezzzzz......' 
        target='_blank'
        rel='noopener noreferrer'
        className= 'flex-1 text-center px-4 py-2 bg-gradient-to-r from-gray-500 rounded-full text-white font-medium text-sm  transition-all duration-300 shadow-sm hover:shadow-zinc-500 hover:scale-[1.01]  font-monoserrat '
      >
        GitHub
      </a>
             </div>
             </div>
  
            { /* Subtle corner accent */}
            <div className='absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-emerald-500/50 rounded-tr-3xl'></div>
        </motion.div>

            </div>
    </div>
  )
}

export default Projects