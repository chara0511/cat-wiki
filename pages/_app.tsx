import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Layout } from '@components/common'
import '@styles/index.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>CatWiki</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
