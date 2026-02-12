import React from 'react';
import Link from 'next/link';
import { Clock, MapPin, Phone, Users, UtensilsCrossed, Award } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1660495396534-c56f48502cc5?w=1600&q=80)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/80"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-6">
            <div className="inline-block bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20">
              <p className="text-white text-sm font-medium">Griechisches Restaurant in Duisburg</p>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Willkommen bei<br />
            <span className="text-white">DAMM GRILL</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Authentische griechische Küche trifft deutsche Spezialitäten<br />
            im Herzen von Meiderich
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/speisekarte"
              className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Speisekarte ansehen
            </Link>
            <a
              href="tel:020344300404"
              className="bg-white text-blue-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Jetzt anrufen
            </a>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-blue-700 py-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center text-white">
            <div className="flex flex-col items-center space-y-2">
              <Clock size={32} className="mb-2" />
              <p className="font-bold text-lg">Täglich geöffnet</p>
              <p className="text-blue-100">12:00 - 22:00 Uhr</p>
              <p className="text-white font-semibold text-sm">KEINE RUHETAGE!</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Phone size={32} className="mb-2" />
              <p className="font-bold text-lg">Bestellservice</p>
              <a href="tel:020344300404" className="text-blue-100 hover:text-white transition-colors text-xl">
                0203 / 44 30 04
              </a>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Users size={32} className="mb-2" />
              <p className="font-bold text-lg">Sitzplätze</p>
              <p className="text-blue-100">50 Innen + 50 Terrasse</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <span className="text-3xl mb-2">🏟️</span>
              <p className="font-bold text-lg">MSV Live</p>
              <p className="text-blue-100">Alle MSV Spiele</p>
              <p className="text-white font-semibold text-sm">LIVE BEI UNS!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Was uns auszeichnet
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Qualität, Geschmack und Service seit vielen Jahren in Duisburg
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <UtensilsCrossed size={32} className="text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Vielfältige Speisekarte</h3>
              <p className="text-gray-600 leading-relaxed">
                Von griechischen Gyros über Schnitzel-Variationen bis zu Pizza und Pasta -
                bei uns findet jeder sein Lieblingsgericht.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Award size={32} className="text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Frische Zutaten</h3>
              <p className="text-gray-600 leading-relaxed">
                Wir legen großen Wert auf Qualität und Frische. Alle Gerichte werden
                täglich frisch für Sie zubereitet.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Clock size={32} className="text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Täglich für Sie da</h3>
              <p className="text-gray-600 leading-relaxed">
                Keine Ruhetage mehr! Wir sind jeden Tag von 12:00 bis 22:00 Uhr
                für Sie geöffnet - auch an Feiertagen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Highlight Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Unsere Spezialitäten
            </h2>
            <p className="text-xl text-gray-600">
              Entdecken Sie unsere beliebtesten Gerichte
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Gyros Spezialitäten',
                image: 'https://images.unsplash.com/photo-1734974121561-11aee7d3cebd?w=800&q=80',
                description: 'Authentisches griechisches Gyros mit Pommes, Zaziki und Salat'
              },
              {
                title: 'Schnitzel Variationen',
                image: 'https://images.unsplash.com/photo-1640346060848-ad6921833885?w=800&q=80',
                description: 'Von klassisch bis Schlemmer - über 15 verschiedene Schnitzel'
              },
              {
                title: 'Frische Pizza',
                image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80',
                description: 'Knusprige Pizza aus unserem Steinofen mit frischen Zutaten'
              },
              {
                title: 'Pasta Gerichte',
                image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&q=80',
                description: 'Spaghetti, Rigatoni, Tortellini mit verschiedenen Saucen'
              },
              {
                title: 'Frische Salate',
                image: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=800&q=80',
                description: 'Knackige Salate mit Gyros, Thunfisch oder vegetarisch'
              },
              {
                title: 'Grill Spezialitäten',
                image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80',
                description: 'Steaks, Spieße und mehr vom Grill - saftig und lecker'
              }
            ].map((item, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/90 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/speisekarte"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Zur kompletten Speisekarte
            </Link>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Besuchen Sie uns
            </h2>
            <p className="text-xl text-gray-600">
              Im Herzen von Meiderich, Duisburg
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 flex flex-col justify-center">
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin size={24} className="text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Adresse</h3>
                      <p className="text-gray-600">Auf dem Damm 52</p>
                      <p className="text-gray-600">47137 Duisburg</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone size={24} className="text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Telefon</h3>
                      <a href="tel:020344300404" className="text-blue-600 hover:text-blue-700 text-lg font-semibold">
                        0203 / 44 30 04
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock size={24} className="text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Öffnungszeiten</h3>
                      <p className="text-gray-600">Täglich: 12:00 - 22:00 Uhr</p>
                      <p className="text-blue-600 font-semibold mt-1">Keine Ruhetage!</p>
                    </div>
                  </div>

                  <Link
                    href="/kontakt"
                    className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl text-center"
                  >
                    Route planen
                  </Link>
                </div>
              </div>

              <div className="relative h-[400px] lg:h-auto">
                <img
                  src="https://images.unsplash.com/photo-1669131760669-96f9974e70fe?w=800&q=80"
                  alt="Restaurant Terrasse"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
