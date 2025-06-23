import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Playfull from './components/Playfull'
import Projects from './components/Projects'
import LocomotiveScroll from 'locomotive-scroll';
import Skills from './components/Skills'

const App = () => {
  const locomotiveScroll = new LocomotiveScroll({
    smooth:true,
     multiplier: 0.8,
  });
  return (
    <div className=' w-full h-full overflow-x-hidden bg-white  text-neutral-100'>
      <Navbar/>
      <LandingPage/>
      <Marquee/>
      <About/>
      <Skills/>
      <Playfull/>
      <Projects/>
    </div>
  )
}

export default App