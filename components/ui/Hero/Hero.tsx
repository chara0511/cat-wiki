import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CatwikiLogo from 'public/CatwikiLogo'
import { ArrowIcon } from '@components/icons'
import { SearchBar } from '@components/common'
import s from './Hero.module.scss'

const Hero: FC = ({ children }) => {
  return (
    <div className={s.content}>
      <div className={s.header}>
        <div className={s.headerImage}>
          <Image
            className={s.headerImageBg}
            src="/HeroImagemd.png"
            alt="Picture of the hero"
            width={1280}
            height={540}
          />
        </div>

        <div className={s.headerContent}>
          <span className={s.logo}>
            <CatwikiLogo />
          </span>

          <p className={s.description}>Get to know more about your cat breed</p>

          <SearchBar />
        </div>
      </div>

      <div className={s.body}>
        <h1 className={s.subTitle}>Most Searched Breeds </h1>

        <h2 className={s.title}>66+ Breeds For you to discover</h2>

        <Link href="/breeds">
          <a className={s.breedsLink}>
            <span>see more</span>{' '}
            <span>
              <ArrowIcon />
            </span>
          </a>
        </Link>

        <div className={s.grid}>{children}</div>
      </div>
    </div>
  )
}

export default Hero
