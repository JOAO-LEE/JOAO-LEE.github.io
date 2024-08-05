import { List, Sun, X } from "@phosphor-icons/react";
import { useRef, useState } from "react";
import "./Header.css";

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
      <div ref={menuRef} className={`menu ${open ? "open" : "close"} lg:hidden h-dvh backdrop-blur-xl text-white w-full `}>
        <X className={`size-10 ${open ? "x-open" : "x-close"}`} onClick={openCloseMenu} />
        <nav className="menu-navigation uppercase">
          <li className={`nav-item ${open ? "nav-item-fade" : ""}`}>GitHub</li>
          <li className={`nav-item ${open ? "nav-item-fade" : ""}`}>Linkedin</li>
        </nav>
      </div>
      <header className="flex justify-between items-center p-4 sticky top-0 bg-transparent">
        <List size={32} className="lg:hidden cursor-pointer hamb-menu" onClick={openCloseMenu} />
        <nav  className="navigation-links">
          <li className="nav-item glow-item">Home</li>
          <li className="nav-item glow-item">GitHub</li>
          <li className="nav-item glow-item">Linkedin</li>
        </nav>
        <Sun 
        className={`cursor-pointer hover:scale-110 duration-500 test-animation ${open && "static"} theme-switch`} 
        size={32} />
      </header>
    </>
  );
}
