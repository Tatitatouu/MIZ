import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "Quels sont vos tarifs ?",
      answer: "Nos tarifs sont simples et transparents : 340€ TTC pour la première année pour un accompagnement complet. Les années suivantes, 20€ TTC par mois. Nous proposons également une option au succès : 20% des économies fiscales réalisées sur les trois dernières années."
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
      question: "Vous avez une demande spécifique ?",
      answer: "Contactez nous : nous analyserons votre besoin et vous proposerons un devis personnalisé adapté à votre situation."
    },
    {
      question: "Combien de temps dure un accompagnement ?",
      answer: "L'accompagnement est annuel sur la base de trois rendez-vous, le rendez-vous peut durer de 30minutes à 1 heure en fonction du cas du client."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section" aria-labelledby="faq-title">
      <div className="faq-container">
        <h2 className="faq-title" id="faq-title">Foire aux questions</h2>
        <div className="faq-list" role="list">
          {faqData.map((item, index) => (
            <article
              key={index}
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              role="listitem"
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
              >
                <span>{item.question}</span>
                <span className="faq-icon" aria-hidden="true">{activeIndex === index ? '−' : '+'}</span>
              </button>
              <div 
                className="faq-answer" 
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
              >
                <p>{item.answer}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
