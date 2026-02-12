import React from 'react';
import { Heart, Users, Award, Calendar } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
    title: "Erinnerungen - Damm Grill",
    description: "Erinnerungen an den Damm Grill. Einmal Damm, immer Damm. Unsere Geschichte und Tradition.",
};

const Erinnerungen = () => {
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
                        Erinnerungen
                    </h1>
                    <p className="text-xl text-white/90">
                        Einmal Damm immer Damm
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 py-12">
                {/* Main Content */}
                <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Unsere Geschichte
                        </h2>
                        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                            Seit vielen Jahren sind wir stolz darauf, die Menschen in Meiderich, Duisburg
                            mit authentischer griechischer Küche und deutschen Spezialitäten zu verwöhnen.
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div className="flex items-start space-x-4 p-6 bg-blue-50 rounded-xl">
                            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                                <Heart size={24} className="text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Mit Liebe gekocht</h3>
                                <p className="text-gray-600">
                                    Jedes Gericht wird mit Sorgfalt und Leidenschaft zubereitet. Unsere
                                    Rezepte werden seit Jahren weitergegeben und perfektioniert.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4 p-6 bg-blue-50 rounded-xl">
                            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                                <Users size={24} className="text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Familientradition</h3>
                                <p className="text-gray-600">
                                    Bei uns sind Sie nicht nur Gast, sondern Teil unserer Familie.
                                    Viele unserer Stammkunden begleiten uns schon seit Jahrzehnten.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4 p-6 bg-blue-50 rounded-xl">
                            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                                <Award size={24} className="text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Qualität seit Jahren</h3>
                                <p className="text-gray-600">
                                    Frische Zutaten, traditionelle Zubereitung und ein freundliches Team -
                                    das ist unser Erfolgsrezept.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4 p-6 bg-blue-50 rounded-xl">
                            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                                <Calendar size={24} className="text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Täglich für Sie da</h3>
                                <p className="text-gray-600">
                                    Von 12:00 bis 22:00 Uhr, jeden Tag im Jahr - wir sind immer für Sie da.
                                    Keine Ruhetage mehr!
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Quote Section */}
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-center text-white">
                        <p className="text-3xl md:text-4xl font-bold mb-4 italic">
                            "Einmal Damm immer Damm"
                        </p>
                        <p className="text-xl text-white/90">
                            Dieser Satz ist mehr als nur ein Spruch - er ist die Philosophie,
                            mit der wir jeden Tag unsere Gäste willkommen heißen.
                        </p>
                    </div>
                </div>

                {/* MSV Section */}
                <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            🏟️ MSV Duisburg Live
                        </h2>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Fußballfans aufgepasst!
                        </p>
                    </div>

                    <div className="bg-blue-50 rounded-xl p-8 text-center">
                        <p className="text-2xl font-bold text-blue-700 mb-4">
                            Alle MSV Fußballspiele LIVE bei uns!
                        </p>
                        <p className="text-lg text-gray-700 mb-6">
                            Genießen Sie die Spiele von MSV Duisburg in gemütlicher Atmosphäre
                            bei uns im Restaurant. Leckeres Essen, kalte Getränke und spannende
                            Fußballmomente - die perfekte Kombination!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <div className="bg-white p-4 rounded-lg shadow-md">
                                <p className="text-gray-600 text-sm mb-1">50 Sitzplätze</p>
                                <p className="text-2xl font-bold text-blue-700">Innen</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-md">
                                <p className="text-gray-600 text-sm mb-1">50 Sitzplätze</p>
                                <p className="text-2xl font-bold text-blue-700">Terrasse</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Community Section */}
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-xl overflow-hidden">
                    <div className="p-12 text-center text-white">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Werden Sie Teil unserer Geschichte
                        </h2>
                        <p className="text-xl text-white/90 mb-8">
                            Besuchen Sie uns und erleben Sie selbst, warum unsere Gäste immer wiederkommen
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="tel:020344300404"
                                className="inline-block bg-white text-blue-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
                            >
                                Jetzt reservieren
                            </a>
                            <Link
                                href="/speisekarte"
                                className="inline-block bg-blue-800 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-900 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 border-2 border-white/30"
                            >
                                Speisekarte ansehen
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Erinnerungen;
