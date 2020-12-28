import { FC } from 'react'
import Link from 'next/link'
import { BreedModel } from '../context'
import s from './BreedsView.module.scss'

interface Props {
  breeds: BreedModel[]
}

const BreedsView: FC<Props> = ({ breeds }) => {
  return (
    <div className={s.content}>
      <h1>List the Cat Breeds</h1>

      <div className={s.grid}>
        {breeds.map((catBreed, i: number) => (
          <div key={catBreed.id}>
            <Link href={`/breeds/${catBreed.id}`}>
              <a>
                <h2>
                  {i + 1}. {catBreed.name}
                </h2>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BreedsView
