import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Playfull from './components/Playfull'
import Projects from './components/Projects'

const App = () => {
  return (
    <div className=' w-full h-full overflow-x-hidden bg-[#ffffff] text-neutral-100'>
      <Navbar/>
      <LandingPage/>
      <Marquee/>
      <About/>
      <Playfull/>
      <Projects/>
    </div>
  )
}

export default App