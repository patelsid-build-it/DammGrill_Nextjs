import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Restaurant Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-xl">🏛️</span>
              </div>
              <h3 className="text-2xl font-bold text-white">DAMM GRILL</h3>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Authentische griechische Küche und deutsche Spezialitäten im Herzen von Duisburg-Meiderich.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-blue-400">Navigation</h4>
            <ul className="space-y-4">
              {[
                { name: 'Startseite', path: '/' },
                { name: 'Speisekarte', path: '/speisekarte' },
                { name: 'Erinnerungen', path: '/erinnerungen' },
                { name: 'Kontakt', path: '/kontakt' }
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2"
                  >
                    <span>›</span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-blue-400">Kontakt</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-400">
                <MapPin size={20} className="mt-1 flex-shrink-0 text-blue-500" />
                <span>
                  Auf dem Damm 52<br />
                  47137 Duisburg
                </span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone size={20} className="flex-shrink-0 text-blue-500" />
                <a href="tel:020344300404" className="hover:text-white transition-colors">
                  0203 / 44 30 04
                </a>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Mail size={20} className="flex-shrink-0 text-blue-500" />
                <a href="mailto:info@dammgrill.de" className="hover:text-white transition-colors">
                  info@dammgrill.de
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-blue-400">Öffnungszeiten</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-400">
                <Clock size={20} className="mt-1 flex-shrink-0 text-blue-500" />
                <div>
                  <p className="font-semibold text-white">Täglich</p>
                  <p>12:00 - 22:00 Uhr</p>
                </div>
              </li>
              <li className="text-blue-400 font-semibold pt-2 border-t border-gray-800 mt-4">
                KEINE RUHETAGE!
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-500 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p>&copy; {new Date().getFullYear()} Damm Grill. Alle Rechte vorbehalten.</p>
            <div className="flex space-x-6">
              <Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link>
              <Link href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
