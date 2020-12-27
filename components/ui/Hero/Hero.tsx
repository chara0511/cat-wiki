import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { BreedsModel } from 'pages'
import CatwikiLogo from 'public/CatwikiLogo'
import s from './Hero.module.scss'

interface Props {
  fourRandom: BreedsModel[]
}

const Hero: FC<Props> = ({ fourRandom }) => {
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

        <div className={s.grid}>
          {fourRandom.map((cat) => (
            <div key={cat.id}>
              <Image
                src={cat.image.url}
                alt={cat.alt_names}
                width={135}
                height={135}
                className={s.rounded}
                objectFit="cover"
              />
              <h2>{cat.name}</h2>
            </div>
          ))}
        </div>

        <Link href="/breeds/popular">
          <a>see more</a>
        </Link>
      </div>
    </div>
  )
}

export default Hero
