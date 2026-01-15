import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useContactAnimations = (heroRef, formRef, infoRef) => {
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
  }, [heroRef, formRef, infoRef]);
};
