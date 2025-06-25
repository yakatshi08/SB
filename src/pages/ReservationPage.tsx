import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, MapPin, Home, Briefcase, Building, Sparkles, Euro } from 'lucide-react';

const services = [
  { id: 'bureaux', name: 'Nettoyage de bureaux', icon: Briefcase, price: 50 },
  { id: 'commerce', name: 'Nettoyage de commerce', icon: Building, price: 60 },
  { id: 'residence', name: 'Nettoyage résidentiel', icon: Home, price: 40 },
  { id: 'vitres', name: 'Nettoyage de vitres', icon: Sparkles, price: 35 },
];

const timeSlots = ['08:00', '09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'];

export default function ReservationPage() {
  const navigate = useNavigate();
  
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [duration, setDuration] = useState(2);
  const [address, setAddress] = useState('');
  
  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 2);
  const minDateStr = minDate.toISOString().split('T')[0];
  
  const calculatePrice = () => {
    if (!selectedService) return 0;
    const service = services.find(s => s.id === selectedService);
    return service ? service.price * duration : 0;
  };
  
  const totalPrice = calculatePrice() * 1.20; // Avec TVA 20%
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedService || !selectedDate || !selectedTime || !address) {
      alert('Veuillez remplir tous les champs');
      return;
    }
    
    // Stocker la réservation
    const reservation = {
      service: services.find(s => s.id === selectedService)?.name,
      date: selectedDate,
      time: selectedTime,
      duration,
      address,
      price: totalPrice,
      status: 'confirmée'
    };
    
    localStorage.setItem('lastReservation', JSON.stringify(reservation));
    navigate('/tableau-de-bord', { state: { message: 'Votre réservation a été confirmée !' } });
  };

  return (
    <div className="min-h-screen bg-off-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-forest-green text-center mb-12">
          Réservation de service
        </h1>

        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8">
          {/* Sélection du service */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Type de service
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <label
                    key={service.id}
                    className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      selectedService === service.id 
                        ? 'border-forest-green bg-forest-green/5' 
                        : 'border-gray-200 hover:border-forest-green/50'
                    }`}
                  >
                    <input
                      type="radio"
                      name="service"
                      value={service.id}
                      checked={selectedService === service.id}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="sr-only"
                    />
                    <Icon className="mr-3 text-forest-green" size={20} />
                    <div className="flex-1">
                      <p className="font-medium">{service.name}</p>
                      <p className="text-sm text-gray-600">{service.price}€/heure</p>
                    </div>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Date et heure */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                <Calendar className="inline mr-2 text-forest-green" size={20} />
                Date du service
              </label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                min={minDateStr}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-forest-green"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                <Clock className="inline mr-2 text-forest-green" size={20} />
                Créneau horaire
              </label>
              <select
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-forest-green"
                required
              >
                <option value="">Sélectionner un créneau</option>
                {timeSlots.map((time) => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Durée */}
          <div className="mb-8">
            <label className="block text-gray-700 font-medium mb-2">
              Durée estimée (heures)
            </label>
            <input
              type="number"
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
              min="1"
              max="8"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-forest-green"
              required
            />
          </div>

          {/* Adresse */}
          <div className="mb-8">
            <label className="block text-gray-700 font-medium mb-2">
              <MapPin className="inline mr-2 text-forest-green" size={20} />
              Adresse d'intervention
            </label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="123 rue de la Paix, 75001 Paris"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-forest-green"
              required
            />
          </div>

          {/* Récapitulatif du prix */}
          {selectedService && (
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <Euro className="mr-2 text-forest-green" size={20} />
                Devis estimatif
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between text-gray-700">
                  <span>Total HT</span>
                  <span>{calculatePrice().toFixed(2)}€</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>TVA (20%)</span>
                  <span>{(calculatePrice() * 0.20).toFixed(2)}€</span>
                </div>
                <div className="flex justify-between text-lg font-semibold text-forest-green pt-2 border-t">
                  <span>Total TTC</span>
                  <span>{totalPrice.toFixed(2)}€</span>
                </div>
              </div>
            </div>
          )}

          {/* Boutons */}
          <div className="flex gap-4">
            <button
              type="submit"
              className="flex-1 bg-golden-orange text-white py-3 rounded-md font-semibold hover:bg-golden-orange-dark transition-base"
            >
              Confirmer la réservation
            </button>
            <button
              type="button"
              onClick={() => navigate('/')}
              className="px-6 py-3 border border-gray-300 rounded-md font-medium hover:bg-gray-50 transition-base"
            >
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}