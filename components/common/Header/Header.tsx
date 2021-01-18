import Link from 'next/link'
import CatwikiLogo from 'public/CatwikiLogo'
import s from './Header.module.css'

const Header = () => {
  return (
    <header className={s.content}>
      <Link href="/">
        <a>
          <span>
            <CatwikiLogo />
          </span>
        </a>
      </Link>
    </header>
  )
}

export default Header
