# Images SEO requises pour Mon Impôt Zen

## À créer et placer dans le dossier `/public` :

### 1. Images Open Graph (partage réseaux sociaux)

#### og-image.jpg
- **Dimensions** : 1200 x 630 pixels
- **Format** : JPG (optimisé pour le web, < 200 KB)
- **Contenu suggéré** :
  - Logo MIZ bien visible
  - Texte : "Mon Impôt Zen - Simplifiez votre déclaration d'impôts"
  - Couleurs de la marque (fond sombre #0a0a0a, accents)
  - Image professionnelle et épurée

#### og-about.jpg (optionnel)
- **Dimensions** : 1200 x 630 pixels
- **Contenu** : Image pour la page "À propos"

### 2. Favicons et icônes PWA

#### favicon.ico
- **Dimensions** : Multi-tailles (16x16, 32x32, 48x48)
- **Format** : ICO

#### favicon-16x16.png
- **Dimensions** : 16 x 16 pixels
- **Format** : PNG transparent

#### favicon-32x32.png
- **Dimensions** : 32 x 32 pixels
- **Format** : PNG transparent

#### apple-touch-icon.png
- **Dimensions** : 180 x 180 pixels
- **Format** : PNG
- **Usage** : Icône pour iOS (ajout à l'écran d'accueil)

#### logo192.png
- **Dimensions** : 192 x 192 pixels
- **Format** : PNG transparent
- **Usage** : Icône PWA standard

#### logo512.png
- **Dimensions** : 512 x 512 pixels
- **Format** : PNG transparent
- **Usage** : Icône PWA haute résolution, splash screen

### 3. Logo optimisé

Le logo `/public/logo_blanc.svg` est déjà en place. Assurez-vous qu'il est optimisé :
- Supprimer les métadonnées inutiles
- Minifier le SVG
- Vérifier l'accessibilité (texte alternatif dans le code)

---

## Outils recommandés pour créer ces images :

1. **Canva** (gratuit) - Pour créer les images OG
2. **Figma** (gratuit) - Pour le design des icônes
3. **RealFaviconGenerator.net** - Pour générer tous les favicons à partir d'une seule image
4. **Squoosh.app** - Pour optimiser/compresser les images

---

## Checklist SEO Images

- [ ] og-image.jpg créé (1200x630)
- [ ] favicon-16x16.png créé
- [ ] favicon-32x32.png créé  
- [ ] apple-touch-icon.png créé (180x180)
- [ ] logo192.png créé/vérifié
- [ ] logo512.png créé/vérifié
- [ ] Toutes les images optimisées (< 200 KB pour OG, < 50 KB pour icônes)

---

## Test SEO

Après avoir ajouté les images, testez votre SEO avec :

1. **Google Rich Results Test** : https://search.google.com/test/rich-results
2. **Facebook Sharing Debugger** : https://developers.facebook.com/tools/debug/
3. **Twitter Card Validator** : https://cards-dev.twitter.com/validator
4. **Lighthouse** (dans Chrome DevTools) : Onglet Audits > SEO
5. **PageSpeed Insights** : https://pagespeed.web.dev/
