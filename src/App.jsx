import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'

const App = () => {
  return (
    <div className=' w-full h-full bg-black text-neutral-100'>
      <Navbar/>
      <LandingPage/>
    </div>
  )
}

export default App