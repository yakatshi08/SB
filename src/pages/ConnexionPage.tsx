import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function ConnexionPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      await login(email, password);
      window.location.href = '/tableau-de-bord';
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-off-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <h1 className="text-4xl font-bold text-forest-green text-center mb-8">
            Connexion
          </h1>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-forest-green"
                placeholder="votre@email.com"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                Mot de passe
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-forest-green"
                placeholder="••••••••"
                required
              />
            </div>

            <div className="mb-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  required
                />
                <span className="text-sm text-gray-600">
                  J'accepte la{' '}
                  <Link to="/politique-confidentialite" className="text-forest-green hover:underline">
                    politique de confidentialité
                  </Link>
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-golden-orange text-white py-3 rounded-md font-semibold hover:bg-golden-orange-dark transition-base"
            >
              Se connecter
            </button>
          </form>

          <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-md">
            <p className="text-sm text-blue-700">
              <strong>Mode développement :</strong><br />
              Admin : admin@sb-nettoyage.fr / admin123<br />
              Client : n'importe quel email / mot de passe
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}