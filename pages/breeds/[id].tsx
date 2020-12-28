import { FC } from 'react'
import { BreedView } from '@components/views'
import { BreedModel, Breeds } from '@components/views/context'
import { GetStaticPaths, GetStaticProps } from 'next'

const BreedPage: FC<Breeds> = ({ breed }) => {
  return <BreedView breed={breed} />
}

export default BreedPage

export const getStaticPaths: GetStaticPaths = async () => {
  const breeds: BreedModel[] = await fetch('https://api.thecatapi.com/v1/breeds')
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => err)

  const paths = breeds.map((breed) => ({ params: { id: breed.id } }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const breed = await fetch(
    `https://api.thecatapi.com/v1/images/search?limit=6&breed_ids=${params!.id}`,
  )
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => err)

  if (!breed) {
    return { notFound: true }
  }

  return {
    props: { breed },
  }
}
