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
    window.open('https://calendly.com/contact-monimpotzen', '_blank');
  };

  return (
    <footer className="footer">
      <div className="footer-decoration">
        <div className="footer-bubble footer-bubble-1"></div>
        <div className="footer-bubble footer-bubble-2"></div>
      </div>
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-cta">
            <h3>Prêt à optimiser votre fiscalité ?</h3>
            <p>Prenez rendez-vous pour un accompagnement personnalisé</p>
            <button className="footer-cta-btn" onClick={handleCalendarClick}>
              <FiCalendar size={18} />
              <span>Réserver un appel</span>
            </button>
          </div>
          
          <div className="footer-info">
            <div className="footer-info-item">
              <FiMail className="footer-icon" />
              <a href="mailto:contact@monimpotzen.fr">contact@monimpotzen.fr</a>
            </div>
            <div className="footer-info-item">
              <FiPhone className="footer-icon" />
              <span>Du lundi au vendredi, 9h-18h</span>
            </div>
            <div className="footer-info-item">
              <FiMapPin className="footer-icon" />
              <span>100% en visioconférence</span>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="footer-copyright">&copy; {currentYear} Tous droits réservés</p>
          <div className="footer-links">
            <button onClick={() => setIsMentionsOpen(true)} className="footer-link-btn">Mentions légales</button>
            <button onClick={() => setIsCGVOpen(true)} className="footer-link-btn">CGV</button>
          </div>
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
