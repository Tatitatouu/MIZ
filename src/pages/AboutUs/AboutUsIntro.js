import React from 'react';

const AboutUsIntro = ({ introRef }) => {
  return (
    <section className="aboutus-section" ref={introRef}>
      <div className="aboutus-container">
        <div className="aboutus-intro">
          <h2 className="section-title">
            <span className="title-decoration"></span>
            Notre histoire
          </h2>
          <p className="section-text">
            MIZ est né d'un constat simple : chaque année, de nombreux contribuables commettent des erreurs dans leur déclaration d'impôts, souvent par manque de temps, 
            de compréhension ou face à une réglementation volontairement complexifiée.
          </p>
          <p className="section-text highlight-text">
            Dans le cadre de notre activité de gestionnaires de patrimoine, nous accompagnions déjà nos clients sur leurs déclarations fiscales. 
            Face à la récurrence des erreurs constatées et au stress généré par cet exercice, nous avons décidé de créer 
            <strong> MIZ </strong>, une structure dédiée, afin de décharger totalement le client en lui apportant expertise, conseil, disponibilité et sérénité.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsIntro;
