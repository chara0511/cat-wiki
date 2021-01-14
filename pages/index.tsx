import { FC, useEffect } from 'react'
import { GetStaticProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Hero, Section } from '@components/ui'
import { BreedModel, Breeds, useViewsContext } from '@components/views/context'

const Home: FC<Breeds> = ({ breeds }) => {
  const { getBreeds } = useViewsContext()

  useEffect(() => {
    getBreeds(breeds)
  }, [])

  const first: BreedModel = breeds[10]
  const second = breeds[53]
  const third = breeds[45]
  const fourth = breeds[55]

  const fourBreeds: BreedModel[] = [first, second, third, fourth]

  return (
    <>
      <Hero>
        {fourBreeds.map((catBreed) => (
          <Link href={`/breeds/${catBreed.id}`} key={catBreed.id}>
            <a>
              <div>
                <Image
                  src={catBreed.image.url}
                  alt={`${catBreed.name} cat`}
                  width={220}
                  height={220}
                  objectFit="cover"
                  quality={50}
                />
                <h2>{catBreed.name}</h2>
              </div>
            </a>
          </Link>
        ))}
      </Hero>
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

  return { props: { breeds } }
}
