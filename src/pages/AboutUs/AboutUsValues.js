import React from 'react';
import { HiSparkles, HiLightningBolt, HiShieldCheck } from 'react-icons/hi';

const iconMap = {
  HiSparkles: <HiSparkles />,
  HiLightningBolt: <HiLightningBolt />,
  HiShieldCheck: <HiShieldCheck />
};

const AboutUsValues = ({ valuesRef, values }) => {
  return (
    <section className="aboutus-section aboutus-values" ref={valuesRef}>
      <div className="aboutus-container">
        <h2 className="section-title">Nos valeurs</h2>
        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="value-card">
              <div className="value-card-inner">
                <div className="value-icon">{iconMap[value.icon]}</div>
                <h4 className="value-title">{value.title}</h4>
                <p className="value-description">{value.description}</p>
                <div className="value-number">{String(index + 1).padStart(2, '0')}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsValues;
