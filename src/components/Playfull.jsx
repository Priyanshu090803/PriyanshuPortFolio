
import { useEffect, useState } from 'react'
import AnimationDraw from '../Utils/animationDraw'
import { motion } from 'framer-motion';

const Playfull = () => {
    const [rotate, setRotate] = useState(0);

    useEffect(() => {
        const handleMouseMove = (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;
            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2; // Fixed: use innerHeight
            let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle - 180);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className='w-full h-screen md:px-52 px-4 py-10 bg-gradient-to-tr from-[#c1bcc4] to-[#8f7cb9] rounded-t-3xl overflow-hidden'>
            <div className='w-full h-full relative bg-gray-300 rounded-4xl'
            data-scroll data-scroll-speed="-.8"
            >
                <AnimationDraw />
                <div className='gap-10 rounded-lg flex absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                    <div className='w-[20vw]  h-[20vw] bg-zinc-50 rounded-full flex items-center justify-center'>
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
                                <div className='w-[3vw] h-[3vw] bg-zinc-50 rounded-full'></div>
                            </div>
                        </motion.div>
                    </div>
                    <div className='w-[20vw]  h-[20vw] bg-zinc-50 rounded-full flex items-center justify-center'>
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
                                <div className='w-[3vw] h-[3vw] bg-zinc-50 rounded-full'></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Playfull
