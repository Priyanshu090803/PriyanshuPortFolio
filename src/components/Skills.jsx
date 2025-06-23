import CircularGallery from './ui/CircularGallery';
        

const Skills = () => {

  return (
    <div className='  h-full  w-full  overflow-hidden px-8'>
      <div className=' flex items-center justify-center'>
        <h2 className=' text-8xl text-black font-bold uppercase'>Skills</h2>
        
</div>
<div
className=' h-full w-full'
style={{ height: '530px', position: 'relative' }}>
  <CircularGallery bend={2} textColor="#ffffff" borderRadius={0.1} />
</div>

    </div>
  )
}

export default Skills