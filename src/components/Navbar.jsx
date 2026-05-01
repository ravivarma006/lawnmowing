import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          <div className="flex items-center gap-2 cursor-pointer flex-shrink-0" onClick={() => window.scrollTo(0,0)}>
            <img 
              src="/Vishvadharalogo.png" 
              alt="VISHVADHARA GROUP Logo" 
              className={`h-16 w-auto object-contain flex-shrink-0 transition-all duration-300 ${isScrolled ? '' : 'brightness-0 invert opacity-90 drop-shadow-lg'}`} 
            />
            <div className="flex flex-col leading-tight">
              <span className={`text-sm sm:text-base md:text-lg font-bold tracking-tight whitespace-nowrap ${isScrolled ? 'text-gray-900' : 'text-white text-shadow'}`}>
                VISHVADHARA GROUP
              </span>
              <span className={`text-[9px] sm:text-[10px] md:text-xs font-medium tracking-wide whitespace-nowrap ${isScrolled ? 'text-gray-500' : 'text-white/80'}`}>
                Lawns, Gardens and Property Maintenance
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`font-medium transition-colors hover:text-brand ${isScrolled ? 'text-gray-600' : 'text-white/90 hover:text-white'}`}
              >
                {link.name}
              </a>
            ))}
            <Link 
              to="/quote" 
              className="bg-brand hover:bg-brand-light transition-colors text-white px-5 py-2.5 rounded-full font-medium shadow-md shadow-brand/30"
            >
              Get Free Quote
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`${isScrolled ? 'text-gray-900' : 'text-white'}`}
            >
              {mobileMenuOpen ? <FiX className="w-7 h-7" /> : <FiMenu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-gray-200"
          >
            <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-3 rounded-md text-base font-medium text-gray-800 hover:text-brand hover:bg-white/50"
                >
                  {link.name}
                </a>
              ))}
              <Link 
                to="/quote"
                onClick={() => setMobileMenuOpen(false)} 
                className="mt-4 block w-full text-center bg-brand text-white px-5 py-3 rounded-full font-medium shadow-md"
              >
                Get Free Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
