import { List, Sun, X } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";
import './Header.css';

export function Header() {
  const [open, setOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const openCloseMenu = () => {
    setOpen(prevState => !prevState);
    if (menuRef.current) {
      if (open) {
        menuRef.current.classList.remove("open");
        menuRef.current.classList.add("close");
      } else {
        menuRef.current.classList.remove("close");
        menuRef.current.classList.add("open");
      }
    }
  };

  return (
    <>
      {/* <div ref={menuRef} className={`menu ${open ? "open" : "close"} lg:hidden h-dvh backdrop-blur-xl text-white w-full`}>
        <X className={`size-10 ${open ? "x-open" : "x-close"}`} onClick={openCloseMenu} />
        <nav className="menu-navigation uppercase">
          <li className="nav-item">GitHub</li>
          <li className="nav-item">Linkedin</li>
        </nav>
      </div> */}
      <header className="flex justify-between items-center text-white p-4">
        <List size={32} className="lg:hidden cursor-pointer hamb-menu" onClick={openCloseMenu} />
        <img
          src="src/assets/joaolee_logo-removebg-preview.png"
          alt="Logo João Lee"
          className="size-10 bg-slate-200 rounded-full lg:order-0 lg:size-14 joaolee-logo"
        />
        <nav  className="navigation-links">
          <li className="nav-item glow-item">Home</li>
          <li className="nav-item glow-item">GitHub</li>
          <li className="nav-item glow-item">Linkedin</li>
        </nav>
        <Sun 
        className={`cursor-pointer hover:scale-110 duration-500 hover:animate-spin test-animation ${open && "static"} theme-switch`} 
        size={32} />
      </header>
    </>
  );
}
