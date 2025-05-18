import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Playfull from './components/Playfull'

const App = () => {
  return (
    <div className=' w-full h-full overflow-x-hidden bg-[#8b9c94] text-neutral-100'>
      <Navbar/>
      <LandingPage/>
      <Marquee/>
      <About/>
      <Playfull/>
    </div>
  )
}

export default App