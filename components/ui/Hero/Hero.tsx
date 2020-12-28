import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { BreedModel } from '@components/views/context'
import CatwikiLogo from 'public/CatwikiLogo'
import s from './Hero.module.scss'

interface Props {
  fourBreeds: BreedModel[]
}

const Hero: FC<Props> = ({ fourBreeds }) => {
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
        <Link href="/breeds/popular">
          <a>Most Searched Breeds</a>
        </Link>

        <h1>66+ Breeds For you to discover</h1>

        <div className={s.grid}>
          {fourBreeds.map((catBreed) => (
            <div key={catBreed.id}>
              <Image
                src={catBreed.image.url}
                alt={catBreed.alt_names}
                width={135}
                height={135}
                className={s.rounded}
                objectFit="cover"
                quality={50}
              />
              <h2>{catBreed.name}</h2>
            </div>
          ))}
        </div>

        <Link href="/breeds">
          <a>See more</a>
        </Link>
      </div>
    </div>
  )
}

export default Hero
