import React, { useState, useEffect } from 'react';
import './Header.css';
import { FiCalendar } from 'react-icons/fi';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

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
    window.open('https://calendly.com/tristan-monimpotzen', '_blank');
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      {scrolled && <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }}></div>}
      <nav className="header-nav">
        <div className="nav-links">
          <a href="/about">About us</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="nav-icons">
          <button className="icon-btn calendar-btn" onClick={handleCalendarClick}>
            <FiCalendar size={20} />
          </button>
        </div>
      </nav>
    </header>
  );
}
