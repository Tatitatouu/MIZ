import React from 'react';
import './WhyUs.css';
import { FiCheck, FiClock, FiShield, FiHeart } from 'react-icons/fi';

export default function WhyUs() {
  const advantages = [
    {
      icon: <FiCheck size={36} aria-hidden="true" />,
      title: "Simplicité",
      description: "Une démarche claire et accessible à tous",
      tags: ["Accessible", "Rapide", "Efficace"]
    },
    {
      icon: <FiClock size={36} aria-hidden="true" />,
      title: "Gain de temps",
      description: "On s'occupe de tout, vous profitez de votre temps",
      tags: ["Automatisation", "Suivi 24/7", "Réactivité"]
    },
    {
      icon: <FiShield size={36} aria-hidden="true" />,
      title: "Sécurité",
      description: "Vos données sont protégées et confidentielles",
      tags: ["Cryptage", "Conformité", "Sécurisé"]
    },
    {
      icon: <FiHeart size={36} aria-hidden="true" />,
      title: "Accompagnement",
      description: "Un expert dédié à votre écoute",
      tags: ["Consulting", "Formation", "Support"]
    }
  ];

  return (
    <section className="whyus-container" aria-labelledby="whyus-title">
      <div className="whyus-content">
        <h2 className="whyus-title" id="whyus-title">Notre engagement</h2>
        <p className="whyus-subtitle">Simplifiez vos impôts, gagnez en sérénité</p>
        <div className="advantages-grid" role="list">
          {advantages.map((advantage, index) => (
            <article key={index} className="advantage-card" role="listitem">
              <div className="advantage-icon">
                {advantage.icon}
              </div>
              <h3 className="advantage-title">{advantage.title}</h3>
              <p className="advantage-description">{advantage.description}</p>
              <div className="advantage-tags" aria-label={`Points clés : ${advantage.tags.join(', ')}`}>
                {advantage.tags.map((tag, idx) => (
                  <span key={idx} className="tag">{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
