import About from 'app/pages/layout/about';
import Certifications from 'app/pages/layout/certifications';
import Contact from 'app/pages/layout/contact/contact.tsx';
import Education from 'app/pages/layout/education';
import Hero from 'app/pages/layout/hero/hero.tsx';

const Author = () => {
  return (
    <div className="container">
      <Certifications />
      <About />
      <Education />
      <Contact />
      <Hero />
    </div>);
};

export default Author;