import React from 'react';
import { HiSparkles } from 'react-icons/hi';

const AboutUsApproach = ({ approachRef, steps }) => {
  return (
    <section className="aboutus-section aboutus-approach" ref={approachRef}>
      <div className="aboutus-container">
        <h2 className="section-title">Notre accompagnement</h2>
        <p className="section-text centered">
          Notre accompagnement repose sur 3 rendez-vous clés en visioconférence, avec un coffre-fort numérique sécurisé pour le dépôt des documents.
        </p>
        <div className="approach-timeline">
          <div className="approach-timeline-line"></div>
          <div className="approach-steps-grid">
            {steps.map((step, index) => (
              <div key={index} className="approach-step-card">
                <div className="approach-step-number">{step.number}</div>
                <div className="approach-step-content">
                  <h4 className="approach-step-title">{step.title}</h4>
                  <p className="approach-step-description">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="offer-box">
          <div className="offer-icon-wrapper">
            <HiSparkles className="offer-icon" />
          </div>
          <p className="offer-text">
            <strong>Offre de recommandation :</strong> 3 clients recommandés = remboursement de la cotisation annuelle
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsApproach;
