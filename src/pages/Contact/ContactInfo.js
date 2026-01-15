import React from 'react';
import { FiMail, FiMapPin, FiCalendar, FiClock } from 'react-icons/fi';

const ContactInfo = ({ infoRef, onCalendarClick }) => {
  return (
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

      <div className="calendar-cta">
        <h3>Préférez-vous un rendez-vous ?</h3>
        <p>Réservez directement un créneau avec notre équipe.</p>
        <button className="calendar-btn" onClick={onCalendarClick}>
          <FiCalendar size={20} />
          <span>Prendre rendez-vous</span>
        </button>
      </div>
    </div>
  );
};

export default ContactInfo;
