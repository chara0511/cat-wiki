import { BreedsView } from '@components/views'
import { Breeds, useViewsContext } from '@components/views/context'

const BreedsPage = () => {
  const { breeds }: Breeds = useViewsContext()

  return <BreedsView breeds={breeds} />
}

export default BreedsPage
