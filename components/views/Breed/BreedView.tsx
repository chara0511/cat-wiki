import { FC } from 'react'
import { Breed } from '../context'

interface Props {
  breed: Breed
}

const BreedView: FC<Props> = ({ breed }) => {
  return (
    <div>
      <div>
        <div>
          <img style={{ width: '300px' }} src={breed.url} alt="" />
        </div>
        {breed.breeds.map((catBreed) => (
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
        <div>
          <div>image1</div>
          <div>image2</div>
          <div>image3</div>
          <div>image4</div>
          <div>image5</div>
          <div>image6</div>
        </div>
      </div>
    </div>
  )
}

export default BreedView
