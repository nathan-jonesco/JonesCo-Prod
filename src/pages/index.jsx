import Head from 'next/head'

import Landing from '@/components/Landing'

import mobile from '@/components/mobilelanding.jsx'



export default function Home() {
  return (
    <>
      <Head>
        <title>Jones Co. Automotive</title>
        <meta
          name="description"
          content="Bringing Innovation into the Automotive Industry."
        />
      </Head>
      <main>
        <Landing />
        <mobile />
      </main>
    </>
  )
}
