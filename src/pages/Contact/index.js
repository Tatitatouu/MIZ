import React, { useRef } from 'react';
import './Contact.css';
import SEO from '../../components/SEO';
import { pageSEO } from '../../components/SEO/seoConfig';
import ContactHero from './ContactHero';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import { useContactForm } from './useContactForm';
import { useContactAnimations } from './useContactAnimations';

const Contact = () => {
  const heroRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);
  
  const { title, description, keywords, url, structuredData } = pageSEO.contact;
  
  const formProps = useContactForm();
  useContactAnimations(heroRef, formRef, infoRef);

  const handleCalendarClick = () => {
    window.open('https://calendly.com/contact-monimpotzen', '_blank');
  };

  return (
    <div className="contact-page">
      <SEO 
        title={title}
        description={description}
        keywords={keywords}
        url={url}
        structuredData={structuredData}
      />
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
