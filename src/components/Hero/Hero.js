import React from 'react';
import './Hero.css';
import logo from '../../assets/logo.svg';

export default function Hero() {
  const word = "maintenant";
  const letters = word.split('');

  return (
    <section className="hero-container">
      <div className="hero-background">
        <div className="hero-bubbles">
          <div className="hero-bubble bubble-1"></div>
          <div className="hero-bubble bubble-2"></div>
          <div className="hero-gradient-orb"></div>
        </div>
      </div>
      <div className="hero-content">
        <div className="hero-left">
          <img src={logo} alt="Logo" className="big-brand" />
        </div>
        <div className="hero-right">
          <div className="hero-headline-wrapper">
            <h2 className="hero-headline">
              <span className="headline-static">Le zen de l'impôt ?<br />C'est</span>{' '}
              <span className="bounce-word">
                {letters.map((letter, index) => (
                  <span key={index} className="bounce-letter" style={{ '--letter-index': index }}>
                    {letter}
                  </span>
                ))}
              </span>
              <span className="headline-static">.</span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}