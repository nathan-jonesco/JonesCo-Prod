import React from 'react';

import Header from '../partials/Univ-Nav';
import Info from '../partials/Info-Services.jsx';
import CTAB from '../partials/CTA-Repairs.jsx';
import CTASpeed from '../partials/CTA-Speed.jsx';
import Contact from '../partials/Contact';
import Footer from '../partials/Univ-Footer';

import StandardServices from '../partials/Snippet-StandardServices';
import ModificationServices from '../partials/Snippet-ModificationServices';

import Banner from './Banner'

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}

        <ModificationServices /> 
        <Info />
        <CTASpeed />
        <Contact />

      </main>

      {/*  Site footer */}
      <Footer />

{/*  <Banner/>  */}

    </div>
  );
}

export default Home;