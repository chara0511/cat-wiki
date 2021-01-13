import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { BreedModel } from '@components/views/context'
import CatwikiLogo from 'public/CatwikiLogo'
import { ArrowIcon } from '@components/icons'
import { SearchBar } from '@components/common'
import s from './Hero.module.scss'

interface Props {
  fourBreeds: BreedModel[]
}

const Hero: FC<Props> = ({ fourBreeds }) => {
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

        <div className={s.grid}>
          {fourBreeds.map((catBreed) => (
            <Link href={`/breeds/${catBreed.id}`} key={catBreed.id}>
              <a>
                <div>
                  <Image
                    src={catBreed.image.url}
                    alt={catBreed.alt_names}
                    width={220}
                    height={220}
                    className={s.rounded}
                    objectFit="cover"
                    quality={50}
                  />
                  <h2>{catBreed.name}</h2>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Hero
