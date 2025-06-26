import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, User, Building } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    acceptPolicy: false
  });
  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError('Veuillez remplir tous les champs obligatoires');
      return;
    }
    
    if (!formData.acceptPolicy) {
      setError('Veuillez accepter la politique de confidentialité');
      return;
    }
    
    setLoading(true);
    
    try {
      // TODO: Remplacer par l'appel API réel
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Stocker temporairement le message
      const contactMessage = {
        ...formData,
        date: new Date().toISOString(),
        status: 'envoyé'
      };
      
      localStorage.setItem('lastContactMessage', JSON.stringify(contactMessage));
      
      // Réinitialiser le formulaire
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
        acceptPolicy: false
      });
      
      setSuccess(true);
      
      // Masquer le message de succès après 5 secondes
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError('Erreur lors de l\'envoi du message. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-off-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-forest-green text-center mb-4">
          Contactez-nous
        </h1>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Notre équipe est à votre écoute pour répondre à toutes vos questions et vous proposer 
          des solutions de nettoyage adaptées à vos besoins.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Informations de contact */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Nos coordonnées
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="text-forest-green mr-3 mt-1" size={20} />
                  <div>
                    <p className="font-medium text-gray-800">Téléphone</p>
                    <a href="tel:+33123456789" className="text-gray-600 hover:text-forest-green transition-colors">
                      +33 1 23 45 67 89
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="text-forest-green mr-3 mt-1" size={20} />
                  <div>
                    <p className="font-medium text-gray-800">Email</p>
                    <a href="mailto:contact@sb-nettoyage.fr" className="text-gray-600 hover:text-forest-green transition-colors">
                      contact@sb-nettoyage.fr
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="text-forest-green mr-3 mt-1" size={20} />
                  <div>
                    <p className="font-medium text-gray-800">Zone d'intervention</p>
                    <p className="text-gray-600">Paris & Île-de-France</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="text-forest-green mr-3 mt-1" size={20} />
                  <div>
                    <p className="font-medium text-gray-800">Horaires</p>
                    <p className="text-gray-600">Lun-Ven : 8h00 - 18h00</p>
                    <p className="text-gray-600">Samedi : 9h00 - 16h00</p>
                    <p className="text-gray-600">Dimanche : Fermé</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Carte simple */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Notre zone d'intervention
              </h3>
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="text-forest-green mx-auto mb-2" size={48} />
                  <p className="text-gray-600">Paris & Île-de-France</p>
                  <p className="text-sm text-gray-500 mt-2">Carte interactive bientôt disponible</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                <MessageSquare className="mr-2 text-forest-green" />
                Envoyez-nous un message
              </h2>

              {/* Message de succès */}
              {success && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md mb-6">
                  Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.
                </div>
              )}

              {/* Message d'erreur */}
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md mb-6">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Nom */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      <User className="inline mr-2 text-forest-green" size={18} />
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-forest-green"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      <Mail className="inline mr-2 text-forest-green" size={18} />
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-forest-green"
                      required
                    />
                  </div>

                  {/* Téléphone */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      <Phone className="inline mr-2 text-forest-green" size={18} />
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-forest-green"
                    />
                  </div>

                  {/* Entreprise */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      <Building className="inline mr-2 text-forest-green" size={18} />
                      Entreprise
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-forest-green"
                    />
                  </div>
                </div>

                {/* Sujet */}
                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">
                    Sujet *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-forest-green"
                    required
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="devis">Demande de devis</option>
                    <option value="information">Demande d'information</option>
                    <option value="reclamation">Réclamation</option>
                    <option value="partenariat">Partenariat</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-forest-green"
                    placeholder="Décrivez votre demande en détail..."
                    required
                  />
                </div>

                {/* Politique de confidentialité */}
                <div className="mb-6">
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      name="acceptPolicy"
                      checked={formData.acceptPolicy}
                      onChange={handleChange}
                      className="mt-1 mr-2"
                      required
                    />
                    <span className="text-sm text-gray-600">
                      J'accepte que mes données soient utilisées pour traiter ma demande conformément à la{' '}
                      <a href="/politique-confidentialite" className="text-forest-green hover:underline">
                        politique de confidentialité
                      </a>
                      . *
                    </span>
                  </label>
                </div>

                {/* Boutons */}
                <div className="flex gap-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 bg-golden-orange text-white py-3 rounded-md font-semibold hover:bg-golden-orange-dark transition-base disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {loading ? (
                      'Envoi en cours...'
                    ) : (
                      <>
                        <Send className="mr-2" size={20} />
                        Envoyer le message
                      </>
                    )}
                  </button>
                </div>
              </form>

              <p className="text-sm text-gray-500 mt-4">
                * Champs obligatoires
              </p>
            </div>

            {/* Section d'urgence */}
            <div className="mt-6 bg-gradient-to-r from-forest-green to-forest-green-dark rounded-lg p-6 text-white">
              <h3 className="text-xl font-semibold mb-3">
                Besoin d'une intervention urgente ?
              </h3>
              <p className="mb-4">
                Pour toute demande urgente, n'hésitez pas à nous appeler directement. 
                Notre équipe est disponible pour répondre à vos besoins rapidement.
              </p>
              <a
                href="tel:+33123456789"
                className="inline-flex items-center bg-white text-forest-green px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-base"
              >
                <Phone className="mr-2" size={20} />
                Appelez-nous maintenant
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}