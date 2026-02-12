import React from 'react';

export const metadata = {
    title: "Impressum - Damm Grill",
};

const Impressum = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="relative h-[200px] flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700">
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-white">
                        Impressum
                    </h1>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-4 py-12">
                <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Angaben gemäß § 5 TMG</h2>
                        <div className="space-y-2 text-gray-700">
                            <p className="font-semibold text-lg">Damm Grill</p>
                            <p>Schnellimbiss & Restaurant</p>
                            <p>Inhaberin: Filiz Cetindag</p>
                            <p className="mt-4 font-semibold">Anschrift:</p>
                            <p>Auf dem Damm 52</p>
                            <p>47137 Duisburg</p>
                            <p>Deutschland</p>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Kontakt</h2>
                        <div className="space-y-2 text-gray-700">
                            <p>
                                <span className="font-semibold">Telefon:</span>{' '}
                                <a href="tel:020344300404" className="text-blue-600 hover:text-blue-700">
                                    0203 / 44 30 04
                                </a>
                            </p>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Umsatzsteuer-ID</h2>
                        <p className="text-gray-700">
                            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
                        </p>
                        <p className="text-gray-700 mt-2">
                            [Wird in Kürze ergänzt]
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
                        <div className="space-y-2 text-gray-700 mt-2">
                            <p>Filiz Cetindag</p>
                            <p>Auf dem Damm 52</p>
                            <p>47137 Duisburg</p>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">EU-Streitschlichtung</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                            <a
                                href="https://ec.europa.eu/consumers/odr/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-700 underline"
                            >
                                https://ec.europa.eu/consumers/odr/
                            </a>
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            Unsere E-Mail-Adresse finden Sie oben im Impressum.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                            Verbraucherschlichtungsstelle teilzunehmen.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Haftung für Inhalte</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen
                            Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind
                            wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte
                            fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
                            rechtswidrige Tätigkeit hinweisen.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach
                            den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung
                            ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung
                            möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
                            Inhalte umgehend entfernen.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Haftung für Links</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir
                            keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine
                            Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
                            Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden
                            zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
                            Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne
                            konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden
                            von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Urheberrecht</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
                            unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
                            Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
                            bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                            Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen
                            Gebrauch gestattet.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden
                            die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
                            gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam
                            werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
                            Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                        </p>
                    </section>

                    <div className="mt-12 pt-8 border-t border-gray-200">
                        <p className="text-sm text-gray-500">
                            Letzte Aktualisierung: {new Date().toLocaleDateString('de-DE', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Impressum;
