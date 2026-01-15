import React from 'react';

const AboutUsHero = ({ heroRef }) => {
  return (
    <section className="aboutus-hero" ref={heroRef}>
      <div className="hero-bg-shapes">
        <div className="floating-bubble bubble-1"></div>
        <div className="floating-bubble bubble-2"></div>
        <div className="floating-bubble bubble-3"></div>
        <div className="hero-gradient-orb"></div>
      </div>
      <div className="aboutus-hero-content">
        <h1 className="aboutus-hero-title">
          <span className="title-line">À propos</span>
          <span className="title-line accent">de nous</span>
        </h1>
        <p className="aboutus-hero-subtitle">
          Rendre la déclaration d'impôts claire, sécurisée et sans stress
        </p>
      </div>
      <div className="hero-scroll-indicator">
        <span>Découvrir</span>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default AboutUsHero;
