"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: 'Startseite', path: '/' },
    { name: 'Speisekarte', path: '/speisekarte' },
    { name: 'Erinnerungen', path: '/erinnerungen' },
    { name: 'Kontakt', path: '/kontakt' }
  ];

  const isActive = (path) => pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-10 h-10">
              <Image
                src="/favicon.png"
                alt="Damm Grill Logo"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Damm Grill
            </span>
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10 lg:space-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`text-base font-medium transition-all duration-200 whitespace-nowrap px-2 ${isActive(item.path)
                  ? 'text-blue-700 border-b-2 border-blue-700 pb-1'
                  : 'text-gray-700 hover:text-blue-600'
                  }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="tel:020344300404"
              className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg ml-4"
            >
              <Phone size={18} />
              <span>0203 / 44 30 04</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-6 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block text-base font-medium py-2 px-4 rounded-lg transition-all ${isActive(item.path)
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-gray-700 hover:bg-gray-50'
                  }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="tel:020344300404"
              className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-all"
            >
              <Phone size={18} />
              <span>0203 / 44 30 04</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
