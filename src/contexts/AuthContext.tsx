import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

interface User {
  id: string;
  email: string;
  name: string;
  role: 'client' | 'admin';
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Configuration API (à modifier quand le backend sera prêt)
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

// Configuration Axios
axios.defaults.baseURL = API_URL;
axios.defaults.headers.common['Content-Type'] = 'application/json';

// Intercepteur pour ajouter le token JWT
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Fonction pour rafraîchir les données utilisateur
  const refreshUser = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        // TODO: remplacer par l’appel API réel : const response = await axios.get('/auth/me');
        // setUser(response.data.user);

        // Simulation
        const simulatedUser = {
          id: '1',
          email: 'test@sb-nettoyage.fr',
          name: 'Test User',
          role: 'client' as const
        };
        setUser(simulatedUser);
      } catch (error) {
        localStorage.removeItem('token');
        setUser(null);
      }
    }
  };

  // Vérifier le token au chargement
  useEffect(() => {
    const checkAuth = async () => {
      await refreshUser();
      setLoading(false);
    };
    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      // Simulation
      if (email === 'admin@sb-nettoyage.fr' && password === 'admin123') {
        const mockToken = 'mock-jwt-token-admin';
        const mockUser = {
          id: '1',
          email,
          name: 'Admin',
          role: 'admin' as const
        };
        localStorage.setItem('token', mockToken);
        setUser(mockUser);
      } else if (email && password) {
        const mockToken = 'mock-jwt-token-client';
        const mockUser = {
          id: '2',
          email,
          name: 'Client',
          role: 'client' as const
        };
        localStorage.setItem('token', mockToken);
        setUser(mockUser);
      } else {
        throw new Error('Email ou mot de passe incorrect');
      }
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Erreur de connexion');
    }
  };

  const register = async (email: string, password: string, name: string) => {
    try {
      // Simulation
      const mockToken = 'mock-jwt-token-new';
      const mockUser = {
        id: '3',
        email,
        name,
        role: 'client' as const
      };
      localStorage.setItem('token', mockToken);
      setUser(mockUser);
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Erreur lors de l\'inscription');
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    window.location.href = '/';
  };

  return (
    <AuthContext.Provider 
      value={{
        user,
        loading,
        login,
        register,
        logout,
        isAuthenticated: !!user,
        refreshUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
