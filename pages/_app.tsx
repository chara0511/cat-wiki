import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ManagedViewsContext } from '@components/views/context'
import { Layout } from '@components/common'
import '@styles/index.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>CatWiki</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ManagedViewsContext>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ManagedViewsContext>
    </>
  )
}

export default MyApp
