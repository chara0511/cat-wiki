import Link from 'next/Link'
import Image from 'next/image'
import s from './Hero.module.css'

const Hero = () => {
  return (
    <div className={s.container}>
      <div>
        <Image
          className={s.heroBackground}
          src="/HeroImagesm.png"
          alt="Picture of the hero"
          width={375}
          height={180}
        />
        <p>Get to know more about your cat breed</p>
        <input type="text" placeholder="search" />
      </div>

      <div>
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
