import Head from 'next/head'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Contact from '@/components/contact'
import Banner from '@/components/banner'
export default function Home() {
  return (
    <>
      <Head>
        <title>Jones Co. Perfomance || Finance</title>
        <meta
          name="description"
          content="Where your dream ride becomes reality."
        />
      </Head>
      <Banner />
      <Header />
      <main className="">
        <Contact />
      </main>
      <Footer />
    </>
  )
}
