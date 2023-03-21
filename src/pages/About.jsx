import React from 'react';

import Header from '../partials/Univ-Nav';
import CTA from '../partials/CTA-Repairs';
import Contact from '../partials/Contact';
import Footer from '../partials/Univ-Footer';

import Info from '../partials/Info-About.jsx';


function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}

        <Info />
        <CTA />
        <Contact />

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Home;