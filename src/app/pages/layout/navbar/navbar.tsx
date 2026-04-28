import { useEffect, useState } from 'react';

import 'app/pages/layout/navbar/navbar.scss';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('profile');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['profile', 'certifications', 'summary', 'skills', 'education', 'contact'];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="site-navbar">
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-brand">Quỳnh Nga - Business Analyst</div>
        <ul className="navbar-nav">
          {[
            { id: 'profile', icon: 'person', label: 'Profile' },
            { id: 'certifications', icon: 'workspace_premium', label: 'Certifications' },
            { id: 'summary', icon: 'auto_awesome', label: 'Summary' },
            { id: 'skills', icon: 'psychology', label: 'Skills' },
            { id: 'education', icon: 'school', label: 'Education' },
            { id: 'contact', icon: 'mail', label: 'Contact' }
          ].map(({ id, icon, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={activeSection === id ? 'active' : ''}
                onClick={e => { e.preventDefault(); scrollTo(id); }}
              >
                <span className="nav-icon material-icons-round">{icon}</span>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;