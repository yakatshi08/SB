import { Link } from 'react-router-dom';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  price?: string;
  features?: string[];
  link?: string;
}

export default function ServiceCard({ 
  icon: Icon, 
  title, 
  description, 
  price,
  features = [],
  link = '/reservation'
}: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {/* Icône */}
      <div className="p-6 bg-gradient-to-br from-forest-green to-forest-green-dark">
        <Icon className="w-12 h-12 text-white mx-auto" />
      </div>
      
      {/* Contenu */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-4">
          {description}
        </p>
        
        {/* Prix */}
        {price && (
          <p className="text-2xl font-bold text-forest-green mb-4">
            {price}
          </p>
        )}
        
        {/* Caractéristiques */}
        {features.length > 0 && (
          <ul className="space-y-2 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="text-golden-orange mr-2">✓</span>
                <span className="text-sm text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
        )}
        
        {/* Bouton */}
        <Link
          to={link}
          className="inline-flex items-center justify-center w-full bg-golden-orange text-white px-4 py-2 rounded-md font-medium hover:bg-golden-orange-dark transition-all duration-200 group"
        >
          Réserver
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}