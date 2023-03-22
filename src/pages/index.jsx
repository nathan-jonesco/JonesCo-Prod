import Head from 'next/head'

import Landing from '@/components/Landing'


export default function Home() {
  return (
    <>
      <Head>
        <title>Jones Co. Automotive</title>
        <meta
          name="description"
          content="Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited."
        />
      </Head>
      <main>
        <Landing />
      </main>
    </>
  )
}
