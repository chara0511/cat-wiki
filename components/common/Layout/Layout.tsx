import { Header, Footer } from '@components/common'
import { FC } from 'react'
import s from './Layout.module.scss'

const Layout: FC = ({ children }) => {
  return (
    <div className={s.mainContainer}>
      <Header />

      <main className={s.container}>{children}</main>

      <Footer />
    </div>
  )
}

export default Layout
