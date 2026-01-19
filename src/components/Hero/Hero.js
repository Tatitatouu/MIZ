import React, { useEffect } from 'react';
import './Hero.css';
import gsap from 'gsap';

export default function Hero() {
  const word = "maintenant";
  const letters = word.split('');

  useEffect(() => {
    // Hero animation
    const heroTl = gsap.timeline();
    heroTl.fromTo('.hero-logo', 
      { opacity: 0, scale: 0.8, rotateY: -20 },
      { opacity: 1, scale: 1, rotateY: 0, duration: 1.2, ease: 'power4.out' }
    ).fromTo('.hero-headline',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      '-=0.6'
    ).fromTo('.hero-scroll-indicator',
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
      '-=0.3'
    );

    // Floating bubbles animation
    gsap.to('.floating-bubble', {
      y: -30,
      duration: 3,
      ease: 'power1.inOut',
      yoyo: true,
      repeat: -1,
      stagger: 0.5
    });
  }, []);

  return (
    <section className="hero-container" aria-label="Section d'accueil Mon Impôt Zen">
      {/* Background shapes - decorative */}
      <div className="hero-bg-shapes" aria-hidden="true">
        <div className="floating-bubble bubble-1"></div>
        <div className="floating-bubble bubble-2"></div>
        <div className="floating-bubble bubble-3"></div>
      </div>

      {/* Content */}
      <div className="hero-content">
        <div className="hero-left">
          <img 
            src="/logo_blanc.svg" 
            alt="Logo Mon Impôt Zen - Service d'accompagnement fiscal personnalisé" 
            className="hero-logo"
            width="200"
            height="200"
            loading="eager"
          />
        </div>
        <div className="hero-right">
          <h1 className="hero-headline">
            <span className="headline-static">Le zen de l'impôt ?</span>
            <span className="headline-static">C'est{' '}
              <span className="bounce-word" aria-label={word}>
                {letters.map((letter, index) => (
                  <span key={index} className="bounce-letter" style={{ '--letter-index': index }} aria-hidden="true">
                    {letter}
                  </span>
                ))}
              </span>
              .
            </span>
          </h1>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll-indicator" role="presentation" aria-hidden="true">
        <span>Découvrir</span>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
}