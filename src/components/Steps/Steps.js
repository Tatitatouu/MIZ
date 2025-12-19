import React from 'react';
import { stepsData } from './stepsData';
import './Steps.css';

export default function Steps() {
  return (
    <section className="steps-container">
      <div className="steps-header">
        <h2 className="steps-title">Les 3 étapes de notre relation</h2>
      </div>
      <div className="steps-list">
        {stepsData.map((step, index) => (
          <div
            key={index}
            className="steps-item"
            style={{
              top: '140px',
              zIndex: index + 1
            }}
          >
            <div className="image-text-wrapper">
              <div className="big-number">{step.number}</div>
              <div className="image-text-content">
                <span className="step-label">Phase {step.number}</span>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>

                <div className="step-details">
                  {step.details.map((detail, idx) => (
                    <div key={idx} className="step-detail">
                      <span className="check-icon">✓</span>
                      {detail}
                    </div>
                  ))}
                </div>

                <button className="step-button">
                  En savoir plus <span className="arrow">→</span>
                </button>

              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}