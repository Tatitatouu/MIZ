import React, { useEffect, useRef } from 'react';
import './AboutUs.css';
import { FiArrowRight } from 'react-icons/fi';
import { HiSparkles, HiLightningBolt, HiShieldCheck, HiStar } from 'react-icons/hi';
import { IoRocketSharp } from 'react-icons/io5';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const heroRef = useRef(null);
  const introRef = useRef(null);
  const missionRef = useRef(null);
  const valuesRef = useRef(null);
  const foundersRef = useRef(null);
  const approachRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    // Hero animation
    const heroTl = gsap.timeline();
    heroTl.fromTo('.aboutus-hero-title', 
      { opacity: 0, y: 100, rotateX: 45 },
      { opacity: 1, y: 0, rotateX: 0, duration: 1.2, ease: 'power4.out' }
    ).fromTo('.aboutus-hero-subtitle',
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

    // Intro section
    gsap.fromTo('.aboutus-intro .section-title',
      { opacity: 0, x: -100 },
      {
        opacity: 1, x: 0, duration: 1,
        scrollTrigger: { trigger: introRef.current, start: 'top 80%' }
      }
    );
    gsap.fromTo('.section-text',
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0, duration: 0.8, stagger: 0.2,
        scrollTrigger: { trigger: introRef.current, start: 'top 70%' }
      }
    );

    // Mission cards
    gsap.fromTo('.mission-card',
      { opacity: 0, y: 100, rotateY: 15 },
      {
        opacity: 1, y: 0, rotateY: 0, duration: 1, stagger: 0.3,
        scrollTrigger: { trigger: missionRef.current, start: 'top 75%' }
      }
    );

    // Values cards with 3D effect
    gsap.fromTo('.value-card',
      { opacity: 0, scale: 0.5, rotateZ: -10 },
      {
        opacity: 1, scale: 1, rotateZ: 0, duration: 0.8, stagger: 0.15,
        ease: 'back.out(1.7)',
        scrollTrigger: { trigger: valuesRef.current, start: 'top 75%' }
      }
    );

    // Founders reveal
    gsap.fromTo('.founder-card',
      { opacity: 0, x: (i) => i % 2 === 0 ? -150 : 150 },
      {
        opacity: 1, x: 0, duration: 1.2, stagger: 0.3,
        ease: 'power4.out',
        scrollTrigger: { trigger: foundersRef.current, start: 'top 70%' }
      }
    );

    // Steps animation
    gsap.fromTo('.approach-step',
      { opacity: 0, y: 80 },
      {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.2,
        scrollTrigger: { trigger: approachRef.current, start: 'top 75%' }
      }
    );

    // Step numbers counter animation
    const stepNumbers = document.querySelectorAll('.step-number');
    stepNumbers.forEach((num) => {
      gsap.fromTo(num,
        { scale: 0, rotation: -180 },
        {
          scale: 1, rotation: 0, duration: 0.8,
          ease: 'back.out(2)',
          scrollTrigger: { trigger: num, start: 'top 85%' }
        }
      );
    });

    // CTA section
    gsap.fromTo('.cta-title',
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0, duration: 1,
        scrollTrigger: { trigger: ctaRef.current, start: 'top 80%' }
      }
    );
    gsap.fromTo('.cta-button',
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1, scale: 1, duration: 0.6, delay: 0.3,
        ease: 'back.out(1.7)',
        scrollTrigger: { trigger: ctaRef.current, start: 'top 80%' }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const values = [
    { icon: <HiSparkles />, title: "Professionnalisme", description: "Une expertise fiscale et patrimoniale éprouvée" },
    { icon: <HiLightningBolt />, title: "Ponctualité et fiabilité", description: "Nous tenons nos engagements avec rigueur et respect des délais" },
    { icon: <HiShieldCheck />, title: "Expertise", description: "Des conseils précis, personnalisés et toujours dans l'intérêt du client" }
  ];

  const founders = [
    {
      name: "Emir",
      description: "Fort de 10 ans d'expérience, Emir accompagne ses clients aussi bien sur leurs déclarations fiscales que sur l'ensemble de leur gestion de patrimoine.",
      trait: "L'expérience"
    },
    {
      name: "Tristan",
      description: "Tristan bénéficie d'une solide expérience en relation client, immobilier, courtage et gestion de patrimoine, avec une approche très orientée accompagnement et pédagogie.",
      trait: "La fougue"
    }
  ];

  const steps = [
    { number: "1", title: "Audit initial", description: "Liste des pièces à collecter" },
    { number: "2", title: "Réalisation", description: "de la déclaration" },
    { number: "3", title: "Audit patrimonial", description: "post-déclaration" }
  ];

  return (
    <div className="aboutus-page">
      {/* Hero Section */}
      <section className="aboutus-hero" ref={heroRef}>
        <div className="hero-bg-shapes">
          <div className="floating-bubble bubble-1"></div>
          <div className="floating-bubble bubble-2"></div>
          <div className="floating-bubble bubble-3"></div>
          <div className="hero-gradient-orb"></div>
        </div>
        <div className="aboutus-hero-content">
          <h1 className="aboutus-hero-title">
            <span className="title-line">À propos</span>
            <span className="title-line accent">de nous</span>
          </h1>
          <p className="aboutus-hero-subtitle">
            Rendre la déclaration d'impôts claire, sécurisée et sans stress
          </p>
        </div>
        <div className="hero-scroll-indicator">
          <span>Découvrir</span>
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* Presentation */}
      <section className="aboutus-section" ref={introRef}>
        <div className="aboutus-container">
          <div className="aboutus-intro">
            <h2 className="section-title">
              <span className="title-decoration"></span>
              Notre histoire
            </h2>
            <p className="section-text">
              MIZ est né d'un constat simple : chaque année, de nombreux contribuables commettent des erreurs dans leur déclaration d'impôts, souvent par manque de temps, 
              de compréhension ou face à une réglementation volontairement complexifiée.
            </p>
            <p className="section-text highlight-text">
              Dans le cadre de notre activité de gestionnaires de patrimoine, nous accompagnions déjà nos clients sur leurs déclarations fiscales. 
              Face à la récurrence des erreurs constatées et au stress généré par cet exercice, nous avons décidé de créer 
            <strong> MIZ </strong>, une structure dédiée, afin de décharger totalement le client en lui apportant expertise, conseil, disponibilité et sérénité.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="aboutus-section aboutus-mission" ref={missionRef}>
        <div className="section-bg-pattern"></div>
        <div className="aboutus-container">
          <div className="mission-grid">
            <div className="mission-card">
              <div className="card-glow"></div>
              <IoRocketSharp className="mission-icon" />
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
              <HiStar className="mission-icon" />
              <h3>Notre vision</h3>
              <p>Notre ambition est de fluidifier et automatiser l'ensemble du processus de déclaration, pour offrir une expérience simple et efficace.</p>
              <p>À long terme, nous souhaitons créer une relation de confiance durable, fidéliser nos clients et développer la recommandation, grâce à un service de qualité, humain et transparent.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="aboutus-section aboutus-values" ref={valuesRef}>
        <div className="aboutus-container">
          <h2 className="section-title">Nos valeurs</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-card-inner">
                  <div className="value-icon">{value.icon}</div>
                  <h4 className="value-title">{value.title}</h4>
                  <p className="value-description">{value.description}</p>
                  <div className="value-number">{String(index + 1).padStart(2, '0')}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="aboutus-section aboutus-founders" ref={foundersRef}>
        <div className="aboutus-container">
          <h2 className="section-title">Les fondateurs</h2>
          <p className="section-subtitle">
            Les deux fondateurs sont complémentaires : l'expérience d'un côté, la fougue de l'autre. Chacun est en capacité de suivre l'ensemble de la clientèle, garantissant réactivité et disponibilité.
          </p>
          <div className="founders-grid">
            {founders.map((founder, index) => (
              <div key={index} className="founder-card">
                <div className="founder-avatar">
                  <span>{founder.name.charAt(0)}</span>
                </div>
                <div className="founder-trait">{founder.trait}</div>
                <h3 className="founder-name">{founder.name}</h3>
                <p className="founder-description">{founder.description}</p>
                <div className="founder-decoration"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="aboutus-section aboutus-approach" ref={approachRef}>
        <div className="aboutus-container">
          <h2 className="section-title">Notre accompagnement</h2>
          <p className="section-text centered">
            Notre accompagnement repose sur 3 rendez-vous clés en visioconférence, avec un coffre-fort numérique sécurisé pour le dépôt des documents.
          </p>
          <div className="steps-timeline">
            <div className="timeline-line"></div>
            <div className="steps-grid">
              {steps.map((step, index) => (
                <div key={index} className="approach-step">
                  <div className="step-number">{step.number}</div>
                  <div className="step-content">
                    <h4 className="step-title">{step.title}</h4>
                    <p className="step-description">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="offer-box">
            <div className="offer-icon-wrapper">
              <HiSparkles className="offer-icon" />
            </div>
            <p className="offer-text">
              <strong>Offre de recommandation :</strong> 3 clients recommandés = remboursement de la cotisation annuelle
            </p>
            <FiArrowRight className="offer-arrow" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
