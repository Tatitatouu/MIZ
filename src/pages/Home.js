import React from 'react';
import SEO from '../components/SEO';
import { pageSEO } from '../components/SEO/seoConfig';
import Hero from '../components/Hero';
import Hook from '../components/Hook/Hook';
import WhyUs from '../components/WhyUs/WhyUs';
import Steps from '../components/Steps/Steps';
import FAQ from '../components/FAQ/FAQ';

const Home = () => {
  const { title, description, keywords, url, structuredData } = pageSEO.home;
  
  return (
    <>
      <SEO 
        title={title}
        description={description}
        keywords={keywords}
        url={url}
        structuredData={structuredData}
      />
      <Hero />
      <Hook />
      <WhyUs />
      <Steps />
      <FAQ />
    </>
  );
};

export default Home;
