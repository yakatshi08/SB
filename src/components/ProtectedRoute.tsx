import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Loader2 } from 'lucide-react';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAuth?: boolean;
  requireRole?: 'admin' | 'client';
  redirectTo?: string;
}

export default function ProtectedRoute({ 
  children, 
  requireAuth = true,
  requireRole,
  redirectTo = '/connexion'
}: ProtectedRouteProps) {
  const { user, loading, isAuthenticated } = useAuth();
  const location = useLocation();

  // Afficher un loader pendant la vérification
  if (loading) {
    return (
      <div className="min-h-screen bg-off-white flex items-center justify-center">
        <Loader2 className="animate-spin text-forest-green" size={48} />
      </div>
    );
  }

  // Si l'authentification est requise mais l'utilisateur n'est pas connecté
  if (requireAuth && !isAuthenticated) {
    // Sauvegarder la page demandée pour rediriger après connexion
    return <Navigate to={redirectTo} state={{ from: location }} replace />;
  }

  // Si un rôle spécifique est requis
  if (requireRole && user?.role !== requireRole) {
    // Rediriger vers le tableau de bord approprié
    if (user?.role === 'admin') {
      return <Navigate to="/admin/dashboard" replace />;
    } else {
      return <Navigate to="/tableau-de-bord" replace />;
    }
  }

  // Si toutes les conditions sont remplies, afficher le contenu
  return <>{children}</>;
}