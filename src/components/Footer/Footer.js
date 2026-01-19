import React, { useState } from 'react';
import './Footer.css';
import { FiMail, FiPhone, FiMapPin, FiCalendar } from 'react-icons/fi';
import Modal from '../Modal/Modal';
import CGVContent from './CGVContent';
import MentionsContent from './MentionsContent';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isCGVOpen, setIsCGVOpen] = useState(false);
  const [isMentionsOpen, setIsMentionsOpen] = useState(false);

  const handleCalendarClick = () => {
    window.open('https://calendly.com/contact-monimpotzen', '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="footer" role="contentinfo" itemScope itemType="https://schema.org/WPFooter">
      <div className="footer-decoration" aria-hidden="true">
        <div className="footer-bubble footer-bubble-1"></div>
        <div className="footer-bubble footer-bubble-2"></div>
      </div>
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-cta">
            <h3>Prêt à optimiser votre fiscalité ?</h3>
            <p>Prenez rendez-vous pour un accompagnement personnalisé</p>
            <button 
              className="footer-cta-btn" 
              onClick={handleCalendarClick}
              aria-label="Réserver un appel de consultation fiscale"
            >
              <FiCalendar size={18} aria-hidden="true" />
              <span>Réserver un appel</span>
            </button>
          </div>
          
          <address className="footer-info" itemScope itemType="https://schema.org/Organization">
            <meta itemProp="name" content="Mon Impôt Zen" />
            <div className="footer-info-item">
              <FiMail className="footer-icon" aria-hidden="true" />
              <a 
                href="mailto:contact@monimpotzen.fr" 
                itemProp="email"
                aria-label="Envoyer un email à contact@monimpotzen.fr"
              >
                contact@monimpotzen.fr
              </a>
            </div>
            <div className="footer-info-item">
              <FiPhone className="footer-icon" aria-hidden="true" />
              <span>Du lundi au vendredi, 9h-18h</span>
            </div>
            <div className="footer-info-item">
              <FiMapPin className="footer-icon" aria-hidden="true" />
              <span itemProp="location">100% en visioconférence</span>
            </div>
          </address>
        </div>

        <div className="footer-divider" aria-hidden="true"></div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            <small>&copy; {currentYear} Mon Impôt Zen - Tous droits réservés</small>
          </p>
          <nav className="footer-links" aria-label="Liens légaux">
            <button 
              onClick={() => setIsMentionsOpen(true)} 
              className="footer-link-btn"
              aria-label="Voir les mentions légales"
            >
              Mentions légales
            </button>
            <button 
              onClick={() => setIsCGVOpen(true)} 
              className="footer-link-btn"
              aria-label="Voir les conditions générales de vente"
            >
              CGV
            </button>
          </nav>
        </div>
      </div>

      <Modal isOpen={isMentionsOpen} onClose={() => setIsMentionsOpen(false)} title="Mentions Légales">
        <MentionsContent />
      </Modal>

      <Modal isOpen={isCGVOpen} onClose={() => setIsCGVOpen(false)} title="Conditions Générales de Vente">
        <CGVContent />
      </Modal>
    </footer>
  );
};

export default Footer;
