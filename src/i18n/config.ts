import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const frTranslations = {
  navigation: {
    home: 'Accueil',
    services: 'Services',
    contact: 'Contact',
    booking: 'Réservation',
    dashboard: 'Tableau de bord',
    profile: 'Profil',
    login: 'Connexion',
    logout: 'Déconnexion'
  },
  hero: {
    title: 'Services de Nettoyage',
    subtitle: 'Professionnels',
    description: 'SB Nettoyage vous offre des services de nettoyage d\'excellence avec une intervention rapide et des tarifs transparents. Nos experts certifiés sont disponibles pour tous vos besoins de nettoyage.',
    fastService: 'Service rapide',
    professionalCleaning: 'Nettoyage professionnel',
    bookNow: 'Réserver maintenant',
    emergencyCall: 'Appel d\'urgence',
    certifiedProfessionals: 'Professionnels certifiés',
    guarantee: 'Garantie satisfaction',
    freeQuote: 'Devis gratuit',
    imageAlt: 'Service de nettoyage professionnel'
  },
  services: {
    title: 'Nos Services',
    subtitle: 'Solutions complètes de nettoyage',
    residential: {
      title: 'Nettoyage Résidentiel',
      description: 'Ménage à domicile, nettoyage approfondi'
    },
    commercial: {
      title: 'Nettoyage Commercial', 
      description: 'Bureaux, magasins, espaces professionnels'
    },
    industrial: {
      title: 'Nettoyage Industriel',
      description: 'Usines, entrepôts, espaces industriels'
    },
    specialized: {
      title: 'Services Spécialisés',
      description: 'Nettoyage après travaux, désinfection'
    }
  },
  contact: {
    title: 'Contactez-nous',
    subtitle: 'Nous sommes là pour vous aider',
    phone: 'Téléphone',
    email: 'Email',
    address: 'Adresse',
    hours: 'Horaires',
    form: {
      title: 'Formulaire de contact',
      name: 'Nom complet',
      email: 'Email',
      phone: 'Téléphone',
      subject: 'Sujet',
      message: 'Message',
      privacy: 'J\'accepte la politique de confidentialité',
      send: 'Envoyer le message',
      success: 'Message envoyé avec succès!'
    },
    emergency: {
      title: 'Urgence ?',
      description: 'Appelez-nous directement',
      call: 'Appeler maintenant'
    }
  },
  dashboard: {
    title: 'Tableau de bord',
    welcome: 'Bienvenue',
    overview: 'Vue d\'ensemble',
    bookings: 'Réservations',
    messages: 'Messages',
    invoices: 'Factures',
    stats: {
      totalBookings: 'Total réservations',
      monthlyRevenue: 'CA mensuel',
      pendingTasks: 'Tâches en attente',
      customerSatisfaction: 'Satisfaction client'
    },
    recent: 'Réservations récentes',
    viewAll: 'Voir tout',
    status: {
      confirmed: 'Confirmée',
      pending: 'En cours',
      completed: 'Terminée',
      cancelled: 'Annulée'
    },
    filters: {
      all: 'Toutes',
      thisWeek: 'Cette semaine',
      thisMonth: 'Ce mois',
      thisYear: 'Cette année'
    }
  },
  booking: {
    title: 'Réserver un service',
    subtitle: 'Planifiez votre intervention',
    service: 'Service',
    date: 'Date',
    time: 'Heure',
    details: 'Détails',
    confirm: 'Confirmer la réservation',
    success: 'Réservation confirmée!'
  },
  common: {
    loading: 'Chargement...',
    save: 'Enregistrer',
    cancel: 'Annuler',
    submit: 'Soumettre',
    search: 'Rechercher',
    filter: 'Filtrer',
    export: 'Exporter',
    view: 'Voir',
    edit: 'Modifier',
    delete: 'Supprimer',
    close: 'Fermer',
    back: 'Retour'
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      fr: { translation: frTranslations }
    },
    lng: 'fr', // Français uniquement
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;