import React from 'react';
import './WhyUs.css';
import { FiCheck, FiClock, FiShield, FiHeart } from 'react-icons/fi';

export default function WhyUs() {
  const advantages = [
    {
      icon: <FiCheck size={36} />,
      title: "Simplicité",
      description: "Une démarche claire et sans jargon complexe",
      tags: ["Accessible", "Rapide", "Efficace"]
    },
    {
      icon: <FiClock size={36} />,
      title: "Gain de temps",
      description: "On s'occupe de tout, vous profitez de votre temps",
      tags: ["Automatisation", "Suivi 24/7", "Réactivité"]
    },
    {
      icon: <FiShield size={36} />,
      title: "Sécurité",
      description: "Vos données sont protégées et confidentielles",
      tags: ["Cryptage", "Conformité", "Sécurisé"]
    },
    {
      icon: <FiHeart size={36} />,
      title: "Accompagnement",
      description: "Un expert dédié à votre écoute",
      tags: ["Consulting", "Formation", "Support"]
    }
  ];

  return (
    <section className="whyus-container">
      <div className="whyus-content">
        <h2 className="whyus-title">Notre engagement</h2>
        <p className="whyus-subtitle">Simplifiez vos impôts, gagnez en sérénité</p>
        <div className="advantages-grid">
          {advantages.map((advantage, index) => (
            <div key={index} className="advantage-card">
              <div className="advantage-icon">
                {advantage.icon}
              </div>
              <h3 className="advantage-title">{advantage.title}</h3>
              <p className="advantage-description">{advantage.description}</p>
              <div className="advantage-tags">
                {advantage.tags.map((tag, idx) => (
                  <span key={idx} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
