import React from 'react';

const ContactHero = ({ heroRef }) => {
  return (
    <section className="contact-hero" ref={heroRef}>
      <div className="hero-bg-shapes">
        <div className="floating-bubble bubble-1"></div>
        <div className="floating-bubble bubble-2"></div>
        <div className="hero-gradient-orb"></div>
      </div>
      <div className="contact-hero-content">
        <h1 className="contact-hero-title">Contactez-nous</h1>
        <p className="contact-hero-subtitle">
          Une question ? Un projet ? Notre équipe est à votre écoute pour vous accompagner.
        </p>
      </div>
    </section>
  );
};

export default ContactHero;
