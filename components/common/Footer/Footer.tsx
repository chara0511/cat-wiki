import Link from 'next/link'
import CatwikiLogo from 'public/CatwikiLogo'
import s from './Footer.module.css'

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

      <p>Chara- devchallenges.io 2020</p>
    </footer>
  )
}

export default Footer
