import { ReactNode } from 'react'

function Main({children}: {children: ReactNode}) {
  return (
    <main className="p-6">
      {children}
    </main>
  )
}

export default Main