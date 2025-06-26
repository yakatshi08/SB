import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LucideIcon } from 'lucide-react';

interface CTAButtonProps {
  to?: string;
  href?: string;
  onClick?: () => void;
  translationKey?: string;
  children?: React.ReactNode;
  icon?: LucideIcon;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
}

export default function CTAButton({
  to,
  href,
  onClick,
  translationKey,
  children,
  icon: Icon,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false
}: CTAButtonProps) {
  const { t } = useTranslation();

  // Classes de base
  const baseClasses = "inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  // Variantes de couleur
  const variants = {
    primary: "bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus:ring-yellow-500",
    secondary: "bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus:ring-green-500",
    outline: "border-2 border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-white focus:ring-yellow-500"
  };

  // Tailles
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  // Combiner toutes les classes
  const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  // Contenu du bouton
  const content = (
    <>
      {Icon && <Icon className={`${size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-6 h-6' : 'w-5 h-5'} ${(children || translationKey) ? 'mr-2' : ''}`} />}
      {translationKey ? t(translationKey) : children}
    </>
  );

  // Si c'est un lien externe
  if (href) {
    return (
      <a
        href={href}
        className={buttonClasses}
        onClick={onClick}
        aria-disabled={disabled}
      >
        {content}
      </a>
    );
  }

  // Si c'est un lien React Router
  if (to) {
    return (
      <Link
        to={to}
        className={buttonClasses}
        onClick={onClick}
        aria-disabled={disabled}
      >
        {content}
      </Link>
    );
  }

  // Si c'est un bouton
  return (
    <button
      onClick={onClick}
      className={buttonClasses}
      disabled={disabled}
    >
      {content}
    </button>
  );
}