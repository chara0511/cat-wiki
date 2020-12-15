import Link from 'next/Link'
import Image from 'next/image'
import CatwikiLogo from 'public/CatwikiLogo'
import s from './Hero.module.scss'

const Hero = () => {
  return (
    <div className={s.content}>
      <div className={s.header}>
        <Image
          className={s.headerBackground}
          src="/HeroImagesm.png"
          alt="Picture of the hero"
          width={375}
          height={180}
        />

        <div className={s.headerContent}>
          <span>
            <CatwikiLogo />
          </span>

          <p>Get to know more about your cat breed</p>

          <div>
            <input type="text" placeholder="Search" />
            <span>i</span>
          </div>
        </div>
      </div>

      <div className={s.body}>
        <span>Most Searched Breeds</span>
        <h1>66+ Breeds For you to discover</h1>
        <Link href="/breeds/popular">
          <a>see more</a>
        </Link>
      </div>
    </div>
  )
}

export default Hero
