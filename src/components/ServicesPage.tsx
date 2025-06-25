import ServiceCard from '../components/ServiceCard';
import { Briefcase, Building, Home, Sparkles, Factory, ShoppingCart, Heart, GraduationCap, Shield, Leaf, Clock } from 'lucide-react';

const services = [
  {
    icon: Briefcase,
    title: 'Nettoyage de bureaux',
    description: 'Maintenez un environnement de travail propre et sain pour vos employés avec notre service professionnel.',
    price: 'À partir de 50€/h',
    features: [
      'Nettoyage quotidien ou hebdomadaire',
      'Désinfection des surfaces',
      'Gestion des déchets',
      'Produits écologiques'
    ]
  },
  {
    icon: Building,
    title: 'Nettoyage de commerces',
    description: 'Offrez à vos clients un espace commercial impeccable qui reflète votre professionnalisme.',
    price: 'À partir de 60€/h',
    features: [
      'Nettoyage après fermeture',
      'Vitres et devantures',
      'Sols et surfaces',
      'Sanitaires clients'
    ]
  },
  {
    icon: Home,
    title: 'Nettoyage résidentiel',
    description: 'Profitez de votre temps libre pendant que nous prenons soin de votre domicile.',
    price: 'À partir de 40€/h',
    features: [
      'Ménage complet',
      'Repassage disponible',
      'Produits hypoallergéniques',
      'Service personnalisé'
    ]
  },
  {
    icon: Sparkles,
    title: 'Nettoyage de vitres',
    description: 'Des vitres étincelantes pour une luminosité maximale dans vos espaces.',
    price: 'À partir de 35€/h',
    features: [
      'Intérieur et extérieur',
      'Accès difficiles',
      'Cadres et rebords',
      'Fréquence adaptable'
    ]
  },
  {
    icon: Factory,
    title: 'Nettoyage industriel',
    description: 'Solutions spécialisées pour entrepôts, usines et espaces industriels.',
    price: 'Sur devis',
    features: [
      'Équipement spécialisé',
      'Normes de sécurité',
      'Grandes surfaces',
      'Horaires flexibles'
    ]
  },
  {
    icon: Heart,
    title: 'Nettoyage médical',
    description: 'Protocoles stricts pour cabinets médicaux et établissements de santé.',
    price: 'Sur devis',
    features: [
      'Désinfection hospitalière',
      'Protocoles COVID-19',
      'Personnel formé',
      'Traçabilité complète'
    ]
  },
  {
    icon: GraduationCap,
    title: 'Nettoyage scolaire',
    description: 'Environnement sain et propre pour les établissements éducatifs.',
    price: 'Sur devis',
    features: [
      'Salles de classe',
      'Espaces communs',
      'Sanitaires',
      'Périodes de vacances'
    ]
  },
  {
    icon: ShoppingCart,
    title: 'Nettoyage de copropriétés',
    description: 'Entretien régulier des parties communes d\'immeubles résidentiels.',
    price: 'Sur devis',
    features: [
      'Halls et escaliers',
      'Parkings',
      'Espaces verts',
      'Gestion des poubelles'
    ]
  }
];

export default function ServicesPage() {
  console.log("ServicesPage chargée"); // AJOUTEZ CETTE LIGNE

  return (
    <div className="min-h-screen bg-off-white py-16">
      <div className="container mx-auto px-4">
        {/* En-tête */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-forest-green mb-4">
            Nos Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez notre gamme complète de services de nettoyage professionnel, 
            adaptés à tous vos besoins avec des solutions sur mesure.
          </p>
        </div>

        {/* Grille de services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              price={service.price}
              features={service.features}
            />
          ))}
        </div>

        {/* Section CTA */}
        <div className="bg-gradient-to-r from-forest-green to-forest-green-dark rounded-lg p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Besoin d'un service personnalisé ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contactez-nous pour discuter de vos besoins spécifiques. 
            Nous créons des solutions sur mesure pour chaque client.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+33123456789"
              className="bg-white text-forest-green px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-base"
            >
              Appelez-nous
            </a>
            <a
              href="/contact"
              className="bg-golden-orange text-white px-8 py-3 rounded-md font-semibold hover:bg-golden-orange-dark transition-base"
            >
              Demander un devis
            </a>
          </div>
        </div>

        {/* Avantages */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-forest-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-forest-green" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Assurance complète
            </h3>
            <p className="text-gray-600">
              Tous nos services sont couverts par une assurance responsabilité civile professionnelle
            </p>
          </div>
          <div className="text-center">
            <div className="bg-forest-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf className="w-8 h-8 text-forest-green" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Produits écologiques
            </h3>
            <p className="text-gray-600">
              Nous utilisons exclusivement des produits respectueux de l'environnement
            </p>
          </div>
          <div className="text-center">
            <div className="bg-forest-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-forest-green" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Disponibilité 6j/7
            </h3>
            <p className="text-gray-600">
              Nous intervenons du lundi au samedi selon vos disponibilités
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
