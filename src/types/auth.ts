export interface User {
  id: string;
  email: string;
  name: string;
  role: 'client' | 'admin';
  createdAt?: string;
  updatedAt?: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  name: string;
}

export interface AuthResponse {
  token: string;
  user: User;
  expiresIn: number;
}

export interface ApiError {
  message: string;
  errors?: Record<string, string[]>;
  status: number;
}