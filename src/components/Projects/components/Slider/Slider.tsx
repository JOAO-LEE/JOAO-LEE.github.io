import { projects } from '../../../../projects';

function Slider() {
  return (
    <div className='flex-1 w-full'>
    <h4 className='text-center'>see my recent work</h4>
    <div className='bg-yellow-300 w-full flex p-4 gap-7 justify-center'>
      {
        projects.map((project) => (
          <div key={project.id} className='flex gap-3.5 outline-4'>
            <img src={project.image} alt="" className='rounded-xl h-24 lg:h-40' />
            <h5>{project.name}</h5>
          </div>
        ))
      }
    </div>
  </div>
  )
}

export default Slider;