// // import { useEffect, useState } from 'react'
// // import AnimationDraw from '../Utils/animationDraw'

// // const Playfull = () => {
// //     const [rotate,setRotate] = useState(0);
// //     useEffect(()=>{
// //         window.addEventListener("mousemove",(e)=>{
// //             let mouseX= e.clientX;
// //             let mouseY= e.clientY;
// //             let deltaX= mouseX - window.innerWidth/2;
// //             let deltaY= mouseY - window.innerWidth/2;
// //             let angle = Math.atan2(deltaY,deltaX) * (180/Math.PI) // Radian to degree formula (1Radian = Degree*π/180 )
// //             setRotate(angle-180)
// //         })
// //     },[])

// //   return (
// //     <div className=' w-full h-screen md:px-52 px-4 py-10 bg-neutral-800 rounded-3xl'>
// //         <div className=' w-full h-full relative bg-teal-600 rounded-4xl '>
// //         <AnimationDraw/>
// //         <div className='  gap-10  rounded-lg flex  absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'> 
// //             <div className=' w-[20vw] h-[20vw] bg-zinc-50 rounded-full flex items-center justify-center'>
// //             <div className=' w-2/3 h-2/3 bg-zinc-900 rounded-full relative overflow-hidden'>
// //            <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className='  line   w-full absolute top-1/2 left-1/2  '>
// //             <div className=' w-[3vw] h-[3vw] bg-zinc-50 rounded-full'></div>
// //             </div>
// //             </div>
// //             </div>
// //         <div className=' w-[20vw] h-[20vw] bg-zinc-50 rounded-full flex items-center justify-center'>
// //            <div className=' w-2/3 h-2/3 bg-zinc-900 rounded-full relative overflow-hidden'>
// //            <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className='  line   w-full absolute top-1/2 left-1/2 '>
// //             <div className=' w-[3vw] h-[3vw] bg-zinc-50 rounded-full'></div>
// //             </div>
// //             </div>
// //             </div>
// //         </div>
// //         </div>  
// //     </div>
// //   )
// // }

// // export default Playfull

// import { useEffect, useRef } from 'react';
// import AnimationDraw from '../Utils/animationDraw';

// // Custom hook to get mouse position
// function useMousePosition() {
//   const pos = useRef({ x: 0, y: 0 });
//   useEffect(() => {
//     const update = e => {
//       pos.current = { x: e.clientX, y: e.clientY };
//     };
//     window.addEventListener('mousemove', update);
//     return () => window.removeEventListener('mousemove', update);
//   }, []);
//   return pos;
// }

// const Playfull = () => {
//   const rotateRef = useRef(0);
//   const lineRefs = [useRef(null), useRef(null)];
//   const mousePos = useMousePosition();

//   useEffect(() => {
//     let frame;
//     const animate = () => {
//       const mouseX = mousePos.current.x;
//       const mouseY = mousePos.current.y;
//       const deltaX = mouseX - window.innerWidth / 2;
//       const deltaY = mouseY - window.innerHeight / 2; // Corrected to use innerHeight
//       const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
//       const finalAngle = angle - 180;
//       rotateRef.current = finalAngle;
//       // Apply transform directly for both lines
//       lineRefs.forEach(ref => {
//         if (ref.current) {
//           ref.current.style.transform = `translate(-50%,-50%) rotate(${finalAngle}deg)`;
//         }
//       });
//       frame = requestAnimationFrame(animate);
//     };
//     frame = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(frame);
//   }, []);

//   return (
//     <div className='w-full h-screen md:px-52 px-4 py-10 bg-neutral-800 rounded-3xl'>
//       <div className='w-full h-full relative bg-teal-600 rounded-4xl'>
//         <AnimationDraw />
//         <div className='gap-10 rounded-lg flex absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
//           {[0, 1].map(i => (
//             <div key={i} className='w-[20vw] h-[20vw] bg-zinc-50 rounded-full flex items-center justify-center'>
//               <div className='w-2/3 h-2/3 bg-zinc-900 rounded-full relative overflow-hidden'>
//                 <div
//                   ref={lineRefs[i]}
//                   className='line w-full absolute top-1/2 left-1/2'
//                   style={{ transform: 'translate(-50%,-50%) rotate(0deg)' }}
//                 >
//                   <div className='w-[3vw] h-[3vw] bg-zinc-50 rounded-full'></div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Playfull;


import { useEffect, useState } from 'react'
import AnimationDraw from '../Utils/animationDraw'

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
        <div className='w-full h-screen md:px-52 px-4 py-10 bg-[#60dba1] rounded-3xl'>
            <div className='w-full h-full relative bg-teal-600 rounded-4xl'>
                <AnimationDraw />
                <div className='gap-10 rounded-lg flex absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                    <div className='w-[20vw] h-[20vw] bg-zinc-50 rounded-full flex items-center justify-center'>
                        <div className='w-2/3 h-2/3 bg-zinc-900 rounded-full relative overflow-hidden'>
                            <div
                                style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }}
                                className='line w-full absolute top-1/2 left-1/2'
                            >
                                <div className='w-[3vw] h-[3vw] bg-zinc-50 rounded-full'></div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[20vw] h-[20vw] bg-zinc-50 rounded-full flex items-center justify-center'>
                        <div className='w-2/3 h-2/3 bg-zinc-900 rounded-full relative overflow-hidden'>
                            <div
                                style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }}
                                className='line w-full absolute top-1/2 left-1/2'
                            >
                                <div className='w-[3vw] h-[3vw] bg-zinc-50 rounded-full'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Playfull
