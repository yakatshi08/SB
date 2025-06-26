import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useLocation } from 'react-router-dom';
import { 
  Calendar, Clock, MapPin, Euro, CheckCircle, Search, Filter,
  Download, Eye, MessageSquare, FileText, User, TrendingUp,
  Activity, Users, DollarSign, BarChart
} from 'lucide-react';

// Types
interface Reservation {
  id: string;
  service: string;
  date: string;
  time: string;
  duration: number;
  address: string;
  price: number;
  status: 'confirmée' | 'en cours' | 'terminée' | 'annulée';
  createdAt: string;
}

interface Stats {
  totalReservations: number;
  monthlyRevenue: number;
  upcomingReservations: number;
  completedServices: number;
}

// Données fictives pour la démo
const generateMockReservations = (): Reservation[] => {
  const services = ['Nettoyage de bureaux', 'Nettoyage résidentiel', 'Nettoyage de vitres', 'Nettoyage de commerce'];
  const statuses: Reservation['status'][] = ['confirmée', 'en cours', 'terminée', 'annulée'];
  
  const reservations: Reservation[] = [];
  
  // Ajouter la dernière réservation si elle existe
  const lastReservation = localStorage.getItem('lastReservation');
  if (lastReservation) {
    const parsed = JSON.parse(lastReservation);
    reservations.push({
      id: '1',
      ...parsed,
      createdAt: new Date().toISOString()
    });
  }
  
  // Générer des réservations fictives
  for (let i = 2; i <= 10; i++) {
    const date = new Date();
    date.setDate(date.getDate() - Math.floor(Math.random() * 60));
    
    reservations.push({
      id: i.toString(),
      service: services[Math.floor(Math.random() * services.length)],
      date: date.toISOString().split('T')[0],
      time: `${Math.floor(Math.random() * 8 + 8)}:00`,
      duration: Math.floor(Math.random() * 3 + 1),
      address: `${Math.floor(Math.random() * 200 + 1)} rue Example, 75001 Paris`,
      price: Math.floor(Math.random() * 200 + 50),
      status: statuses[Math.floor(Math.random() * statuses.length)],
      createdAt: date.toISOString()
    });
  }
  
  return reservations.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
};

export default function TableauDeBordPage() {
  const { user } = useAuth();
  const location = useLocation();
  const message = location.state?.message;
  
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [filteredReservations, setFilteredReservations] = useState<Reservation[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [filterPeriod, setFilterPeriod] = useState<string>('all');
  const [activeTab, setActiveTab] = useState<'overview' | 'reservations' | 'messages' | 'invoices'>('overview');
  
  // Charger les réservations au montage
  useEffect(() => {
    const mockReservations = generateMockReservations();
    setReservations(mockReservations);
    setFilteredReservations(mockReservations);
  }, []);
  
  // Filtrer les réservations
  useEffect(() => {
    let filtered = [...reservations];
    
    // Filtre par recherche
    if (searchTerm) {
      filtered = filtered.filter(res => 
        res.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
        res.address.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filtre par statut
    if (filterStatus !== 'all') {
      filtered = filtered.filter(res => res.status === filterStatus);
    }
    
    // Filtre par période
    if (filterPeriod !== 'all') {
      const now = new Date();
      const filterDate = new Date();
      
      switch (filterPeriod) {
        case 'week':
          filterDate.setDate(now.getDate() - 7);
          break;
        case 'month':
          filterDate.setMonth(now.getMonth() - 1);
          break;
        case 'year':
          filterDate.setFullYear(now.getFullYear() - 1);
          break;
      }
      
      filtered = filtered.filter(res => new Date(res.createdAt) >= filterDate);
    }
    
    setFilteredReservations(filtered);
  }, [searchTerm, filterStatus, filterPeriod, reservations]);
  
  // Calculer les statistiques
  const calculateStats = (): Stats => {
    const now = new Date();
    const thisMonth = now.getMonth();
    const thisYear = now.getFullYear();
    
    const monthlyReservations = reservations.filter(res => {
      const resDate = new Date(res.date);
      return resDate.getMonth() === thisMonth && resDate.getFullYear() === thisYear;
    });
    
    return {
      totalReservations: reservations.length,
      monthlyRevenue: monthlyReservations.reduce((sum, res) => sum + res.price, 0),
      upcomingReservations: reservations.filter(res => 
        res.status === 'confirmée' && new Date(res.date) >= now
      ).length,
      completedServices: reservations.filter(res => res.status === 'terminée').length
    };
  };
  
  const stats = calculateStats();
  
  // Fonction d'export PDF (simulée)
  const exportToPDF = (reservation: Reservation) => {
    alert(`Export PDF pour la réservation #${reservation.id} - Fonctionnalité à implémenter avec le backend`);
  };

  return (
    <div className="min-h-screen bg-off-white py-8">
      <div className="container mx-auto px-4">
        {/* En-tête */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-forest-green mb-2">
            Tableau de bord
          </h1>
          <p className="text-gray-600">
            Bienvenue, <strong>{user?.name || user?.email}</strong> !
          </p>
        </div>
        
        {/* Message de succès */}
        {message && (
          <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md flex items-center">
            <CheckCircle className="mr-2" size={20} />
            {message}
          </div>
        )}
        
        {/* Onglets */}
        <div className="bg-white rounded-lg shadow-sm mb-6">
          <div className="flex flex-wrap border-b">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-6 py-3 font-medium transition-colors ${
                activeTab === 'overview'
                  ? 'text-forest-green border-b-2 border-forest-green'
                  : 'text-gray-600 hover:text-forest-green'
              }`}
            >
              <BarChart className="inline mr-2" size={20} />
              Vue d'ensemble
            </button>
            <button
              onClick={() => setActiveTab('reservations')}
              className={`px-6 py-3 font-medium transition-colors ${
                activeTab === 'reservations'
                  ? 'text-forest-green border-b-2 border-forest-green'
                  : 'text-gray-600 hover:text-forest-green'
              }`}
            >
              <Calendar className="inline mr-2" size={20} />
              Réservations
            </button>
            <button
              onClick={() => setActiveTab('messages')}
              className={`px-6 py-3 font-medium transition-colors ${
                activeTab === 'messages'
                  ? 'text-forest-green border-b-2 border-forest-green'
                  : 'text-gray-600 hover:text-forest-green'
              }`}
            >
              <MessageSquare className="inline mr-2" size={20} />
              Messages
            </button>
            <button
              onClick={() => setActiveTab('invoices')}
              className={`px-6 py-3 font-medium transition-colors ${
                activeTab === 'invoices'
                  ? 'text-forest-green border-b-2 border-forest-green'
                  : 'text-gray-600 hover:text-forest-green'
              }`}
            >
              <FileText className="inline mr-2" size={20} />
              Factures
            </button>
          </div>
        </div>
        
        {/* Contenu des onglets */}
        {activeTab === 'overview' && (
          <div>
            {/* Cartes de statistiques */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between mb-4">
                  <Activity className="text-forest-green" size={32} />
                  <span className="text-sm text-gray-500">Total</span>
                </div>
                <p className="text-2xl font-bold text-gray-800">{stats.totalReservations}</p>
                <p className="text-sm text-gray-600">Réservations</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between mb-4">
                  <DollarSign className="text-golden-orange" size={32} />
                  <span className="text-sm text-gray-500">Ce mois</span>
                </div>
                <p className="text-2xl font-bold text-gray-800">{stats.monthlyRevenue}€</p>
                <p className="text-sm text-gray-600">Chiffre d'affaires</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between mb-4">
                  <TrendingUp className="text-blue-600" size={32} />
                  <span className="text-sm text-gray-500">À venir</span>
                </div>
                <p className="text-2xl font-bold text-gray-800">{stats.upcomingReservations}</p>
                <p className="text-sm text-gray-600">Réservations</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between mb-4">
                  <CheckCircle className="text-green-600" size={32} />
                  <span className="text-sm text-gray-500">Terminés</span>
                </div>
                <p className="text-2xl font-bold text-gray-800">{stats.completedServices}</p>
                <p className="text-sm text-gray-600">Services</p>
              </div>
            </div>
            
            {/* Dernières réservations */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Dernières réservations
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 px-4 text-gray-600">Service</th>
                      <th className="text-left py-2 px-4 text-gray-600">Date</th>
                      <th className="text-left py-2 px-4 text-gray-600">Statut</th>
                      <th className="text-left py-2 px-4 text-gray-600">Prix</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredReservations.slice(0, 5).map((reservation) => (
                      <tr key={reservation.id} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4">{reservation.service}</td>
                        <td className="py-3 px-4">
                          {new Date(reservation.date).toLocaleDateString('fr-FR')}
                        </td>
                        <td className="py-3 px-4">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            reservation.status === 'confirmée' ? 'bg-blue-100 text-blue-800' :
                            reservation.status === 'en cours' ? 'bg-yellow-100 text-yellow-800' :
                            reservation.status === 'terminée' ? 'bg-green-100 text-green-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {reservation.status}
                          </span>
                        </td>
                        <td className="py-3 px-4">{reservation.price}€</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'reservations' && (
          <div>
            {/* Filtres */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Rechercher
                  </label>
                  <div className="relative">
                    <Search className="absolute left-3 top-3 text-gray-400" size={20} />
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Service, adresse..."
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-forest-green"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Statut
                  </label>
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-forest-green"
                  >
                    <option value="all">Tous</option>
                    <option value="confirmée">Confirmée</option>
                    <option value="en cours">En cours</option>
                    <option value="terminée">Terminée</option>
                    <option value="annulée">Annulée</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Période
                  </label>
                  <select
                    value={filterPeriod}
                    onChange={(e) => setFilterPeriod(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-forest-green"
                  >
                    <option value="all">Toutes</option>
                    <option value="week">Cette semaine</option>
                    <option value="month">Ce mois</option>
                    <option value="year">Cette année</option>
                  </select>
                </div>
                
                <div className="flex items-end">
                  <button className="w-full bg-forest-green text-white px-4 py-2 rounded-md hover:bg-forest-green-dark transition-colors flex items-center justify-center">
                    <Filter className="mr-2" size={20} />
                    Filtrer
                  </button>
                </div>
              </div>
            </div>
            
            {/* Liste des réservations */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left py-3 px-4 text-gray-600 font-medium">#ID</th>
                      <th className="text-left py-3 px-4 text-gray-600 font-medium">Service</th>
                      <th className="text-left py-3 px-4 text-gray-600 font-medium">Date & Heure</th>
                      <th className="text-left py-3 px-4 text-gray-600 font-medium">Adresse</th>
                      <th className="text-left py-3 px-4 text-gray-600 font-medium">Statut</th>
                      <th className="text-left py-3 px-4 text-gray-600 font-medium">Prix</th>
                      <th className="text-left py-3 px-4 text-gray-600 font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredReservations.length > 0 ? (
                      filteredReservations.map((reservation) => (
                        <tr key={reservation.id} className="border-b hover:bg-gray-50">
                          <td className="py-4 px-4 font-medium">#{reservation.id}</td>
                          <td className="py-4 px-4">{reservation.service}</td>
                          <td className="py-4 px-4">
                            <div>
                              <p>{new Date(reservation.date).toLocaleDateString('fr-FR')}</p>
                              <p className="text-sm text-gray-500">{reservation.time}</p>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <p className="text-sm">{reservation.address}</p>
                          </td>
                          <td className="py-4 px-4">
                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                              reservation.status === 'confirmée' ? 'bg-blue-100 text-blue-800' :
                              reservation.status === 'en cours' ? 'bg-yellow-100 text-yellow-800' :
                              reservation.status === 'terminée' ? 'bg-green-100 text-green-800' :
                              'bg-red-100 text-red-800'
                            }`}>
                              {reservation.status}
                            </span>
                          </td>
                          <td className="py-4 px-4 font-medium">{reservation.price}€</td>
                          <td className="py-4 px-4">
                            <div className="flex gap-2">
                              <button
                                onClick={() => alert(`Voir détails de la réservation #${reservation.id}`)}
                                className="text-forest-green hover:text-forest-green-dark"
                                title="Voir"
                              >
                                <Eye size={18} />
                              </button>
                              <button
                                onClick={() => exportToPDF(reservation)}
                                className="text-golden-orange hover:text-golden-orange-dark"
                                title="Télécharger PDF"
                              >
                                <Download size={18} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={7} className="py-8 text-center text-gray-500">
                          Aucune réservation trouvée
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'messages' && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Messages
            </h2>
            <div className="text-center py-12 text-gray-500">
              <MessageSquare className="mx-auto mb-4 text-gray-300" size={48} />
              <p>Aucun message pour le moment</p>
              <p className="text-sm mt-2">Les messages de vos clients apparaîtront ici</p>
            </div>
          </div>
        )}
        
        {activeTab === 'invoices' && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Factures
            </h2>
            <div className="text-center py-12 text-gray-500">
              <FileText className="mx-auto mb-4 text-gray-300" size={48} />
              <p>Système de facturation en cours de développement</p>
              <p className="text-sm mt-2">Bientôt, vous pourrez télécharger vos factures ici</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}