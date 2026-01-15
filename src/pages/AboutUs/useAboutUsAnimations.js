import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useAboutUsAnimations = (heroRef, introRef, missionRef, valuesRef, foundersRef, approachRef) => {
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

    // Animation progressive au scroll (mobile)
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
      // Animation progressive au scroll - glissement simple
      gsap.fromTo('[data-step="1"]', 
        { opacity: 0, x: -30 },
        { 
          opacity: 1, x: 0, duration: 0.5, ease: 'power2.out',
          scrollTrigger: { 
            trigger: '[data-step="1"]', 
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );

      gsap.to('[data-connector="1"]', {
        scaleY: 1, duration: 0.4, ease: 'power2.inOut',
        scrollTrigger: { 
          trigger: '[data-step="1"]', 
          start: 'top 75%',
          toggleActions: 'play none none none'
        }
      });

      gsap.fromTo('[data-step="2"]', 
        { opacity: 0, x: -30 },
        { 
          opacity: 1, x: 0, duration: 0.5, ease: 'power2.out',
          scrollTrigger: { 
            trigger: '[data-connector="1"]', 
            start: 'top 70%',
            toggleActions: 'play none none none'
          }
        }
      );

      gsap.to('[data-connector="2"]', {
        scaleY: 1, duration: 0.4, ease: 'power2.inOut',
        scrollTrigger: { 
          trigger: '[data-step="2"]', 
          start: 'top 65%',
          toggleActions: 'play none none none'
        }
      });

      gsap.fromTo('[data-step="3"]', 
        { opacity: 0, x: -30 },
        { 
          opacity: 1, x: 0, duration: 0.5, ease: 'power2.out',
          scrollTrigger: { 
            trigger: '[data-connector="2"]', 
            start: 'top 60%',
            toggleActions: 'play none none none'
          }
        }
      );
    } else {
      gsap.fromTo('.approach-step',
        { opacity: 0, y: 80 },
        {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.2,
          scrollTrigger: { trigger: approachRef.current, start: 'top 75%' }
        }
      );
      
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
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [heroRef, introRef, missionRef, valuesRef, foundersRef, approachRef]);
};
