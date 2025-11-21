import React from 'react';
import './Header.css';
import { FiCalendar } from 'react-icons/fi';

export default function Header() {
  return (
    <header className="header">
      <nav className="header-nav">
        <div className="nav-links">
          <a href="/about">About us</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="nav-icons">
          <button className="icon-btn calendar-btn">
            <FiCalendar size={20} />
          </button>
        </div>
      </nav>
    </header>
  );
}
