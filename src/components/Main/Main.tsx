import { ReactNode } from 'react';

function Main({children}: {children: ReactNode}) {
  return (
    <main className="main-content">
      {children}
    </main>
  )
}

export default Main