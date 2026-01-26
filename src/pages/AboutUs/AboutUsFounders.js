import React from 'react';
import tristanImage from '../../assets/Image Tristan.jpeg';
import emirImage from '../../assets/Image Emir.jpg';

const AboutUsFounders = ({ foundersRef, founders }) => {
  return (
    <section className="aboutus-section aboutus-founders" ref={foundersRef}>
      <div className="aboutus-container">
        <h2 className="section-title">Les fondateurs</h2>
        <p className="section-subtitle">
          Les deux fondateurs sont complémentaires : l'expérience d'un côté, la fougue de l'autre. Chacun est en capacité de suivre l'ensemble de la clientèle, garantissant réactivité et disponibilité.
        </p>
        <div className="founders-grid">
          {founders.map((founder, index) => (
            <div key={index} className="founder-card">
              <div className="founder-avatar">
                {founder.name === 'Tristan' ? (
                  <img src={tristanImage} alt={founder.name} className="founder-avatar-img" />
                ) : founder.name === 'Emir' ? (
                  <img src={emirImage} alt={founder.name} className="founder-avatar-img" />
                ) : (
                  <span>{founder.name.charAt(0)}</span>
                )}
              </div>
              <div className="founder-trait">{founder.trait}</div>
              <h3 className="founder-name">{founder.name}</h3>
              <p className="founder-description">{founder.description}</p>
              <div className="founder-decoration"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsFounders;
