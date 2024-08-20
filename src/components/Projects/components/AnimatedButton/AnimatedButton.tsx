import { useState, useRef, ReactNode } from "react";

function AnimatedButton({ icon, title, link }: { icon: ReactNode, title: string, link: string }) {
  const [hovered, setHovered] = useState<boolean>(false);
  const buttonRef = useRef<HTMLSpanElement>(null);
  return (
    <a
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)} 
    href={link}
    target="_blank" 
    className='p-2 flex items-center rounded-lg text-grayish bg-pal-orange-100 group'>
      <div className='flex items-center gap-2 2xl:block text-3xl group-hover:text-pal-purple-400'>
        {icon}
        <span className="text-xs xl:hidden">{title}</span>
      </div>
      <div
      style={{width: hovered ? buttonRef.current?.offsetWidth || 0 : 0}} 
      className='overflow-x-hidden transition-all duration-300 ease-out'>
        <span 
        ref={buttonRef} 
        className='hidden xl:inline px-1.5 group-hover:text-pal-purple-300'>
          {title}
        </span>
      </div>
    </a>
  )
}

export default AnimatedButton