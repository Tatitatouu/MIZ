import { useState } from 'react';
import { validateForm } from './formValidation';

export const useContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    honeypot: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [lastSubmitTime, setLastSubmitTime] = useState(0);
  const [formErrors, setFormErrors] = useState({});
  const [securityCheck, setSecurityCheck] = useState(false);
  const [securityError, setSecurityError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    if (formErrors[name]) {
      setFormErrors({ ...formErrors, [name]: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.honeypot) {
      console.log('Bot détecté');
      return;
    }
    
    if (!securityCheck) {
      setSecurityError(true);
      return;
    }
    setSecurityError(false);
    
    const currentTime = Date.now();
    const timeSinceLastSubmit = currentTime - lastSubmitTime;
    if (timeSinceLastSubmit < 60000) {
      const remainingSeconds = Math.ceil((60000 - timeSinceLastSubmit) / 1000);
      alert(`Veuillez attendre ${remainingSeconds} secondes avant de soumettre un nouveau message.`);
      return;
    }
    
    const errors = validateForm(formData);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    setIsSubmitting(true);
    setFormErrors({});
    
    try {
      const { honeypot, ...dataToSend } = formData;
      
      const response = await fetch('https://formspree.io/f/mnjagzkv', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSend)
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '', honeypot: '' });
        setSecurityCheck(false);
        setLastSubmitTime(currentTime);
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

  return {
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
  };
};
