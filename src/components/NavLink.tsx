import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface NavLinkProps {
  translationKey: string;
  to: string;
  onClick?: () => void;
  className?: string;
  activeClassName?: string;
  exact?: boolean;
}

export default function NavLink({ 
  translationKey, 
  to, 
  onClick, 
  className = "text-gray-700 hover:text-green-700 font-medium transition-colors",
  activeClassName = "text-green-700 border-b-2 border-green-700",
  exact = false 
}: NavLinkProps) {
  const { t } = useTranslation();
  const location = useLocation();
  
  // Vérifier si le lien est actif
  const isActive = exact 
    ? location.pathname === to 
    : location.pathname.startsWith(to);

  // Combiner les classes
  const linkClassName = `${className} ${isActive ? activeClassName : ''}`;

  return (
    <Link 
      to={to}
      onClick={onClick}
      className={linkClassName}
      aria-label={t(translationKey)}
      aria-current={isActive ? 'page' : undefined}
    >
      {t(translationKey)}
    </Link>
  );
}