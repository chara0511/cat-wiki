import { FC } from 'react'
import { BreedView } from '@components/views'
import { BreedModel, Breeds } from '@components/views/context'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'

export const getStaticPaths: GetStaticPaths = async () => {
  const breeds: BreedModel[] = await fetch(process.env.API_URL || '')
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
  fetch(`${process.env.API_URL}` || '')
  const breed = await fetch(`${process.env.API_URL_SEARCH}${params!.id}`)
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

const BreedPage: FC<Breeds> = ({ breed }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <BreedView breed={breed} />
}

export default BreedPage
