import { ReactNode } from 'react'

function Main({children}: {children: ReactNode}) {
  return (
    <main className="">
      {children}
    </main>
  )
}

export default Main