import React, { useRef } from 'react';
import './AboutUs.css';
import SEO from '../../components/SEO';
import { pageSEO } from '../../components/SEO/seoConfig';
import AboutUsHero from './AboutUsHero';
import AboutUsIntro from './AboutUsIntro';
import AboutUsMission from './AboutUsMission';
import AboutUsValues from './AboutUsValues';
import AboutUsFounders from './AboutUsFounders';
import AboutUsApproach from './AboutUsApproach';
import { useAboutUsAnimations } from './useAboutUsAnimations';
import { values, founders, steps } from './aboutUsData';

const AboutUs = () => {
  const heroRef = useRef(null);
  const introRef = useRef(null);
  const missionRef = useRef(null);
  const valuesRef = useRef(null);
  const foundersRef = useRef(null);
  const approachRef = useRef(null);
  
  const { title, description, keywords, url, structuredData } = pageSEO.about;

  useAboutUsAnimations(heroRef, introRef, missionRef, valuesRef, foundersRef, approachRef);

  return (
    <div className="aboutus-page">
      <SEO 
        title={title}
        description={description}
        keywords={keywords}
        url={url}
        structuredData={structuredData}
      />
      <AboutUsHero heroRef={heroRef} />
      <AboutUsIntro introRef={introRef} />
      <AboutUsMission missionRef={missionRef} />
      <AboutUsValues valuesRef={valuesRef} values={values} />
      <AboutUsFounders foundersRef={foundersRef} founders={founders} />
      <AboutUsApproach approachRef={approachRef} steps={steps} />
    </div>
  );
};

export default AboutUs;
