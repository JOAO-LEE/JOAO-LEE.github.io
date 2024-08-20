import { ReactNode } from "react";
import "./Main.css";

function Main({ children }: { children: ReactNode }) {
  return (
    <main className="main-content">
      {children}
    </main>
  )
}

export default Main