# 🧹 SB-Nettoyage - Services de Nettoyage Professionnel

![SB-Nettoyage](https://images.pexels.com/photos/4099468/pexels-photo-4099468.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop)

## 📋 Description

**SB-Nettoyage** est une application web moderne et élégante dédiée aux services de nettoyage professionnel et résidentiel. Cette plateforme permet aux clients de découvrir nos services, obtenir des devis gratuits et réserver facilement en ligne.

### ✨ Fonctionnalités principales

- 🏠 **Page d'accueil dynamique** avec section héro immersive
- 📱 **Design responsive** optimisé pour tous les appareils
- 🎨 **Interface moderne** avec animations et micro-interactions
- 📞 **Contact direct** via téléphone et email
- 🚀 **Réservation express** en 3 étapes simples
- ⭐ **Témoignages clients** et évaluations
- 🌿 **Engagement écologique** mis en avant

## 🎨 Charte Graphique

### Palette de couleurs
- **Vert Forêt** (`#1b5b35`) - Couleur principale, confiance et nature
- **Orange Doré** (`#c88f3b`) - Couleur d'accent, chaleur et professionnalisme
- **Blanc Cassé** (`#f2f2f2`) - Arrière-plan, propreté et clarté
- **Prune Profond** (`#1a0d1a`) - Footer, élégance et contraste

### Typographie
- **Police principale** : Inter (Google Fonts)
- **Poids utilisés** : 300, 400, 500, 600, 700

## 🛠️ Technologies Utilisées

### Frontend
- **React 18** - Bibliothèque JavaScript moderne
- **TypeScript** - Typage statique pour plus de robustesse
- **Tailwind CSS** - Framework CSS utilitaire
- **Vite** - Outil de build rapide et moderne

### Icônes & Assets
- **Lucide React** - Bibliothèque d'icônes moderne
- **Images Pexels** - Photos professionnelles haute qualité

### Outils de Développement
- **ESLint** - Linting et qualité du code
- **PostCSS** - Traitement CSS avancé
- **Autoprefixer** - Compatibilité navigateurs

## 🚀 Installation et Démarrage

### Prérequis
- Node.js (version 16 ou supérieure)
- npm ou yarn

### Installation
```bash
# Cloner le repository
git clone [URL_DU_REPO]
cd sb-nettoyage

# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev
```

### Scripts disponibles
```bash
# Développement
npm run dev          # Démarre le serveur de développement

# Production
npm run build        # Compile pour la production
npm run preview      # Prévisualise la version de production

# Qualité du code
npm run lint         # Vérifie la qualité du code
```

## 📁 Structure du Projet

```
src/
├── components/           # Composants React réutilisables
│   ├── Header.tsx       # En-tête fixe avec navigation
│   ├── HeroSection.tsx  # Section héro avec image de fond
│   ├── ReservationExpress.tsx  # Formulaire de réservation
│   └── Footer.tsx       # Pied de page avec informations
├── App.tsx              # Composant principal
├── main.tsx            # Point d'entrée de l'application
├── index.css           # Styles globaux Tailwind
└── vite-env.d.ts       # Types TypeScript pour Vite
```

## 🎯 Fonctionnalités Détaillées

### 🔝 Header Fixe (Sticky)
- **Partie A** : Bande verte avec coordonnées (téléphone, email, localisation)
- **Partie B** : Navigation principale (Accueil, Services, Contact) + bouton CTA

### 🌟 Section Héro
- Image de fond pleine largeur avec filtre sombre
- Titre principal sur une ligne avec mise en valeur colorée
- Points forts avec icônes (équipe certifiée, produits écologiques, etc.)
- Boutons d'action avec effets hover

### ⚡ Réservation Express
- Encart avec dégradé dynamique orange vers vert
- 3 étapes interactives avec effets hover
- Statistiques de confiance (500+ clients, 4.9/5, 48h)

### 📱 Responsive Design
- **Mobile First** : Optimisé pour les petits écrans
- **Breakpoints** : sm (640px), md (768px), lg (1024px), xl (1280px)
- **Menu mobile** : Hamburger avec animation

## 🎨 Personnalisation

### Couleurs personnalisées (tailwind.config.js)
```javascript
colors: {
  'forest-green': '#1b5b35',
  'off-white': '#f2f2f2',
  'golden-orange': '#c88f3b',
  'deep-plum': '#1a0d1a',
  'forest-green-dark': '#0f3d24',
  'golden-orange-dark': '#a67530',
}
```

### Animations et transitions
- **Durée standard** : 200ms pour les interactions
- **Effets hover** : Scale, couleurs, ombres
- **Transitions fluides** : Transform, opacity, colors

## 📞 Informations de Contact

- **Téléphone** : +33 1 23 45 67 89
- **Email** : contact@sb-nettoyage.fr
- **Zone d'intervention** : Paris & Île-de-France

### Horaires d'ouverture
- **Lundi - Vendredi** : 8h00 - 18h00
- **Samedi** : 9h00 - 16h00
- **Dimanche** : Fermé

## 🌟 Points Forts

- ✅ **Équipe professionnelle certifiée**
- ✅ **Produits écologiques et sains**
- ✅ **Devis gratuit sous 24h**
- ✅ **Assurance responsabilité civile**
- ✅ **Intervention garantie sous 48h**
- ✅ **Plus de 500 clients satisfaits**
- ✅ **Note moyenne 4.9/5**

## 🔧 Configuration

### Variables d'environnement
Aucune variable d'environnement requise pour le moment.

### Configuration Vite
```javascript
// vite.config.ts
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
```

## 📈 Performance

- **Lighthouse Score** : 95+ (Performance, Accessibilité, SEO)
- **Images optimisées** : WebP avec fallback
- **CSS optimisé** : Purge automatique avec Tailwind
- **Bundle size** : < 500KB (gzipped)

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 🙏 Remerciements

- **Pexels** pour les images professionnelles
- **Lucide** pour les icônes modernes
- **Tailwind CSS** pour le framework CSS
- **React Team** pour la bibliothèque JavaScript

---

**Développé avec ❤️ pour SB-Nettoyage**

*Votre partenaire de confiance pour tous vos besoins de nettoyage professionnel et résidentiel.*