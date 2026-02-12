import React from 'react';
import { MapPin, Phone, Clock, Mail, Users } from 'lucide-react';

export const metadata = {
    title: "Kontakt - Damm Grill",
    description: "Kontaktieren Sie uns. Telefon: 0203/443004. Adresse: Auf dem Damm 52, 47137 Duisburg.",
};

const Kontakt = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="relative h-[300px] flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: 'url(https://images.unsplash.com/photo-1669131760669-96f9974e70fe?w=1600&q=80)',
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/80"></div>
                </div>

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                        Kontakt
                    </h1>
                    <p className="text-xl text-white/90">
                        Besuchen Sie uns oder bestellen Sie telefonisch
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {/* Contact Information */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                Kontaktinformationen
                            </h2>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <MapPin size={24} className="text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-1">Adresse</h3>
                                        <p className="text-gray-600">Auf dem Damm 52</p>
                                        <p className="text-gray-600">47137 Duisburg</p>
                                        <p className="text-sm text-gray-500 mt-2">Meiderich, Duisburg</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Phone size={24} className="text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-1">Telefon</h3>
                                        <a
                                            href="tel:020344300404"
                                            className="text-blue-600 hover:text-blue-700 text-xl font-semibold block"
                                        >
                                            0203 / 44 30 04
                                        </a>
                                        <p className="text-sm text-gray-500 mt-1">Für Bestellungen und Reservierungen</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Clock size={24} className="text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-1">Öffnungszeiten</h3>
                                        <p className="text-gray-600 font-semibold">Täglich: 12:00 - 22:00 Uhr</p>
                                        <p className="text-blue-600 font-bold mt-2">KEINE RUHETAGE MEHR!!!</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Users size={24} className="text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-1">Sitzplätze</h3>
                                        <p className="text-gray-600">50 Plätze im Innenbereich</p>
                                        <p className="text-gray-600">50 Plätze auf der Terrasse</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Call to Action */}
                        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-xl p-8 text-white">
                            <h3 className="text-2xl font-bold mb-4">Jetzt bestellen!</h3>
                            <p className="text-white/90 mb-6">
                                Rufen Sie uns an und holen Sie Ihre Bestellung ab oder lassen Sie sich beliefern.
                            </p>
                            <a
                                href="tel:020344300404"
                                className="inline-block bg-white text-blue-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
                            >
                                0203 / 44 30 04
                            </a>
                        </div>
                    </div>

                    {/* Google Maps */}
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                        <div className="h-full min-h-[600px]">
                            <iframe
                                title="Damm Grill Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2487.123456789!2d6.755556!3d51.472222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8c26f9d9d9d9d%3A0x1234567890abcdef!2sAuf%20dem%20Damm%2052%2C%2047137%20Duisburg!5e0!3m2!1sde!2sde!4v1234567890123!5m2!1sde!2sde"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    </div>
                </div>

                {/* Additional Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Phone size={28} className="text-blue-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Bestellservice</h3>
                        <p className="text-gray-600">
                            Bestellen Sie telefonisch und holen Sie Ihre Bestellung ab
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Users size={28} className="text-blue-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Vor Ort genießen</h3>
                        <p className="text-gray-600">
                            100 Sitzplätze innen und auf unserer Terrasse
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <MapPin size={28} className="text-blue-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Zentral gelegen</h3>
                        <p className="text-gray-600">
                            Im Herzen von Meiderich, gut erreichbar
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Kontakt;
