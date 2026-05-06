import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiMenu, FiX, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { servicesList } from '../data/servicesData';

const Navbar = () => {
  const [isScrolled, setIsScrolled]       = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen]   = useState(false);   // desktop dropdown
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false); // mobile accordion

  const location  = useLocation();
  const navigate  = useNavigate();
  const dropdownRef = useRef(null);

  const isHome        = location.pathname === '/';
  const isServicePage = location.pathname.startsWith('/services/');
  const activeSlug    = isServicePage ? location.pathname.replace('/services/', '') : null;

  // ── Scroll listener ──────────────────────────────────────────────────────────
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ── Close desktop dropdown when clicking outside ──────────────────────────────
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // ── Close mobile menu on route change ────────────────────────────────────────
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  // ── Smooth-scroll helper (homepage anchor links) ──────────────────────────────
  const handleNavClick = (e, href) => {
    e.preventDefault();
    // Close mobile menu first, then scroll after animation completes
    setMobileMenuOpen(false);
    if (isHome) {
      setTimeout(() => {
        if (href === '#home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const target = document.querySelector(href);
          if (target) target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 350); // wait for mobile menu close animation to finish
    } else {
      navigate('/' + href);
    }
  };

  // ── Homepage-only section links (hidden on service pages) ─────────────────────
  const sectionLinks = [
    { name: 'Benefits',     href: '#benefits'     },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Testimonials', href: '#testimonials'  },
  ];

  // ── Text colour helpers ────────────────────────────────────────────────────────
  const textCls    = isScrolled ? 'text-gray-700'    : 'text-white/90';
  const hoverCls   = isScrolled ? 'hover:text-brand' : 'hover:text-white';
  const activeCls  = 'text-brand font-semibold';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          {/* ── Logo ─────────────────────────────────────────────────────────── */}
          <Link
            to="/"
            className="flex items-center gap-2 cursor-pointer flex-shrink-0"
            onClick={() => window.scrollTo(0, 0)}
          >
            <img
              src="/Vishvadharalogo.png"
              alt="VISHVADHARA GROUP Logo"
              className={`h-16 w-auto object-contain flex-shrink-0 transition-all duration-300 ${
                isScrolled ? '' : 'brightness-0 invert opacity-90 drop-shadow-lg'
              }`}
            />
            <div className="flex flex-col leading-tight">
              <span className={`text-sm sm:text-base md:text-lg font-bold tracking-tight whitespace-nowrap ${
                isScrolled ? 'text-gray-900' : 'text-white text-shadow'
              }`}>
                VISHVADHARA GROUP
              </span>
              <span className={`text-[9px] sm:text-[10px] md:text-xs font-medium tracking-wide whitespace-nowrap ${
                isScrolled ? 'text-gray-500' : 'text-white/80'
              }`}>
                Lawns, Gardens and Property Maintenance
              </span>
            </div>
          </Link>

          {/* ── Desktop nav ───────────────────────────────────────────────────── */}
          <div className="hidden md:flex items-center space-x-7">

            {/* Home */}
            <a
              href={isHome ? '#home' : '/#home'}
              onClick={(e) => handleNavClick(e, '#home')}
              className={`font-medium transition-colors ${textCls} ${hoverCls}`}
            >
              Home
            </a>

            {/* ── Services dropdown ─────────────────────────────────────────── */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              {/* Trigger */}
              <button
                onClick={() => {
                  // On homepage also scroll to #services section
                  if (isHome) {
                    const el = document.querySelector('#services');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                  setServicesOpen((o) => !o);
                }}
                className={`flex items-center gap-1 font-medium transition-colors ${textCls} ${hoverCls} focus:outline-none`}
              >
                Services
                <motion.span
                  animate={{ rotate: servicesOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiChevronDown className="w-4 h-4" />
                </motion.span>
              </button>

              {/* Dropdown panel */}
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0,  scale: 1    }}
                    exit={{   opacity: 0, y: -8, scale: 0.97 }}
                    transition={{ duration: 0.18, ease: 'easeOut' }}
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[520px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50"
                  >
                    {/* Header */}
                    <div className="bg-gradient-to-r from-brand-dark to-brand px-5 py-3">
                      <p className="text-white font-bold text-sm tracking-wider uppercase">
                        Our Services
                      </p>
                    </div>

                    {/* Services grid */}
                    <div className="grid grid-cols-2 gap-0.5 p-3 bg-gray-50">
                      {servicesList.map((svc) => {
                        const isActive = svc.slug === activeSlug;
                        return (
                          <Link
                            key={svc.slug}
                            to={`/services/${svc.slug}`}
                            onClick={() => setServicesOpen(false)}
                            className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-150
                              ${isActive
                                ? 'bg-brand/10 text-brand font-semibold'
                                : 'text-gray-700 hover:bg-brand/8 hover:text-brand'
                              }`}
                          >
                            <span className="text-base">🌿</span>
                            <span>{svc.name}</span>
                            {isActive && (
                              <span className="ml-auto text-[10px] bg-brand text-white px-1.5 py-0.5 rounded-full">
                                Current
                              </span>
                            )}
                          </Link>
                        );
                      })}
                    </div>

                    {/* Footer CTA */}
                    <div className="px-4 py-3 bg-white border-t border-gray-100 flex justify-between items-center">
                      <span className="text-xs text-gray-500">Sydney Metro — Fully Insured</span>
                      <Link
                        to="/quote"
                        onClick={() => setServicesOpen(false)}
                        className="text-xs font-bold text-brand hover:text-brand-dark transition-colors"
                      >
                        Get Free Quote →
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* ── Homepage-only section links ───────────────────────────────── */}
            {!isServicePage && sectionLinks.map((link) => (
              <a
                key={link.name}
                href={isHome ? link.href : '/' + link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`font-medium transition-colors ${textCls} ${hoverCls}`}
              >
                {link.name}
              </a>
            ))}

            {/* Get Free Quote CTA */}
            <Link
              to="/quote"
              className="bg-brand hover:bg-brand-light transition-colors text-white px-5 py-2.5 rounded-full font-medium shadow-md shadow-brand/30"
            >
              Get Free Quote
            </Link>
          </div>

          {/* ── Mobile hamburger ─────────────────────────────────────────────── */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`${isScrolled ? 'text-gray-900' : 'text-white'}`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <FiX className="w-7 h-7" /> : <FiMenu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile Menu ──────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{   opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-gray-200"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col">

              {/* Home */}
              <a
                href={isHome ? '#home' : '/#home'}
                onClick={(e) => handleNavClick(e, '#home')}
                className="block px-3 py-3 rounded-md text-base font-medium text-gray-800 hover:text-brand hover:bg-white/50"
              >
                Home
              </a>

              {/* Services accordion */}
              <div>
                <button
                  onClick={() => setMobileServicesOpen((o) => !o)}
                  className="w-full flex justify-between items-center px-3 py-3 rounded-md text-base font-medium text-gray-800 hover:text-brand hover:bg-white/50"
                >
                  <span>Services</span>
                  {mobileServicesOpen
                    ? <FiChevronUp className="w-5 h-5" />
                    : <FiChevronDown className="w-5 h-5" />
                  }
                </button>

                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{   opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="ml-3 mt-1 space-y-0.5 border-l-2 border-brand/30 pl-3">
                        {servicesList.map((svc) => {
                          const isActive = svc.slug === activeSlug;
                          return (
                            <Link
                              key={svc.slug}
                              to={`/services/${svc.slug}`}
                              onClick={() => setMobileMenuOpen(false)}
                              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors
                                ${isActive
                                  ? 'text-brand font-semibold bg-brand/10'
                                  : 'text-gray-700 hover:text-brand hover:bg-white/60'
                                }`}
                            >
                              <span>🌿</span> {svc.name}
                              {isActive && (
                                <span className="ml-auto text-[10px] bg-brand text-white px-1.5 py-0.5 rounded-full">
                                  Current
                                </span>
                              )}
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Homepage-only section links */}
              {!isServicePage && sectionLinks.map((link) => (
                <a
                  key={link.name}
                  href={isHome ? link.href : '/' + link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block px-3 py-3 rounded-md text-base font-medium text-gray-800 hover:text-brand hover:bg-white/50"
                >
                  {link.name}
                </a>
              ))}

              {/* Get Free Quote */}
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
