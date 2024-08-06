import { CaretLeft, CaretRight, Circle, CircleDashed } from '@phosphor-icons/react';
import './Carousel.css';
import { ReactNode, useState } from 'react';

function Carousel({children}: {children: ReactNode[]}) {
  const [curr, setCurr] = useState<number>(0);

  const previousSlide = () => setCurr(curr => curr == 0 ? children.length -1 : curr - 1)
  const nextSlide = () => setCurr(curr =>  curr === children.length - 1 ? 0 : curr + 1)

  return (
    <div className='max-w-md hidden lg:block'>
      <div className='overflow-hidden relative'>
        <div className='flex transition-transform ease-in-out duration-500' style={{transform: `translateX(-${curr * 100}%)`}}>{children}</div>
        <div className='absolute inset-0 flex items-center justify-between p-4'>
          <button 
          onClick={previousSlide}
          className='carousel-buttons group'>
            <CaretLeft 
            size={32} 
            weight='thin' 
            className='carousel-arrows'
            />
          </button>
          <button 
          onClick={nextSlide}
          className='carousel-buttons group'>
            <CaretRight  
            size={32}
            weight='thin' 
            className='carousel-arrows'
            />
          </button>
        </div>
        <div className='absolute bottom-4 right-0 left-0'>
          <div className='flex items-center justify-center gap-2'>
            {
              children.map((_, i) => (
                <div className={`transition-all duration-500 border size-2 shadow-lg rounded-full ${curr === i ? "p-2 border-orangeish" : "bg-opacity-50 border-dark-lilac"}`} />
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}

export default Carousel;
