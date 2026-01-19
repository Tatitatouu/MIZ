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
    window.open('https://calendly.com/contact-monimpotzen', '_blank', 'noopener,noreferrer');
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''} ${isDarkHero ? 'white-text' : ''}`} role="banner">
      {scrolled && <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} aria-hidden="true"></div>}
      <nav className="header-nav" aria-label="Navigation principale">
        <div className="nav-links">
          {isAboutPage || isContactPage ? (
            <Link to="/" aria-label="Retour à l'accueil">Accueil</Link>
          ) : (
            <Link to="/about" aria-label="En savoir plus sur Mon Impôt Zen">À propos</Link>
          )}
          <Link to="/contact" aria-label="Nous contacter">Contact</Link>
        </div>
        <button 
          className="calendar-button" 
          onClick={handleCalendarClick}
          aria-label="Prendre rendez-vous sur Calendly"
          title="Réserver un appel"
        >
          <FiCalendar size={24} aria-hidden="true" />
        </button>
      </nav>
    </header>
  );
}
