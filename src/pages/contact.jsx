import Head from 'next/head'

import CTAA from '@/components/CTA-A'
import CTAB from '@/components/CTA-B'
import CTAC from '@/components/CTA-C'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import ProcessPlan from '@/components/ProcessPlan'
import Specialties from '@/components/Specialties'
import RacePrep from '@/components/RacePrep'
import Parts from '@/components/Parts'

export default function Home() {
  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta
          name="description"
          content="Where your dream ride becomes reality."
        />
      </Head>
      <Header />
      <main className="">
        <Contact />
      </main>
      <Footer />
    </>
  )
}
