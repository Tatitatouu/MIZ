import React from 'react';
import './Hero.css';
import logo from '../../assets/logo.svg';

export default function Hero() {
  return (
    <section className="hero-container">
      <div className="hero-background"></div>
      <div className="hero-content">
        <div className="hero-left">
          <img src={logo} alt="Logo" className="big-brand" />
        </div>
        <div className="hero-right">
          <div className="hero-headline-wrapper">
            <h2 className="hero-headline">
              Impôts<br />
              simplifiés
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}