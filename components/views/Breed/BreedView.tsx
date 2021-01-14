import { FC } from 'react'
import Image from 'next/image'
import { Score } from '@components/common'
import { Breed, BreedModel, Breeds } from '../context'
import s from './BreedView.module.scss'

interface Props {
  breed: Breeds | any
}

const BreedView: FC<Props> = ({ breed }) => {
  const { breeds, url }: Breed = breed[0]

  return (
    <div className={s.content}>
      <div className={s.body}>
        <div className={s.bodyImage}>
          <Image
            src={url}
            width={375}
            height={375}
            quality={50}
            alt="Breed cat"
            objectFit="cover"
            className={s.rounded}
          />
        </div>

        <div className={s.bodyDescription}>
          {breeds.map((catBreed) => (
            <div key={catBreed.id}>
              <h1>{catBreed.name}</h1>
              <p>{catBreed.description}</p>

              <div className={s.skill}>
                <span>Temperament: </span>
                <p>{catBreed.temperament}</p>
              </div>

              <div className={s.skill}>
                <span>Origin: </span>
                <p>{catBreed.origin}</p>
              </div>

              <div className={s.skill}>
                <span>Life Span: </span>
                <p>{catBreed.life_span} years</p>
              </div>

              <div className={s.skill}>
                <span>Adaptability:</span>
                <Score currentScore={catBreed.adaptability} />
              </div>

              <div className={s.skill}>
                <span>Affection Level:</span>
                <Score currentScore={catBreed.affection_level} />
              </div>

              <div className={s.skill}>
                <span>Child Friendly:</span>
                <Score currentScore={catBreed.child_friendly} />
              </div>

              <div className={s.skill}>
                <span>Grooming:</span>
                <Score currentScore={catBreed.grooming} />
              </div>

              <div className={s.skill}>
                <span>Intelligence:</span>
                <Score currentScore={catBreed.intelligence} />
              </div>

              <div className={s.skill}>
                <span>Health issues:</span>
                <Score currentScore={catBreed.health_issues} />
              </div>

              <div className={s.skill}>
                <span>Social needs:</span>
                <Score currentScore={catBreed.social_needs} />
              </div>

              <div className={s.skill}>
                <span>Stranger friendly:</span>
                <Score currentScore={catBreed.stranger_friendly} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={s.footer}>
        <h2>Other Photos</h2>
        {/* 278x278 */}

        <div className={s.footerPhotos}>
          {breed.slice(1).map((b: BreedModel) => (
            <div key={b.id}>
              <Image
                src={b.url}
                width={280}
                height={280}
                quality={50}
                alt="Breed cat"
                objectFit="cover"
                className={s.rounded}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BreedView
