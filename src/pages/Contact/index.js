import React, { useRef } from 'react';
import './Contact.css';
import ContactHero from './ContactHero';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import { useContactForm } from './useContactForm';
import { useContactAnimations } from './useContactAnimations';

const Contact = () => {
  const heroRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);
  
  const formProps = useContactForm();
  useContactAnimations(heroRef, formRef, infoRef);

  const handleCalendarClick = () => {
    window.open('https://calendly.com/contact-monimpotzen', '_blank');
  };

  return (
    <div className="contact-page">
      <ContactHero heroRef={heroRef} />
      
      <section className="contact-main">
        <div className="contact-container">
          <ContactForm formRef={formRef} {...formProps} />
          <ContactInfo infoRef={infoRef} onCalendarClick={handleCalendarClick} />
        </div>
      </section>
    </div>
  );
};

export default Contact;
