import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { ReactNode, useContext, useEffect } from "react";
import useIntersectionObserver from "../../../../hooks/useIntersectionObserver";
import "./Carousel.css";
import { ProjectContext } from "../../../../context/Project/ProjectContext";

function Carousel({ children }: { children: ReactNode[] }) {
  const [ref] = useIntersectionObserver({ threshold: 0.5 });
  const { curr = 0, setCurr, previousSlide, nextSlide } = useContext(ProjectContext);
  
  return (
    <div 
    ref={ref} 
    className=""
    >
      <div 
      className={`overflow-hidden relative size-64 md:size-[32rem]`}
      >
        <div 
        className="flex transition-transform ease-in-out duration-500" 
        style={{transform: `translateX(-${curr * 100}%)`}}
        >
          {children}
        </div>
        <div 
        className="absolute inset-0 flex items-center justify-between p-2.5"
        >
          <button 
          onClick={previousSlide}
          className="carousel-buttons group"
          >
            <CaretLeft  
            weight="thin" 
            className="carousel-arrows"
            />
          </button>
          <button 
          onClick={nextSlide}
          className="carousel-buttons group"
          >
            <CaretRight  
            weight="thin" 
            className="carousel-arrows"
            />
          </button>
        </div>
        <div 
        className="absolute bottom-4 right-0 left-0"
        >
          <div 
          className="flex items-center justify-center gap-2"
          >
            {
              children.map((_, i) => (
                <div 
                key={i}
                onClick={()=> setCurr(curr === i ? curr : i)} 
                className={`carousel-spy cursor-pointer ${curr === i ? "p-1.5 md:p-2 border-pal-orange-100" : "bg-opacity-50 border-pal-purple-300 hover:bg-pal-purple-300"}`} 
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
