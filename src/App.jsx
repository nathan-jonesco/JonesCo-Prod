import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import 'aos/dist/aos.css';
import './css/style.css';

import AOS from 'aos';


 // Import all of the pages here

import Home from './pages/Home';
import Contact from './pages/Contact';
import Services from './pages/Services'
import Privacy from './pages/Privacy';
import About from './pages/About';

import DragRacing from './pages/DragRacing'


import NotFound from './pages/PageNotFound'


function App() {

  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

 // Tell the website how to get to all of your pages here

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Contact" element={<Contact />} />
        <Route exact path="/Services" element={<Services />} />
        <Route exact path="/Privacy" element={<Privacy />} />
        <Route exact path="/AboutUs" element={<About />} />

        <Route exact path="/DragRacing" element={<DragRacing />} />


        <Route path='*' element={<NotFound />}/>
      </Routes>
    </>
  );
}

export default App;
