import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">À propos de Student Sphere</h3>
            <p className="text-gray-400">
              Une marketplace communautaire conçue spécifiquement pour les étudiants
              universitaires pour acheter et vendre des articles au sein de leur campus.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-400 hover:text-white">À Propos</a></li>
              <li><a href="/privacy" className="text-gray-400 hover:text-white">Politique de Confidentialité</a></li>
              <li><a href="/terms" className="text-gray-400 hover:text-white">Conditions d'Utilisation</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white">Contactez-nous</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contactez-nous</h3>
            <div className="space-y-2 text-gray-400">
              <p>Email: contact@studentsphere.ma</p>
              <p>Tél: (+212) 5XX-XXXXXX</p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Student Sphere. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}