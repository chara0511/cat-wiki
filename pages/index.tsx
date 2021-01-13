import { FC, useEffect } from 'react'
import { GetStaticProps } from 'next'
import { Hero, Section } from '@components/ui'
import { BreedModel, Breeds, useViewsContext } from '@components/views/context'

const Home: FC<Breeds> = ({ breeds, fourBreeds }) => {
  const { getBreeds } = useViewsContext()

  useEffect(() => {
    getBreeds(breeds)
  }, [])

  return (
    <>
      <Hero fourBreeds={fourBreeds} />
      <Section />
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  // !const url = `${process.env.API_URL}/search?q=bengal`
  const breeds: BreedModel[] = await fetch(process.env.API_URL || '')
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => err)

  if (!breeds) {
    return { notFound: true }
  }

  // const randomInt = (random: number, min: number, max: number) =>
  //   Math.floor(random * (max - min) + min)

  const first = breeds[10]
  const second = breeds[53]
  const third = breeds[45]
  const fourth = breeds[55]

  return { props: { breeds, fourBreeds: [first, second, third, fourth] } }
}
