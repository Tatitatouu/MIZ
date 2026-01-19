import React, { useState, useEffect, useMemo } from 'react';
import './Hook.css';

const Hook = () => {
  const services = useMemo(() => [
    "La déclaration de vos revenus",
    "La vérification de vos trois dernières déclarations d'impôts",
    "L'optimisation fiscale",
    "Les déclarations des revenus fonciers",
    "Connaître les dispositifs de réduction d'impôts",
    "Le contrôle exhaustif des oublis"
  ], []);

  const [displayText, setDisplayText] = useState('');
  const [serviceIndex, setServiceIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Animation de frappe
  useEffect(() => {
    const typingSpeed = 50;
    const deletingSpeed = 25;
    const pauseTime = 2000;

    const timeout = setTimeout(() => {
      const currentService = services[serviceIndex];
      
      if (!isDeleting && charIndex < currentService.length) {
        setDisplayText(currentService.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(currentService.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentService.length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setServiceIndex((serviceIndex + 1) % services.length);
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, serviceIndex, services]);

  return (
    <section className="hook-section" aria-labelledby="hook-headline">
      <div className="hook-container">
        <div className="hook-headline">
          <h2 id="hook-headline">
            Par manque de temps ou de visibilité, plus de <span className="highlight">70 %</span> des personnes que nous rencontrons oublient de déclarer au moins un avantage fiscal pouvant réduire leur imposition.
          </h2>
        </div>

        <div className="hook-separator" aria-hidden="true"></div>

        <div className="hook-services">
          <p className="services-intro">
            Ne subissez plus vos impôts, nous vous accompagnons pour :
          </p>

          <div className="typing-container" aria-live="polite" aria-label="Nos services d'accompagnement fiscal">
            <span className="typing-text">{displayText}</span>
            <span className="typing-cursor" aria-hidden="true"></span>
          </div>
          
          {/* Liste cachée pour le SEO et l'accessibilité */}
          <ul className="sr-only" aria-label="Liste complète de nos services">
            {services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hook;
