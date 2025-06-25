import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext'; // ✅ import correct
import Header from './components/Header';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';

// Pages
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ReservationPage from './pages/ReservationPage';
import ContactPage from './pages/ContactPage';
import ConnexionPage from './pages/ConnexionPage';
import TableauDeBordPage from './pages/TableauDeBordPage';
import PolitiqueConfidentialitePage from './pages/legal/PolitiqueConfidentialitePage';

function App() {
  // const { user } = useAuth(); // prêt pour une utilisation future si besoin

  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              {/* Pages publiques */}
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/connexion" element={<ConnexionPage />} />
              <Route path="/politique-confidentialite" element={<PolitiqueConfidentialitePage />} />

              {/* Pages protégées */}
              <Route 
                path="/reservation" 
                element={
                  <ProtectedRoute>
                    <ReservationPage />
                  </ProtectedRoute>
                } 
              />

              <Route 
                path="/tableau-de-bord" 
                element={
                  <ProtectedRoute requireRole="client">
                    <TableauDeBordPage />
                  </ProtectedRoute>
                } 
              />

              {/* Espace admin (à venir) */}
              <Route 
                path="/admin/*" 
                element={
                  <ProtectedRoute requireRole="admin">
                    <div className="min-h-screen bg-off-white py-16">
                      <div className="container mx-auto px-4">
                        <h1 className="text-4xl font-bold text-forest-green text-center">
                          Administration
                        </h1>
                        <p className="text-center text-gray-600 mt-4">
                          Interface d'administration en cours de développement
                        </p>
                      </div>
                    </div>
                  </ProtectedRoute>
                } 
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
