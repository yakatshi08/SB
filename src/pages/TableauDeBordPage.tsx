import { useAuth } from '../contexts/AuthContext';
import { useLocation } from 'react-router-dom';
import { Calendar, Clock, MapPin, Euro, CheckCircle, Sparkles } from 'lucide-react';

export default function TableauDeBordPage() {
  const { user } = useAuth();
  const location = useLocation();
  const message = location.state?.message;
  
  const lastReservation = localStorage.getItem('lastReservation');
  const reservation = lastReservation ? JSON.parse(lastReservation) : null;

  return (
    <div className="min-h-screen bg-off-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-forest-green text-center mb-12">
          Tableau de bord
        </h1>
        
        {message && (
          <div className="max-w-2xl mx-auto mb-8 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md flex items-center">
            <CheckCircle className="mr-2" size={20} />
            {message}
          </div>
        )}
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <p className="text-gray-600 mb-4">
              Bienvenue, <strong>{user?.name || user?.email}</strong> !
            </p>
            <p className="text-gray-600">
              Gérez vos réservations et suivez l'historique de vos services depuis cet espace.
            </p>
          </div>
          
          {reservation && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Votre dernière réservation
              </h2>
              <div className="space-y-3">
                <div className="flex items-center text-gray-700">
                  <Sparkles className="mr-3 text-forest-green" size={20} />
                  <span className="font-medium">Service :</span>
                  <span className="ml-2">{reservation.service}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Calendar className="mr-3 text-forest-green" size={20} />
                  <span className="font-medium">Date :</span>
                  <span className="ml-2">{new Date(reservation.date).toLocaleDateString('fr-FR')}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Clock className="mr-3 text-forest-green" size={20} />
                  <span className="font-medium">Heure :</span>
                  <span className="ml-2">{reservation.time}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Euro className="mr-3 text-forest-green" size={20} />
                  <span className="font-medium">Montant TTC :</span>
                  <span className="ml-2">{reservation.price.toFixed(2)}€</span>
                </div>
                <div className="pt-3 mt-3 border-t">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    <CheckCircle className="mr-1" size={16} />
                    {reservation.status}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}