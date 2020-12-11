import Head from 'next/head'
import { Footer, Header } from '@components/common'
import { Hero, Section } from '@components/ui'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CatWiki</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <Hero />
        <Section />
      </main>

      <Footer />
    </div>
  )
}
