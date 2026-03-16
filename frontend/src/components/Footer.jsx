import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-900 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4">DAMM GRILL</h3>
            <p className="text-blue-100 mb-4">
              Ihr griechisches Restaurant im Herzen von Meiderich, Duisburg.
              Genießen Sie authentische griechische Küche und deutsche Spezialitäten.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-blue-100">
                <Clock size={18} />
                <span className="font-semibold">KEINE RUHETAGE MEHR!</span>
              </div>
              <p className="text-white font-bold text-lg italic">
                Einmal Damm immer Damm
              </p>
              <p className="text-blue-100 text-sm mt-3">
                🏟️ Alle MSV Fußballspiele LIVE bei uns!
              </p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-4">Kontakt</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <div>
                  <p className="text-blue-100">Auf dem Damm 52</p>
                  <p className="text-blue-100">47137 Duisburg</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} />
                <a href="tel:0203443004" className="text-blue-100 hover:text-white transition-colors">
                  0203 / 44 30 04
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Clock size={20} />
                <div>
                  <p className="text-blue-100">Täglich</p>
                  <p className="text-blue-100 font-semibold">12:00 - 22:00 Uhr</p>
                </div>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Rechtliches</h4>
            <div className="space-y-2">
              <Link to="/impressum" className="block text-blue-100 hover:text-white transition-colors">
                Impressum
              </Link>
              <Link to="/datenschutz" className="block text-blue-100 hover:text-white transition-colors">
                Datenschutzerklärung
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-700 mt-8 pt-8 text-center text-blue-200">
          <p>&copy; {new Date().getFullYear()} Damm Grill. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
