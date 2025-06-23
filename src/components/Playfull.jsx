
// import { useEffect, useState } from 'react'
// import AnimationDraw from '../Utils/animationDraw'
// import { motion } from 'framer-motion';

// const Playfull = () => {
//     const [rotate, setRotate] = useState(0);

//     useEffect(() => {
//         const handleMouseMove = (e) => {
//             let mouseX = e.clientX;
//             let mouseY = e.clientY;
//             let deltaX = mouseX - window.innerWidth / 2;
//             let deltaY = mouseY - window.innerHeight / 2; // Fixed: use innerHeight
//             let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
//             setRotate(angle - 180);
//         };

//         window.addEventListener("mousemove", handleMouseMove);
//         return () => window.removeEventListener("mousemove", handleMouseMove);
//     }, []);

//     return (
//         <div className='w-full h-screen md:px-52 px-4 py-10 bg-gradient-to-tr from-[#c1bcc4] to-[#8f7cb9] rounded-t-3xl overflow-hidden'>
//             <div className='w-full h-full relative bg-gray-300 rounded-4xl'
//             data-scroll data-scroll-speed="-.8"
//             >
//                 <AnimationDraw />
//                 <div className='gap-10 rounded-lg flex absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
//                     <div className='w-[20vw]  h-[20vw] bg-zinc-50 rounded-full flex items-center justify-center'>
//                         <motion.div 
//                         whileHover={{
//                             x:-10,
//                             y:10
//                         }}
//                         className='w-2/3 h-2/3 bg-zinc-900 rounded-full relative overflow-hidden'>
//                             <div
//                                 style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }}
//                                 className='line w-full absolute top-1/2 left-1/2'
//                             >
//                                 <div className='w-[3vw] h-[3vw] bg-zinc-50 rounded-full'></div>
//                             </div>
//                         </motion.div>
//                     </div>
//                     <div className='w-[20vw]  h-[20vw] bg-zinc-50 rounded-full flex items-center justify-center'>
//                         <motion.div 
//                         whileHover={{
//                             x:-10,
//                             y:10
//                         }}
//                         className='w-2/3 h-2/3 bg-zinc-900 rounded-full relative overflow-hidden'>
//                             <div
//                                 style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }}
//                                 className='line w-full absolute top-1/2 left-1/2'
//                             >
//                                 <div className='w-[3vw] h-[3vw] bg-zinc-50 rounded-full'></div>
//                             </div>
//                         </motion.div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Playfull


import { useEffect, useState } from 'react'
import AnimationDraw from '../Utils/animationDraw'
import { motion } from 'framer-motion';
import { div } from 'framer-motion/client';

const Playfull = () => {
    const [rotate, setRotate] = useState(0);

    useEffect(() => {
        const handleMove = (e) => {
            // Handle both touch and mouse events
            let clientX, clientY;
            
            if (e.touches) {
                // Touch event
                clientX = e.touches[0].clientX;
                clientY = e.touches[0].clientY;
            } else {
                // Mouse event
                clientX = e.clientX;
                clientY = e.clientY;
            }

            let deltaX = clientX - window.innerWidth / 2;
            let deltaY = clientY - window.innerHeight / 2;
            let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle - 180);
        };

        // Add both mouse and touch event listeners
        window.addEventListener("mousemove", handleMove);
        window.addEventListener("touchmove", handleMove);

        return () => {
            window.removeEventListener("mousemove", handleMove);
            window.removeEventListener("touchmove", handleMove);
        };
    }, []);

    return (
        <motion.div className='w-full h-screen'
          
        >
        <div className='w-full md:h-full h-2/3 md:px-52 px-4 py-10 bg-gradient-to-tr from-[#c1bcc4] to-[#8f7cb9] rounded-t-3xl overflow-hidden'>
            <div className='w-full md:h-full h-2/3 relative bg-gray-300 rounded-4xl'
            data-scroll data-scroll-speed="-.2"
            >
                <AnimationDraw />
                <div className='gap-10 rounded-lg flex absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                    {/* First Eye */}
                    <div className='md:w-[20vw] w-24 h-24 md:h-[20vw] bg-zinc-50 rounded-full flex items-center justify-center'>
                        <motion.div 
                        whileHover={{
                            x:-10,
                            y:10
                        }}
                        className='w-2/3 h-2/3 bg-zinc-900 rounded-full relative overflow-hidden'>
                            <div
                                style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }}
                                className='line w-full absolute top-1/2 left-1/2'
                            >
                                <div className='md:w-[3vw] md:h-[3vw] w-5 h-5 bg-zinc-50 rounded-full'></div>
                            </div>
                        </motion.div>
                    </div>
                    
                    {/* Second Eye */}
                    <div className='md:w-[20vw] md:h-[20vw]  w-24 h-24 bg-zinc-50 rounded-full flex items-center justify-center'>
                        <motion.div 
                        whileHover={{
                            x:-10,
                            y:10
                        }}
                        className='w-2/3 h-2/3 bg-zinc-900 rounded-full relative overflow-hidden'>
                            <div
                                style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }}
                                className='line w-full absolute top-1/2 left-1/2'
                            >
                                <div className='md:w-[3vw] md:h-[3vw] w-5 h-5 bg-zinc-50 rounded-full'></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div></motion.div>
    )
}

export default Playfull