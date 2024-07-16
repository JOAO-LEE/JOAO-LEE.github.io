import { List, Sun, X } from "@phosphor-icons/react";
import { useRef, useState } from "react";

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
      <div ref={menuRef} className={`menu ${open ? "open" : "close"}  lg:hidden bg-white h-screen`}>
        <X className={`size-10 ${open ? "x-open" : "x-close"}`} onClick={openCloseMenu} />
        <nav className="menu-navigation">
          <li>GitHub</li>
          <li>Linkedin</li>
        </nav>
      </div>
      <header className="flex justify-between items-center text-white p-4">
        <List size={32} className="lg:hidden cursor-pointer" onClick={openCloseMenu} />
        <img
          src="src/assets/joaolee_logo-removebg-preview.png"
          alt="Logo João Lee"
          className="size-10 bg-slate-200 rounded-full lg:order-0 lg:size-14"
        />
        <nav className="hidden lg:flex list-none gap-5 w-fit uppercase">
          <li>Home</li>
          <li>GitHub</li>
          <li>Linkedin</li>
        </nav>
        <Sun className="cursor-pointer" size={32} />
      </header>
    </>
  );
}
