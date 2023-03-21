import React from 'react';

import Header from '../partials/Univ-Nav';
import Info from '../partials/Info-DragRacing.jsx';
import CTAB from '../partials/CTA-Speed';
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
        <Info />
        <CTAB />
        <Contact />

      </main>

      {/*  Site footer */}
      <Footer />

{/*  <Banner/>  */}

    </div>
  );
}

export default Home;