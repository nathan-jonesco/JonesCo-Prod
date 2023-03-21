import React from 'react';

import Header from '../partials/Univ-Nav';
import HelpFlow from '../partials/Home-Hero';
import CTAA from '../partials/CTA-Repairs';
import CTAB from '../partials/CTA-Speed';
import CTAC from '../partials/CTA-Offroad';
import StandardServices from '../partials/Snippet-StandardServices';
import ModificationServices from '../partials/Snippet-ModificationServices';
import Contact from '../partials/Contact';
import Footer from '../partials/Univ-Footer';
import Banner from '../pages/Banner'

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}

        <Contact />

      </main>

      {/*  Site footer */}
      <Footer />

{/*  <Banner/>  */}

    </div>
  );
}

export default Home;