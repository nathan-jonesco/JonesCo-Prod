import Head from 'next/head'

import Landing from '@/components/Landing'


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
      </main>
    </>
  )
}
