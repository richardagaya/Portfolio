'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isSticky ? 'bg-black/90 py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-white text-2xl font-bold">
            Agaya
          </Link>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop menu */}
          <div className={`lg:flex items-center space-x-8 ${isMenuOpen ? 'block absolute top-full left-0 right-0 bg-black/90 p-4 mt-2' : 'hidden lg:block'}`}>
            <Link href="#home" className="text-white hover:text-theme-red transition-colors">
              Home
            </Link>
            <Link href="#about" className="text-white hover:text-theme-red transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-white hover:text-theme-red transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 