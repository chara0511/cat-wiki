import { Header, Footer } from '@components/common'
import { FC } from 'react'
import s from './Layout.module.css'

const Layout: FC = ({ children }) => {
  return (
    <>
      <Header />

      <main className={s.content}>{children}</main>

      <Footer />
    </>
  )
}

export default Layout
