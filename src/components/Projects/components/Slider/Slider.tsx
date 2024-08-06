import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import { projects } from '../../../../projects';

function Slider() {
  return (
    <div className='bg-lilac w-[60%] grow'>
      <h4 className=''>see my recent work</h4>
      <div className='flex  justify-between h-full'>
        <button>
          <CaretLeft />
        </button>
        <img 
          src={projects[0].image} 
          alt="" 
          // key={projects[0].id 
          className='object-contain' 
        />
        <button>
          <CaretRight />
        </button>
      </div>
  </div>
  )
}

export default Slider;

{/* <div className='overflow-hidden relative'>
        <div className='flex '>
        
        <div className="flex">
          {
            projects.map((project) => (
             
            ))
          }
        </div>
        
        </div>
        {/* <div className='absolute top-0 flex items-center justify-between h-full w-full'>
          <button><CaretLeft /></button>
          
        // </div> */}
      // </div> */}