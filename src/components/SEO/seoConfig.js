// Configuration SEO centralisée pour toutes les pages

export const siteConfig = {
  siteName: "Mon Impôt Zen",
  siteUrl: "https://monimpotzen.fr",
  defaultDescription: "Simplifiez votre déclaration d'impôts avec MIZ. Accompagnement fiscal personnalisé, optimisation fiscale et expertise patrimoniale pour particuliers.",
  defaultImage: "/logo_bleu.svg",
  twitterHandle: "@monimpotzen",
  email: "contact@monimpotzen.fr"
};

export const pageSEO = {
  home: {
    title: "Mon Impôt Zen (MIZ) | Accompagnement Fiscal En Ligne - Déclaration d'Impôts Simplifiée",
    description: "Mon Impôt Zen (MIZ) - Plus de 70% des contribuables oublient des avantages fiscaux. MIZ vous accompagne pour optimiser votre déclaration d'impôts et réduire votre imposition légalement. Accompagnement 100% en visioconférence.",
    keywords: "mon impôt zen, mon impot zen, monimpotzen, MIZ, déclaration impôts, optimisation fiscale, réduction impôts, conseil fiscal, impôt sur le revenu, déclaration revenus, avantages fiscaux, fiscalité particulier, accompagnement fiscal, expert comptable en ligne, déclaration fiscale en ligne",
    url: "/",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": "https://monimpotzen.fr/#website",
          "url": "https://monimpotzen.fr",
          "name": "Mon Impôt Zen",
          "description": "Service d'accompagnement fiscal et d'optimisation de déclaration d'impôts",
          "inLanguage": "fr-FR"
        },
        {
          "@type": "ProfessionalService",
          "@id": "https://monimpotzen.fr/#organization",
          "name": "Mon Impôt Zen",
          "alternateName": "MIZ",
          "url": "https://monimpotzen.fr",
          "image": "https://monimpotzen.fr/logo_bleu.svg",
          "logo": {
            "@type": "ImageObject",
            "url": "https://monimpotzen.fr/logo_blanc.svg"
          },
          "description": "Service d'accompagnement fiscal personnalisé pour particuliers. Optimisation de déclaration d'impôts et conseil patrimonial.",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "FR",
            "addressLocality": "France"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "email": "contact@monimpotzen.fr",
            "contactType": "customer service",
            "availableLanguage": "French"
          },
          "priceRange": "€€",
          "areaServed": {
            "@type": "Country",
            "name": "France"
          },
          "serviceType": [
            "Déclaration d'impôts",
            "Optimisation fiscale", 
            "Vérification de déclarations",
            "Conseil patrimonial"
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Services fiscaux",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Accompagnement fiscal première année",
                  "description": "Accompagnement complet pour votre déclaration d'impôts"
                },
                "price": "340",
                "priceCurrency": "EUR"
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Suivi fiscal mensuel",
                  "description": "Accompagnement continu après la première année"
                },
                "price": "20",
                "priceCurrency": "EUR",
                "priceSpecification": {
                  "@type": "UnitPriceSpecification",
                  "price": "20",
                  "priceCurrency": "EUR",
                  "unitText": "mois"
                }
              }
            ]
          }
        },
        {
          "@type": "FAQPage",
          "@id": "https://monimpotzen.fr/#faq",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Quels sont vos tarifs ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Nos tarifs sont simples et transparents : 340€ TTC pour la première année pour un accompagnement complet. Les années suivantes, 20€ TTC par mois. Nous proposons également une option au succès : 20% des économies fiscales réalisées sur les trois dernières années."
              }
            },
            {
              "@type": "Question",
              "name": "Pourquoi faire appel à vos services ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Plus de 70% des personnes que nous rencontrons oublient de déclarer au moins un avantage fiscal pouvant réduire leur imposition. Notre expertise vous permet de ne rien oublier et d'optimiser votre situation fiscale en toute légalité."
              }
            },
            {
              "@type": "Question",
              "name": "Les rendez-vous sont-ils en présentiel ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Non, l'accompagnement est 100% en visioconférence. Cela vous permet de bénéficier de notre expertise où que vous soyez, sans contrainte de déplacement, tout en gardant un contact direct et personnalisé."
              }
            },
            {
              "@type": "Question",
              "name": "Combien de temps dure un accompagnement ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "L'accompagnement est annuel avec un suivi régulier. Après la première année à 340€ TTC, vous pouvez continuer à bénéficier de nos services pour 20€ TTC par mois, ce qui représente un accompagnement continu et une tranquillité d'esprit tout au long de l'année."
              }
            }
          ]
        }
      ]
    }
  },
  about: {
    title: "À propos de nous | Mon Impôt Zen - Expertise fiscale et patrimoniale",
    description: "Découvrez l'équipe MIZ : Emir et Tristan, experts fiscaux avec plus de 10 ans d'expérience. Notre mission : rendre la déclaration d'impôts claire, sécurisée et sans stress.",
    keywords: "expert fiscal, conseiller patrimonial, équipe MIZ, Emir, Tristan, expertise fiscale, gestion patrimoine, conseil fiscal personnalisé, accompagnement déclaration",
    url: "/about",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "mainEntity": {
        "@type": "Organization",
        "name": "Mon Impôt Zen",
        "foundingDate": "2024",
        "founders": [
          {
            "@type": "Person",
            "name": "Emir",
            "jobTitle": "Expert fiscal et patrimonial",
            "description": "Fort de 10 ans d'expérience, Emir accompagne ses clients aussi bien sur leurs déclarations fiscales que sur l'ensemble de leur gestion de patrimoine."
          },
          {
            "@type": "Person",
            "name": "Tristan",
            "jobTitle": "Conseiller patrimonial",
            "description": "Tristan bénéficie d'une solide expérience en relation client, immobilier, courtage et gestion de patrimoine, avec une approche très orientée accompagnement et pédagogie."
          }
        ],
        "knowsAbout": [
          "Fiscalité des particuliers",
          "Optimisation fiscale",
          "Gestion de patrimoine",
          "Déclaration d'impôts",
          "Revenus fonciers"
        ]
      }
    }
  },
  contact: {
    title: "Contactez-nous | Mon Impôt Zen - Prenez rendez-vous",
    description: "Une question sur votre déclaration d'impôts ? Contactez l'équipe MIZ par email ou prenez rendez-vous en ligne. Réponse rapide et accompagnement personnalisé.",
    keywords: "contact MIZ, rendez-vous fiscal, question impôts, demande information, prendre rdv, conseiller fiscal, accompagnement fiscal",
    url: "/contact",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "mainEntity": {
        "@type": "Organization",
        "name": "Mon Impôt Zen",
        "email": "contact@monimpotzen.fr",
        "url": "https://monimpotzen.fr/contact",
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "contact@monimpotzen.fr",
          "contactType": "customer service",
          "availableLanguage": "French",
          "hoursAvailable": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "18:00"
          }
        }
      }
    }
  }
};

export default pageSEO;
