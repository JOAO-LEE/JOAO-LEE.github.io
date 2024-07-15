import { List, Sun } from "@phosphor-icons/react";

export function Header() {
  return (
    <header className="text-white p-2 flex justify-between items-center">
      <div>
        <img src="" alt="" />
      </div>
      <nav className="hidden md:flex list-none gap-5">
        <li>Home</li>
        <li>GitHub</li>
        <li>Linkedin</li>
      </nav>
      <List size={32} className="md:hidden"/>
      <div>
        <Sun />
      </div>
    </header>
  )
}

// list-none flex gap-5 p-2 border rounded-xl border-slate-500 md:border-none