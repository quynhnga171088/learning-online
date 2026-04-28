import { Outlet } from 'react-router-dom';

import './app.scss';
import About from 'app/pages/layout/about';
import Certifications from 'app/pages/layout/certifications';
import Contact from 'app/pages/layout/contact/contact.tsx';
import Education from 'app/pages/layout/education';
import Footer from 'app/pages/layout/footer';
import Hero from 'app/pages/layout/hero';
import Navbar from 'app/pages/layout/navbar/navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Certifications />
      <About />
      <Education />
      <Contact />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;