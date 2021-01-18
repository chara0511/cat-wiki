import Link from 'next/link'
import CatwikiLogo from 'public/CatwikiLogo'
import s from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={s.content}>
      <Link href="/">
        <a>
          <span>
            <CatwikiLogo />
          </span>
        </a>
      </Link>

      <p>Coded by Chara- 2020</p>
    </footer>
  )
}

export default Footer
