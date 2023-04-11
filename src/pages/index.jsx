import Head from 'next/head'

import  CTAA  from '@/components/CTA-A'
import  CTAB  from '@/components/CTA-B'
import  CTAC  from '@/components/CTA-C'
import  CTAD  from '@/components/CTA-D'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProcessPlan from '@/components/ProcessPlan'
import Specialties from '@/components/Specialties'
import RacePrep from '@/components/RacePrep'
import Parts from '@/components/Parts'
import Finance from '@/components/financing'

export default function Home() {
  return (
    <>
      <Head>
        <title>Jones Co. Performance</title>
        <meta
          name="description"
          content="Where your dream ride becomes reality."
        />
      </Head>
      <Header />
      <main className=''>
        <Hero />
        <ProcessPlan />
        <CTAA />
        <Specialties/>
        <CTAB />
        <RacePrep/>
        <CTAC />
        <Parts />
        <CTAD />
        <Finance />
      </main>
      <Footer />
    </>
  )
}
