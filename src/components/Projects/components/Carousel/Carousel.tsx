import { CaretLeft, CaretRight, Circle, CircleDashed } from '@phosphor-icons/react';
import './Carousel.css';
import { ReactNode, useState } from 'react';
import useIntersectionObserver from '../../../../hooks/useIntersectionObserver';

function Carousel({children}: {children: ReactNode[]}) {
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
        className='absolute inset-0 flex items-center justify-between p-4'>
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
                className={`carousel-spy ${curr === i ? "p-2 border-orangeish" : "bg-opacity-50 border-dark-lilac"}`} 
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
