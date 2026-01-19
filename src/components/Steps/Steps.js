import React from 'react';
import { stepsData } from './stepsData';
import './Steps.css';

export default function Steps() {
  return (
    <section className="steps-container" aria-labelledby="steps-title">
      <div className="steps-header">
        <h2 className="steps-title" id="steps-title">Les 3 étapes de notre relation</h2>
      </div>
      <ol className="steps-list" aria-label="Étapes de l'accompagnement fiscal">
        {stepsData.map((step, index) => (
          <li
            key={index}
            className="steps-item"
            style={{
              top: '140px',
              zIndex: index + 1
            }}
          >
            <article className="image-text-wrapper">
              <div className="big-number" aria-hidden="true">{step.number}</div>
              <div className="image-text-content">
                <span className="step-label">Phase {step.number}</span>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>

                <ul className="step-details" aria-label={`Détails de la phase ${step.number}`}>
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="step-detail">
                      <span className="check-icon" aria-hidden="true">✓</span>
                      {detail}
                    </li>
                  ))}
                </ul>

                <button 
                  className="step-button"
                  aria-label={`En savoir plus sur la phase ${step.number} : ${step.title}`}
                >
                  En savoir plus <span className="arrow" aria-hidden="true">→</span>
                </button>

              </div>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}