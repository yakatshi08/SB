import { Shield, Mail, Lock, Database, Clock, FileText } from 'lucide-react';

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="min-h-screen bg-off-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-forest-green text-center mb-8">
          Politique de Confidentialité
        </h1>

        <div className="bg-white rounded-lg shadow-md p-8">
          <p className="text-gray-600 mb-6 text-center">
            Dernière mise à jour : 25 juin 2025
          </p>

          {/* Introduction */}
          <section className="mb-8">
            <div className="flex items-center mb-4">
              <Shield className="text-forest-green mr-3" size={24} />
              <h2 className="text-2xl font-semibold text-forest-green">
                Introduction
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              SB-Nettoyage s'engage à protéger la confidentialité de vos données personnelles.
              Cette politique de confidentialité explique comment nous collectons, utilisons,
              stockons et protégeons vos informations conformément au Règlement Général sur
              la Protection des Données (RGPD).
            </p>
          </section>

          {/* Données collectées */}
          <section className="mb-8">
            <div className="flex items-center mb-4">
              <Database className="text-forest-green mr-3" size={24} />
              <h2 className="text-2xl font-semibold text-forest-green">
                Données que nous collectons
              </h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Données d'identification :</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Nom et prénom</li>
                  <li>Adresse email</li>
                  <li>Numéro de téléphone</li>
                  <li>Adresse postale (pour les services)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Données de connexion :</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Identifiants de connexion</li>
                  <li>Adresse IP</li>
                  <li>Données de navigation (cookies)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Données de service :</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Historique des réservations</li>
                  <li>Préférences de service</li>
                  <li>Communications avec notre équipe</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Utilisation des données */}
          <section className="mb-8">
            <div className="flex items-center mb-4">
              <FileText className="text-forest-green mr-3" size={24} />
              <h2 className="text-2xl font-semibold text-forest-green">
                Comment nous utilisons vos données
              </h2>
            </div>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Pour traiter vos réservations et fournir nos services</li>
              <li>Pour communiquer avec vous concernant vos réservations</li>
              <li>Pour améliorer nos services et personnaliser votre expérience</li>
              <li>Pour respecter nos obligations légales et comptables</li>
              <li>Pour vous envoyer des informations marketing (avec votre consentement)</li>
            </ul>
          </section>

          {/* Protection des données */}
          <section className="mb-8">
            <div className="flex items-center mb-4">
              <Lock className="text-forest-green mr-3" size={24} />
              <h2 className="text-2xl font-semibold text-forest-green">
                Protection de vos données
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles
              appropriées pour protéger vos données personnelles contre tout accès non autorisé,
              modification, divulgation ou destruction.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Chiffrement des données sensibles</li>
              <li>Accès restreint aux données personnelles</li>
              <li>Formation régulière de notre personnel</li>
              <li>Audits de sécurité périodiques</li>
            </ul>
          </section>

          {/* Durée de conservation */}
          <section className="mb-8">
            <div className="flex items-center mb-4">
              <Clock className="text-forest-green mr-3" size={24} />
              <h2 className="text-2xl font-semibold text-forest-green">
                Durée de conservation
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Nous conservons vos données personnelles uniquement pendant la durée nécessaire
              aux finalités pour lesquelles elles ont été collectées :
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mt-4">
              <li>Données clients : 3 ans après la dernière interaction</li>
              <li>Données de facturation : 10 ans (obligation légale)</li>
              <li>Cookies : 13 mois maximum</li>
            </ul>
          </section>

          {/* Vos droits */}
          <section className="mb-8">
            <div className="flex items-center mb-4">
              <Shield className="text-forest-green mr-3" size={24} />
              <h2 className="text-2xl font-semibold text-forest-green">
                Vos droits RGPD
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Droit d'accès :</strong> obtenir une copie de vos données</li>
              <li><strong>Droit de rectification :</strong> corriger vos données inexactes</li>
              <li><strong>Droit à l'effacement :</strong> demander la suppression de vos données</li>
              <li><strong>Droit à la limitation :</strong> limiter le traitement de vos données</li>
              <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
              <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
            </ul>
          </section>

          {/* Contact */}
          <section className="mb-8">
            <div className="flex items-center mb-4">
              <Mail className="text-forest-green mr-3" size={24} />
              <h2 className="text-2xl font-semibold text-forest-green">
                Nous contacter
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Pour exercer vos droits ou pour toute question concernant vos données personnelles,
              vous pouvez nous contacter :
            </p>
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="text-gray-700">
                <strong>Délégué à la Protection des Données (DPO)</strong><br />
                Email : dpo@sb-nettoyage.fr<br />
                Adresse : SB-Nettoyage, Service DPO<br />
                75001 Paris, France
              </p>
            </div>
            <p className="text-gray-700 mt-4">
              Vous avez également le droit de déposer une plainte auprès de la CNIL
              (Commission Nationale de l'Informatique et des Libertés) si vous estimez
              que vos droits ne sont pas respectés.
            </p>
          </section>

          {/* Cookies */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-forest-green mb-4">
              Politique de cookies
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Notre site utilise des cookies pour améliorer votre expérience. Vous pouvez
              gérer vos préférences de cookies à tout moment via notre bandeau de cookies.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Cookies essentiels :</strong> nécessaires au fonctionnement du site</li>
              <li><strong>Cookies analytiques :</strong> nous aident à comprendre l'utilisation du site</li>
              <li><strong>Cookies marketing :</strong> utilisés pour personnaliser les publicités (avec consentement)</li>
            </ul>
          </section>

          {/* Modifications */}
          <section>
            <h2 className="text-2xl font-semibold text-forest-green mb-4">
              Modifications de cette politique
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Nous nous réservons le droit de modifier cette politique de confidentialité
              à tout moment. Les modifications seront publiées sur cette page avec une
              date de mise à jour. Nous vous encourageons à consulter régulièrement cette
              politique pour rester informé de la manière dont nous protégeons vos données.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
