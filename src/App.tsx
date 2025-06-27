import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import ReservationPage from './pages/ReservationPage';
import ConnexionPage from './pages/ConnexionPage';
import TableauDeBordPage from './pages/TableauDeBordPage';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/reservation" element={<ReservationPage />} />
              <Route path="/connexion" element={<ConnexionPage />} />
              <Route 
                path="/tableau-de-bord" 
                element={
                  <ProtectedRoute>
                    <TableauDeBordPage />
                  </ProtectedRoute>
                } 
              />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;