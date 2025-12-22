import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import { FiCalendar } from 'react-icons/fi';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();
  const isAboutPage = location.pathname === '/about';
  const isContactPage = location.pathname === '/contact';
  const isDarkHero = isAboutPage || isContactPage;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCalendarClick = () => {
    window.open('https://calendly.com/contact-monimpotzen', '_blank');
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''} ${isDarkHero ? 'white-text' : ''}`}>
      {scrolled && <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }}></div>}
      <nav className="header-nav">
        <div className="nav-links">
          {isAboutPage || isContactPage ? (
            <Link to="/">Accueil</Link>
          ) : (
            <Link to="/about">À propos</Link>
          )}
          <Link to="/contact">Contact</Link>
        </div>
        <button className="calendar-button" onClick={handleCalendarClick}>
          <FiCalendar size={24} />
        </button>
      </nav>
    </header>
  );
}
