import { FC } from 'react'
import { GetStaticProps } from 'next'
import { Hero, Section } from '@components/ui'

export interface BreedModel {
  // eslint-disable-next-line camelcase
  alt_names: string
  description: string
  id: string
  image: { url: string }
  name: string
}

export interface Breeds {
  fourBreeds: BreedModel[]
  breeds: BreedModel[]
}

const Home: FC<Breeds> = ({ fourBreeds }) => {
  return (
    <>
      <Hero fourBreeds={fourBreeds} />
      <Section />
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const breeds: BreedModel[] = await fetch('https://api.thecatapi.com/v1/breeds')
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => err)

  if (!breeds) {
    return { notFound: true }
  }

  const randomInt = (random: number, min: number, max: number) =>
    Math.floor(random * (max - min) + min)

  const first = breeds[randomInt(Math.random(), 0, 67)]
  const second = breeds[randomInt(Math.random(), 0, 67)]
  const third = breeds[randomInt(Math.random(), 0, 67)]
  const fourth = breeds[randomInt(Math.random(), 0, 67)]

  return { props: { fourBreeds: [first, second, third, fourth] } }
}
