import Head from 'next/head'

import  CallToAction  from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProcessPlan from '@/components/ProcessPlan'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'

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
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}
