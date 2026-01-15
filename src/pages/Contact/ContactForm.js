import React from 'react';
import { FiSend, FiCheckCircle } from 'react-icons/fi';

const ContactForm = ({ 
  formRef,
  formData, 
  formErrors, 
  isSubmitting, 
  isSubmitted,
  securityCheck,
  securityError,
  handleChange, 
  handleSubmit,
  setSecurityCheck,
  setSecurityError
}) => {
  return (
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
          <input
            type="text"
            name="honeypot"
            value={formData.honeypot}
            onChange={handleChange}
            style={{ display: 'none' }}
            tabIndex="-1"
            autoComplete="off"
          />
          
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
                minLength="2"
                maxLength="100"
              />
              {formErrors.name && <span className="error-message">{formErrors.name}</span>}
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
              {formErrors.email && <span className="error-message">{formErrors.email}</span>}
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
              {formErrors.phone && <span className="error-message">{formErrors.phone}</span>}
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
              minLength="10"
              maxLength="2000"
            ></textarea>
            {formErrors.message && <span className="error-message">{formErrors.message}</span>}
            <small className="char-count">{formData.message.length}/2000 caractères</small>
          </div>
          
          <div className="security-check">
            <label className="checkbox-container">
              <input
                type="checkbox"
                checked={securityCheck}
                onChange={(e) => {
                  setSecurityCheck(e.target.checked);
                  if (e.target.checked) setSecurityError(false);
                }}
              />
              <span className="checkmark"></span>
              <span className="checkbox-label">
                Je confirme être un humain et non un robot 🤖
              </span>
            </label>
            {securityError && (
              <span className="error-message security-error">
                ⚠️ Veuillez confirmer que vous n'êtes pas un robot
              </span>
            )}
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
  );
};

export default ContactForm;
