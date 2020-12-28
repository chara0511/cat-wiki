import { FC } from 'react'
import Image from 'next/image'
import { Breed, BreedModel, Breeds } from '../context'
import s from './BreedView.module.scss'

interface Props {
  breed: Breeds | any
}

// ! try to remove first array element
const BreedView: FC<Props> = ({ breed }) => {
  const { breeds, url }: Breed = breed[0]

  return (
    <div className={s.content}>
      <div className={s.body}>
        <div className={s.bodyImage}>
          <Image
            src={url}
            width={320}
            height={320}
            quality={50}
            alt="Breed cat"
            objectFit="contain"
            className={s.rounded}
          />
        </div>

        <div className={s.bodyDescription}>
          {breeds.map((catBreed) => (
            <div key={catBreed.id}>
              <h1>{catBreed.name}</h1>
              <p>{catBreed.description}</p>

              <div>
                <h2>skills</h2>
                <div>
                  <span>Temperament: </span>
                  <p>{catBreed.temperament}</p>
                  <span>Origin: </span>
                  <p>{catBreed.origin}</p>
                  <span>Life Span: </span>
                  <p>{catBreed.life_span} years</p>
                  <span>Adaptability:</span>
                  <div>{catBreed.adaptability}</div>
                  <span>Affection Level:</span>
                  <div>{catBreed.affection_level}</div>
                  <span>Child Friendly:</span>
                  <div>{catBreed.child_friendly}</div>
                  <span>Grooming:</span>
                  <div>{catBreed.grooming}</div>
                  <span>Intelligence:</span>
                  <div>{catBreed.intelligence}</div>
                  <span>Health issues:</span>
                  <div>{catBreed.health_issues}</div>
                  <span>Social needs:</span>
                  <div>{catBreed.social_needs}</div>
                  <span>Stranger friendly:</span>
                  <div>{catBreed.stranger_friendly}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={s.footer}>
        <h2>Other Photos</h2>
        {/* 278x278 */}

        <div className={s.footerPhotos}>
          {breed.map((b: BreedModel) => (
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
