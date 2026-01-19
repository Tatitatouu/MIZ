import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = "MIZ - Mon Impôt Zen",
  description = "Simplifiez votre déclaration d'impôts avec MIZ. Accompagnement fiscal personnalisé, optimisation fiscale et expertise patrimoniale pour particuliers. Gagnez en sérénité.",
  keywords = "déclaration impôts, optimisation fiscale, conseil fiscal, patrimoine, impôt sur le revenu, réduction impôts, accompagnement fiscal, fiscalité, expert fiscal, mon impôt zen",
  image = "/logo_bleu.svg",
  url = "https://monimpotzen.fr",
  type = "website",
  author = "Mon Impôt Zen",
  canonical = null,
  noIndex = false,
  structuredData = null
}) => {
  const siteUrl = "https://monimpotzen.fr";
  const fullUrl = canonical || `${siteUrl}${url}`;
  const fullImage = image.startsWith('http') ? image : `${siteUrl}${image}`;

  // Données structurées par défaut pour l'organisation
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Mon Impôt Zen",
    "alternateName": "MIZ",
    "url": siteUrl,
    "logo": `${siteUrl}/logo_blanc.svg`,
    "description": "Service d'accompagnement fiscal et d'optimisation de déclaration d'impôts pour particuliers",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "FR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "contact@monimpotzen.fr",
      "contactType": "customer service",
      "availableLanguage": ["French"]
    },
    "sameAs": [],
    "priceRange": "€€",
    "areaServed": {
      "@type": "Country",
      "name": "France"
    },
    "serviceType": [
      "Déclaration d'impôts",
      "Optimisation fiscale",
      "Conseil patrimonial",
      "Accompagnement fiscal"
    ]
  };

  return (
    <Helmet>
      {/* Balises de base */}
      <html lang="fr" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={fullUrl} />
      
      {/* Robots */}
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content="Mon Impôt Zen" />
      <meta property="og:locale" content="fr_FR" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:image:alt" content={title} />
      
      {/* Mobile & PWA */}
      <meta name="theme-color" content="#0a0a0a" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Mon Impôt Zen" />
      
      {/* Géolocalisation */}
      <meta name="geo.region" content="FR" />
      <meta name="geo.placename" content="France" />
      
      {/* Données structurées */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
