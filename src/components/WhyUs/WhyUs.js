import React from 'react';
import './WhyUs.css';

export default function WhyUs() {
  const services = [
    {
      badge: 'Immobilier locatif',
      title: 'Biens en location & dispositifs',
      items: [
        'Location nue, meublée (micro-BIC ou réel)',
        'Dispositifs PINEL, MALRAUX, JEANBRUN, Monument Historique, etc.',
        'Déclarations 2044, 2044EB, 2042C PRO…'
      ]
    },
    {
      badge: 'Réductions & crédits',
      title: 'Optimisation et vérification',
      items: [
        "Vérification de l’éligibilité",
        'Réalisation de la 2042RICI'
      ]
    },
    {
      badge: 'Foyer fiscal',
      title: 'Calculs & simulations',
      items: [
        "Frais réels, frais de garde",
        "Impact sur le foyer fiscal (enfant rattaché ou non)",
        'Simulations en cas de mariage, PACS, divorce, arrivée d’un enfant'
      ]
    },
    {
      badge: 'Situations internationales',
      title: 'Frontaliers Suisses',
      items: [
        'Déclarations pour frontaliers',
        '2047 et charges de couverture sociale'
      ]
    }
  ];

  return (
    <section className="whyus-container" aria-labelledby="whyus-title">
      <div className="whyus-content">
        <div className="whyus-hero">
          <h2 className="whyus-title" id="whyus-title">Déclaration de patrimoine</h2>
          <p className="whyus-subtitle">Simplifiez vos impôts, gagnez en sérénité</p>
        </div>

        <div className="service-grid" role="list">
          {services.map((service, index) => (
            <article key={index} className="service-card" role="listitem">
              <span className="service-badge">{service.badge}</span>
              <h3 className="service-title">{service.title}</h3>
              <ul className="service-list">
                {service.items.map((item, idx) => (
                  <li key={idx} className="service-item">{item}</li>
                ))}
              </ul>
              <div className="service-divider" aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
