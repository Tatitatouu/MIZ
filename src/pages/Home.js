import React from 'react';
import Hero from '../components/Hero';
import Hook from '../components/Hook/Hook';
import WhyUs from '../components/WhyUs/WhyUs';
import Steps from '../components/Steps/Steps';
import FAQ from '../components/FAQ/FAQ';

const Home = () => {
  return (
    <>
      <Hero />
      <Hook />
      <WhyUs />
      <Steps />
      <FAQ />
    </>
  );
};

export default Home;
