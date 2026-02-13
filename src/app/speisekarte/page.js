'use client';

import React, { useState, useMemo } from 'react';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';
import { menuData } from '../../data/mockMenu';

const Speisekarte = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('all');
    const [expandedCategories, setExpandedCategories] = useState({
        schnitzel: true,
        pizza: true,
        gyros: true,
        nudeln: true,
        salate: true,
        imbiss: true,
        nudelauflauf: true,
        pizzabraten: true,
        getranke: true,
        saucen: true
    });

    const categories = [
        { id: 'all', name: 'Alle Gerichte', icon: '🍽️' },
        { id: 'schnitzel', name: 'Schnitzel', icon: '🥩' },
        { id: 'pizza', name: 'Pizza', icon: '🍕' },
        { id: 'gyros', name: 'Vom Grill', icon: '🥙' },
        { id: 'nudeln', name: 'Nudeln', icon: '🍝' },
        { id: 'nudelauflauf', name: 'Nudelauflauf', icon: '🍲' },
        { id: 'salate', name: 'Salate', icon: '🥗' },
        { id: 'imbiss', name: 'Imbiss Gerichte', icon: '🌭' },
        { id: 'pizzabraten', name: 'Pizzabrötchen', icon: '🥟' },
        { id: 'getranke', name: 'Getränke', icon: '🥤' },
        { id: 'saucen', name: 'Saucen', icon: '🥫' }
    ];

    const toggleCategory = (categoryId) => {
        setExpandedCategories(prev => ({
            ...prev,
            [categoryId]: !prev[categoryId]
        }));
    };

    const filteredMenu = useMemo(() => {
        let filtered = {};

        Object.keys(menuData).forEach(category => {
            if (activeCategory === 'all' || activeCategory === category) {
                const items = menuData[category].filter(item =>
                    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    (item.description && item.description.toLowerCase().includes(searchTerm.toLowerCase()))
                );

                if (items.length > 0) {
                    filtered[category] = items;
                }
            }
        });

        return filtered;
    }, [searchTerm, activeCategory]);

    const getCategoryDisplayName = (categoryId) => {
        const category = categories.find(cat => cat.id === categoryId);
        return category ? category.name : categoryId;
    };

    const getCategoryIcon = (categoryId) => {
        const category = categories.find(cat => cat.id === categoryId);
        return category ? category.icon : '🍽️';
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="relative h-[300px] flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: 'url(https://images.unsplash.com/photo-1660495396534-c56f48502cc5?w=1600&q=80)',
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/80"></div>
                </div>

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                        Unsere Speisekarte
                    </h1>
                    <p className="text-xl text-white/90">
                        Entdecken Sie unsere vielfältige Auswahl an Gerichten
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 py-12">
                {/* Search Bar */}
                <div className="mb-8">
                    <div className="relative max-w-2xl mx-auto">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Suchen Sie nach Ihrem Lieblingsgericht..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none text-lg shadow-md"
                        />
                    </div>
                </div>

                {/* Category Filter */}
                <div className="mb-12 overflow-x-auto">
                    <div className="flex space-x-3 pb-4 min-w-max mx-auto justify-center">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 whitespace-nowrap shadow-md hover:shadow-lg ${activeCategory === category.id
                                    ? 'bg-blue-600 text-white scale-105'
                                    : 'bg-white text-gray-700 hover:bg-gray-50'
                                    }`}
                            >
                                <span className="mr-2">{category.icon}</span>
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Menu Items */}
                <div className="space-y-8">
                    {Object.keys(filteredMenu).length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-xl text-gray-500">Keine Gerichte gefunden</p>
                        </div>
                    ) : (
                        Object.keys(filteredMenu).map((categoryId) => (
                            <div key={categoryId} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                                <button
                                    onClick={() => toggleCategory(categoryId)}
                                    className="w-full px-8 py-6 flex items-center justify-between bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 transition-all duration-200"
                                >
                                    <div className="flex items-center space-x-3">
                                        <span className="text-3xl">{getCategoryIcon(categoryId)}</span>
                                        <h2 className="text-2xl font-bold">{getCategoryDisplayName(categoryId)}</h2>
                                        <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                                            {filteredMenu[categoryId].length} Gerichte
                                        </span>
                                    </div>
                                    {expandedCategories[categoryId] ? (
                                        <ChevronUp size={28} />
                                    ) : (
                                        <ChevronDown size={28} />
                                    )}
                                </button>

                                {expandedCategories[categoryId] && (
                                    <div className="p-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {filteredMenu[categoryId].map((item) => (
                                                <div
                                                    key={item.id}
                                                    className="p-5 border-2 border-gray-100 rounded-xl hover:border-blue-300 hover:shadow-md transition-all duration-200"
                                                >
                                                    <div className="flex justify-between items-start mb-2">
                                                        <div className="flex-1">
                                                            <h3 className="text-lg font-bold text-gray-900">
                                                                {item.id}. {item.name}
                                                            </h3>
                                                            {item.description && (
                                                                <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                                                            )}
                                                            {item.size && (
                                                                <p className="text-sm text-gray-500 mt-1">({item.size})</p>
                                                            )}
                                                        </div>
                                                        <div className="text-right ml-4">
                                                            <span className="text-xl font-bold text-blue-600">
                                                                {item.price.toFixed(2)} €
                                                            </span>
                                                        </div>
                                                    </div>

                                                    {item.sizeOptions && item.sizeOptions.length > 0 && (
                                                        <div className="mt-3 pt-3 border-t border-gray-100">
                                                            {item.sizeOptions.map((option, idx) => (
                                                                <div key={idx} className="flex justify-between text-sm">
                                                                    <span className="text-gray-600">({option.size})</span>
                                                                    <span className="font-semibold text-blue-600">
                                                                        {option.price.toFixed(2)} €
                                                                    </span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))
                    )}
                </div>

                {/* Call to Action */}
                <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-xl overflow-hidden">
                    <div className="p-12 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Bereit zu bestellen?
                        </h2>
                        <p className="text-xl text-white/90 mb-8">
                            Rufen Sie uns an oder besuchen Sie uns direkt im Restaurant
                        </p>
                        <a
                            href="tel:020344300404"
                            className="inline-block bg-white text-blue-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
                        >
                            Jetzt bestellen: 0203 / 44 30 04
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Speisekarte;
