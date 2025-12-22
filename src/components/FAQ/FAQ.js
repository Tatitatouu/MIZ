import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "Quels sont vos tarifs ?",
      answer: "Nos tarifs sont simples et transparents : 240€ TTC pour la première année pour un accompagnement complet. Les années suivantes, 20€ TTC par mois. Nous proposons également une option au succès : 20% des économies fiscales réalisées sur les trois dernières années."
    },
    {
      question: "Pourquoi faire appel à vos services ?",
      answer: "Plus de 70% des personnes que nous rencontrons oublient de déclarer au moins un avantage fiscal pouvant réduire leur imposition. Notre expertise vous permet de ne rien oublier et d'optimiser votre situation fiscale en toute légalité."
    },
    {
      question: "Les rendez-vous sont-ils en présentiel ?",
      answer: "Non, l'accompagnement est 100% en visioconférence. Cela vous permet de bénéficier de notre expertise où que vous soyez, sans contrainte de déplacement, tout en gardant un contact direct et personnalisé."
    },
    {
      question: "Que se passe-t-il si je ne réalise aucune économie ?",
      answer: "Si vous choisissez l'option au succès (20% des économies réalisées), vous ne payez que si nous identifions des économies fiscales sur vos trois dernières déclarations. C'est notre engagement de transparence et de résultat."
    },
    {
      question: "Combien de temps dure un accompagnement ?",
      answer: "L'accompagnement est annuel avec un suivi régulier. Après la première année à 240€ TTC, vous pouvez continuer à bénéficier de nos services pour 20€ TTC par mois, ce qui représente un accompagnement continu et une tranquillité d'esprit tout au long de l'année."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">Foire aux questions</h2>
        <div className="faq-list">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
              >
                <span>{item.question}</span>
                <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
              </button>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
