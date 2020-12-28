import dynamic from 'next/dynamic'
import { Breeds, useViewsContext } from '@components/views/context'

const DynamicBreedsViewWithNoSSR = dynamic(() => import('@components/views/Breeds'), {
  ssr: false,
})

const BreedsPage = () => {
  const { breeds }: Breeds = useViewsContext()

  return <DynamicBreedsViewWithNoSSR breeds={breeds} />
}

export default BreedsPage
