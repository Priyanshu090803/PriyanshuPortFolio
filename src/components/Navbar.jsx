

const Navbar = () => {
  return (
    <div className=' md:px-10 px-4 py-2 items-center flex  z-[999] fixed w-full '>
      
      <div className='  rounded-full md:px-6 px-3 w-full flex justify-between overflow-hidden bg-background/90 shadow-sm shadow-neutral-400 backdrop-blur supports-[backdrop-filter]:bg-background/70 items-center py-2'>
      <div className=' md:w-28  overflow-hidden '>
       <h2 className=' italic -rotate-[10deg] font-plex md:text-2xl text-sm md:hover:scale-80 active:scale-80  transition-all text-neutral-700 border rounded-2xl  hover:opacity-70 cursor-pointer duration-800 delay-150'>Priyanshu</h2>
      </div>

      <div className=' links  font-plex items-center flex md:gap-8  gap-2 font-medium md:text-base  text-sm'>
        
        
        <a 
          className=' cursor-pointer md:text-lg text-xs hover:text-neutral-500 text-neutral-900 transition-all duration-600 ease-in-out  delay-100 hover:scale-95
          active:scale-95 md:hover:border-b-1 md:active:border-b-0 active:border-b '
        >Projects</a><a 
          className=' cursor-pointer md:text-lg text-xs hover:text-neutral-500 text-neutral-900 transition-all duration-600 ease-in-out  delay-100 hover:scale-95
          active:scale-95 hover:border-b-1 md:active:border-b-0 active:border-b '
        >Skills</a>
        <a 
          className=' cursor-pointer md:text-lg text-xs hover:text-neutral-500 text-neutral-900 transition-all duration-600 ease-in-out  delay-100 hover:scale-95
          active:scale-95 hover:border-b-1 md:active:border-b-0 active:border-b '
        >Contact</a>
      </div>
      </div>
    </div>
  )
}

export default Navbar