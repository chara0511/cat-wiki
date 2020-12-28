import { FC } from 'react'
import Image from 'next/image'
import { Breed, BreedModel, Breeds } from '../context'

interface Props {
  breed: Breeds | any
}

const BreedView: FC<Props> = ({ breed }) => {
  const { breeds, url }: Breed = breed[0]

  return (
    <div>
      <div>
        <div>
          <Image
            src={url}
            alt="Breed cat"
            width={375}
            height={375}
            objectFit="contain"
            quality={50}
          />
        </div>
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

      <div>
        <h2>Other Photos</h2>
        {/* 278x278 */}

        {breed.map((b: BreedModel) => (
          <div key={b.id}>
            <Image
              src={b.url}
              alt="Breed cat"
              width={280}
              height={280}
              objectFit="contain"
              quality={50}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default BreedView
