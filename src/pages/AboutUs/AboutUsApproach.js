import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi';

const AboutUsApproach = ({ approachRef, steps }) => {
  return (
    <section className="aboutus-section aboutus-approach" ref={approachRef}>
      <div className="aboutus-container">
        <h2 className="section-title">Notre accompagnement</h2>
        <p className="section-text centered">
          Notre accompagnement repose sur 3 rendez-vous clés en visioconférence, avec un coffre-fort numérique sécurisé pour le dépôt des documents.
        </p>
        <div className="steps-timeline">
          <div className="timeline-line"></div>
          <div className="steps-grid">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <div className="approach-step" data-step={index + 1}>
                  <div className="step-number">{step.number}</div>
                  <div className="step-content">
                    <h4 className="step-title">{step.title}</h4>
                    <p className="step-description">{step.description}</p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="step-connector" data-connector={index + 1}></div>
                )}
              </React.Fragment>
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
          <FiArrowRight className="offer-arrow" />
        </div>
      </div>
    </section>
  );
};

export default AboutUsApproach;
