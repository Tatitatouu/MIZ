import React from 'react';

const AboutUsMission = ({ missionRef }) => {
  return (
    <section className="aboutus-section aboutus-mission" ref={missionRef}>
      <div className="section-bg-pattern"></div>
      <div className="aboutus-container">
        <div className="mission-grid">
          <div className="mission-card">
            <div className="card-glow"></div>
            <h3>Notre mission</h3>
            <ul>
              <li>Accompagner nos clients sur une opération souvent anxiogène</li>
              <li>Sécuriser leurs déclarations fiscales</li>
              <li>Identifier les montants indûment versés au fisc et les récupérer</li>
              <li>Construire une relation de confiance durable</li>
            </ul>
          </div>
          <div className="mission-card">
            <div className="card-glow"></div>
            <h3>Notre vision</h3>
            <p>Notre ambition est de fluidifier et automatiser l'ensemble du processus de déclaration, pour offrir une expérience simple et efficace.</p>
            <p>À long terme, nous souhaitons créer une relation de confiance durable, fidéliser nos clients et développer la recommandation, grâce à un service de qualité, humain et transparent.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsMission;
