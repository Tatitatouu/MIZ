import React, { useState, useEffect, useRef } from 'react';
import './Contact.css';
import { FiMail, FiMapPin, FiSend, FiCalendar, FiClock, FiCheckCircle } from 'react-icons/fi';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const heroRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Hero animation
    gsap.fromTo('.contact-hero-title',
      { opacity: 0, y: 80 },
      { opacity: 1, y: 0, duration: 1, ease: 'power4.out' }
    );
    
    gsap.fromTo('.contact-hero-subtitle',
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.3, ease: 'power3.out' }
    );

    // Form animation
    gsap.fromTo('.contact-form-container',
      { opacity: 0, x: -50 },
      {
        opacity: 1, x: 0, duration: 0.8,
        scrollTrigger: { trigger: formRef.current, start: 'top 80%' }
      }
    );

    // Info cards animation
    gsap.fromTo('.contact-info-card',
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.15,
        scrollTrigger: { trigger: infoRef.current, start: 'top 80%' }
      }
    );

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/mnjagzkv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        
        // Reset après 5 secondes
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        alert('Une erreur est survenue. Veuillez réessayer.');
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCalendarClick = () => {
    window.open('https://calendly.com/contact-monimpotzen', '_blank');
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero" ref={heroRef}>
        <div className="hero-bg-shapes">
          <div className="floating-bubble bubble-1"></div>
          <div className="floating-bubble bubble-2"></div>
          <div className="hero-gradient-orb"></div>
        </div>
        <div className="contact-hero-content">
          <h1 className="contact-hero-title">Contactez-nous</h1>
          <p className="contact-hero-subtitle">
            Une question ? Un projet ? Notre équipe est à votre écoute pour vous accompagner.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="contact-main">
        <div className="contact-container">
          {/* Form Section */}
          <div className="contact-form-container" ref={formRef}>
            <h2 className="form-title">Envoyez-nous un message</h2>
            <p className="form-subtitle">Nous vous répondrons dans les plus brefs délais.</p>
            
            {isSubmitted ? (
              <div className="success-message">
                <FiCheckCircle size={48} />
                <h3>Message envoyé !</h3>
                <p>Merci pour votre message. Nous vous répondrons très bientôt.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Nom complet</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Votre nom"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="votre@email.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Téléphone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="06 00 00 00 00"
                    />
                  </div>
                </div>
                
                <div className="form-group full-width">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre demande..."
                    rows="5"
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className="loading">Envoi en cours...</span>
                  ) : (
                    <>
                      <span>Envoyer le message</span>
                      <FiSend size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Info Section */}
          <div className="contact-info" ref={infoRef}>
            <div className="contact-info-card">
              <div className="info-icon">
                <FiMail size={24} />
              </div>
              <div className="info-content">
                <h3>Email</h3>
                <a href="mailto:contact@monimpotzen.fr">contact@monimpotzen.fr</a>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="info-icon">
                <FiMapPin size={24} />
              </div>
              <div className="info-content">
                <h3>Adresse</h3>
                <p>Sélestat, France</p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="info-icon">
                <FiClock size={24} />
              </div>
              <div className="info-content">
                <h3>Horaires</h3>
                <p>Lun - Ven : 9h - 17h</p>
              </div>
            </div>

            {/* CTA Calendrier */}
            <div className="calendar-cta">
              <h3>Préférez un rendez-vous ?</h3>
              <p>Réservez directement un créneau avec notre équipe.</p>
              <button className="calendar-btn" onClick={handleCalendarClick}>
                <FiCalendar size={20} />
                <span>Prendre rendez-vous</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
