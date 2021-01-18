import { ArrowIcon } from '@components/icons'
import Image from 'next/image'
import s from './Section.module.scss'

const Section = () => {
  return (
    <div className={s.content}>
      <div className={s.body}>
        <h2>Why should you have a cat?</h2>
        <p>
          Having a cat around you can actually trigger the release of calming chemicals in your body
          which lower your stress and anxiety levels
        </p>
        <a
          href="https://www.helpguide.org/articles/healthy-living/joys-of-owning-a-cat.htm#:~:text=The%20health%20benefits%20of%20cats&text=They%20can%3A,and%20lower%20your%20blood%20pressure."
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Read More</span>{' '}
          <span>
            <ArrowIcon />
          </span>
        </a>
      </div>

      <div className={s.grid}>
        <div className={s.item1}>
          <Image src="/image 2.png" width={270} height={165} alt="Spoiled cat" />
        </div>
        <div className={s.item2}>
          <Image src="/image 3.png" width={260} height={380} alt="Cat in the bag" />
        </div>
        <div className={s.item3}>
          <Image src="/image 1.png" alt="Cat's claw" width={200} height={300} />
        </div>
      </div>
    </div>
  )
}

export default Section
