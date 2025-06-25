import ServiceCard from '../components/ServiceCard';
import { Briefcase, Building, Home, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Briefcase,
    title: 'Nettoyage de bureaux',
    description: 'Maintenez un environnement de travail propre et sain pour vos employés.',
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
    description: 'Offrez à vos clients un espace commercial impeccable.',
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
    description: 'Des vitres étincelantes pour une luminosité maximale.',
    price: 'À partir de 35€/h',
    features: [
      'Intérieur et extérieur',
      'Accès difficiles',
      'Cadres et rebords',
      'Fréquence adaptable'
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-off-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-forest-green mb-4">
            Nos Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez notre gamme complète de services de nettoyage professionnel
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
      </div>
    </div>
  );
}