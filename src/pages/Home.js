import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Home.css';

export const Home = () => {
  const titleRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
    ).fromTo(
      ctaRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
      '-=0.4'
    );
  }, []);

  return (
    <div className="home">
      <div className="hero" ref={titleRef}>
        <h2>Bienvenue sur MIZ</h2>
        <p>Gérez vos impôts simplement et en toute confidentialité</p>
      </div>
      <div className="cta-section" ref={ctaRef}>
        <button className="btn btn-primary">Commencer</button>
      </div>
    </div>
  );
};
