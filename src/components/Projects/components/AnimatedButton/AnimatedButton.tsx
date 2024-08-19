import { useState, useRef, ReactNode } from "react";

function AnimatedButton({ icon, title }: { icon: ReactNode, title: string }) {
  const [hovered, setHovered] = useState<boolean>(false);
  const buttonRef = useRef<HTMLSpanElement>(null);
  return (
    <a
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)} 
    href="" 
    className='p-2 flex items-center rounded-lg text-grayish bg-pal-orange-100 w-min'>
      <div className='text-3xl'>
        {icon}
      </div>
      <div
      style={{width: hovered ? buttonRef.current?.offsetWidth || 0 : 0}} 
      className='overflow-x-hidden transition-all duration-300 ease-out'>
        <span ref={buttonRef} className='px-1.5'>{title}</span>
      </div>
    </a>
  )
}

export default AnimatedButton