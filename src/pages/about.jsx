import Head from 'next/head'
import Banner from '@/components/banner'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Contact from '@/components/contact'

export default function Home() {
  return (
    <>
      <Head>
        <title>Jones Co. || About Us</title>
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
