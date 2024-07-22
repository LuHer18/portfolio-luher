import { PropsWithChildren } from "react"
import LayoutStyle from './Layout.module.css'

export const Layout = ({children}: PropsWithChildren) => {
  return (
    <main className={LayoutStyle.container}>
        {children}
    </main>
  )
}
