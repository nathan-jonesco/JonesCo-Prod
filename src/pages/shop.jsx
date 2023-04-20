import Head from 'next/head'
import Banner from '@/components/banner'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Contact from '@/components/contact'

export default function Home() {
  return (
    <>
      <Head>
        <title>Jones Co. || Shop</title>
        <meta
          name="description"
          content="Where your dream ride becomes reality."
        />
      </Head>
      <Banner />
      <Header />
      <main className="">
      <div id="my-store-86848754"></div>
<div>
<script data-cfasync="false" type="text/javascript" src="https://app.ecwid.com/script.js?86848754&data_platform=code&data_date=2023-04-20" charset="utf-8"></script><script type="text/javascript"> xProductBrowser("categoriesPerRow=3","views=grid(20,3) list(60) table(60)","categoryView=grid","searchView=list","id=my-store-86848754");</script>
</div>
      </main>
      <Footer />
    </>
  )
}
