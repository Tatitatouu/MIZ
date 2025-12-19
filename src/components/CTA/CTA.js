import React from 'react';
import './CTA.css';

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <h2 className="cta-title">Prêt à optimiser votre patrimoine ?</h2>
        <p className="cta-subtitle">
          Rejoignez nos clients qui font confiance à MIZ pour sécuriser et valoriser leur patrimoine
        </p>
        <button className="cta-button">Prendre rendez-vous</button>
      </div>
    </section>
  );
};

export default CTA;
