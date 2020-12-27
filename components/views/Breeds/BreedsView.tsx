import { FC } from 'react'
import Link from 'next/link'
import { BreedModel } from 'pages'

interface Props {
  breeds: BreedModel[]
}

const BreedsView: FC<Props> = ({ breeds }) => {
  return (
    <div>
      <h1>List the Cat Breeds</h1>

      <div>
        {breeds.map((catBreed, i: number) => (
          <div key={catBreed.id}>
            <Link href={`/breeds/${catBreed.id}`}>
              <a>
                <h2>
                  {i + 1}. {catBreed.name}
                </h2>
              </a>
            </Link>

            <p>{catBreed.description}</p>
          </div>
        ))}

        <div>image</div>
      </div>
    </div>
  )
}

export default BreedsView
