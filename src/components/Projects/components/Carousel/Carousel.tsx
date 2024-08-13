import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import { ReactNode, useState } from 'react';
import useIntersectionObserver from '../../../../hooks/useIntersectionObserver';
import './Carousel.css';

function Carousel({ children }: {children: ReactNode[] }) {
  const [curr, setCurr] = useState<number>(0);
  const [ref, isVisible] = useIntersectionObserver({threshold: 0.5});

  const previousSlide = () => setCurr(curr => curr == 0 ? children.length -1 : curr - 1);
  const nextSlide = () => setCurr(curr =>  curr === children.length - 1 ? 0 : curr + 1);

  return (
    <div 
    ref={ref} 
    className="max-w-[34rem]"
    >
      <div 
      className={`overflow-hidden relative size-56 md:size-80 2xl:w-[34rem] `}
      >
        <div 
        className='flex transition-transform ease-in-out duration-500' 
        style={{transform: `translateX(-${curr * 100}%)`}}
        >
          {children}
        </div>
        <div 
        className='absolute inset-0 flex items-center justify-between p-2.5'
        >
          <button 
          onClick={previousSlide}
          className='carousel-buttons group'>
            <CaretLeft  
            weight='thin' 
            className='carousel-arrows'
            />
          </button>
          <button 
          onClick={nextSlide}
          className='carousel-buttons group'>
            <CaretRight  
            weight='thin' 
            className='carousel-arrows'
            />
          </button>
        </div>
        <div 
        className='absolute bottom-4 right-0 left-0'
        >
          <div 
          className='flex items-center justify-center gap-2'>
            {
              children.map((_, i) => (
                <div 
                key={i}
                onClick={()=> setCurr(curr === i ? curr : i)} 
                className={`carousel-spy cursor-pointer ${curr === i ? "p-2 border-pal-orange-100" : "bg-opacity-50 border-pal-purple-300 hover:bg-pal-purple-300"}`} 
                />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carousel;
