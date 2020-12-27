import { BreedsView } from '@components/views'
import { Breeds } from 'pages'

const BreedsPage = ({ breeds }: Breeds) => {
  return <BreedsView breeds={breeds} />
}

export default BreedsPage

export const getStaticProps = async () => {
  const breeds = await fetch('https://api.thecatapi.com/v1/breeds')
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => err)

  if (!breeds) {
    return { notFound: true }
  }

  return {
    props: { breeds },
  }
}
