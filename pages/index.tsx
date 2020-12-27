import { FC } from 'react'
import { GetStaticProps } from 'next'
import { Hero, Section } from '@components/ui'

export interface BreedsModel {
  id: string
  image: { url: string }
  name: string
  // eslint-disable-next-line camelcase
  alt_names: string
}

interface Breeds {
  fourRandom: BreedsModel[]
}

const Home: FC<Breeds> = ({ fourRandom }) => {
  return (
    <>
      <Hero fourRandom={fourRandom} />
      <Section />
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const data: BreedsModel[] = await fetch('https://api.thecatapi.com/v1/breeds')
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => err)

  if (!data) {
    return { notFound: true }
  }

  const randomInt = (random: number, min: number, max: number) =>
    Math.floor(random * (max - min) + min)

  const first = data[randomInt(Math.random(), 0, 67)]
  const second = data[randomInt(Math.random(), 0, 67)]
  const third = data[randomInt(Math.random(), 0, 67)]
  const fourth = data[randomInt(Math.random(), 0, 67)]

  return { props: { fourRandom: [first, second, third, fourth] } }
}
