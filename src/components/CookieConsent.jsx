'use client';

import React, { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    functional: false,
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true
    };
    localStorage.setItem('cookieConsent', JSON.stringify(allAccepted));
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false
    };
    localStorage.setItem('cookieConsent', JSON.stringify(onlyNecessary));
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    setShowBanner(false);
    setShowSettings(false);
  };

  const togglePreference = (key) => {
    if (key === 'necessary') return; // Necessary cookies can't be disabled
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-2xl border-t-4 border-blue-600">
        <div className="max-w-7xl mx-auto p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start space-x-4 flex-1">
              <Cookie size={32} className="text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Cookie-Einstellungen
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern.
                  Einige Cookies sind notwendig für den Betrieb der Website, während andere
                  uns helfen, diese Website und Ihre Erfahrung zu verbessern.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <button
                onClick={() => setShowSettings(true)}
                className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:bg-gray-50 transition-all whitespace-nowrap"
              >
                Einstellungen
              </button>
              <button
                onClick={handleRejectAll}
                className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-all whitespace-nowrap"
              >
                Nur Notwendige
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg whitespace-nowrap"
              >
                Alle akzeptieren
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Cookie Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Cookie size={28} className="text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Cookie-Einstellungen</h2>
              </div>
              <button
                onClick={() => setShowSettings(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <p className="text-gray-600">
                Wir verwenden Cookies und ähnliche Technologien, um Ihre Erfahrung zu personalisieren
                und zu verbessern. Sie können Ihre Präferenzen unten anpassen.
              </p>

              {/* Necessary Cookies */}
              <div className="border border-gray-200 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-gray-900">Notwendige Cookies</h3>
                  <div className="bg-gray-300 rounded-full px-4 py-1">
                    <span className="text-sm font-semibold text-gray-700">Immer aktiv</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Diese Cookies sind für die Grundfunktionen der Website erforderlich und
                  können nicht deaktiviert werden.
                </p>
              </div>

              {/* Functional Cookies */}
              <div className="border border-gray-200 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-gray-900">Funktionale Cookies</h3>
                  <button
                    onClick={() => togglePreference('functional')}
                    className={`relative w-14 h-7 rounded-full transition-colors ${preferences.functional ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                  >
                    <span
                      className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${preferences.functional ? 'translate-x-7' : 'translate-x-0'
                        }`}
                    />
                  </button>
                </div>
                <p className="text-sm text-gray-600">
                  Diese Cookies ermöglichen erweiterte Funktionalität und Personalisierung,
                  wie z.B. Ihre bevorzugten Einstellungen.
                </p>
              </div>

              {/* Analytics Cookies */}
              <div className="border border-gray-200 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-gray-900">Analyse-Cookies</h3>
                  <button
                    onClick={() => togglePreference('analytics')}
                    className={`relative w-14 h-7 rounded-full transition-colors ${preferences.analytics ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                  >
                    <span
                      className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${preferences.analytics ? 'translate-x-7' : 'translate-x-0'
                        }`}
                    />
                  </button>
                </div>
                <p className="text-sm text-gray-600">
                  Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website
                  interagieren, indem Informationen anonym gesammelt werden.
                </p>
              </div>

              {/* Marketing Cookies */}
              <div className="border border-gray-200 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-gray-900">Marketing-Cookies</h3>
                  <button
                    onClick={() => togglePreference('marketing')}
                    className={`relative w-14 h-7 rounded-full transition-colors ${preferences.marketing ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                  >
                    <span
                      className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${preferences.marketing ? 'translate-x-7' : 'translate-x-0'
                        }`}
                    />
                  </button>
                </div>
                <p className="text-sm text-gray-600">
                  Diese Cookies werden verwendet, um Werbung anzuzeigen, die für Sie
                  und Ihre Interessen relevanter ist.
                </p>
              </div>
            </div>

            <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 p-6 flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleRejectAll}
                className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:bg-gray-100 transition-all"
              >
                Nur Notwendige
              </button>
              <button
                onClick={handleSavePreferences}
                className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg"
              >
                Auswahl speichern
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;
