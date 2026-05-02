import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  const handleNavClick = (e, href) => {
    e.preventDefault();
    if (isHome) {
      if (href === '#home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      navigate('/' + href);
    }
  };

  return (
    <footer className="bg-gray-950 text-gray-400 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="col-span-1 md:col-span-1">
            <Link to="/" onClick={() => window.scrollTo(0,0)} className="flex items-center gap-3 mb-4 hover:opacity-90 transition-opacity">
              <img src="/Vishvadharalogo.png" alt="VISHVADHARA GROUP Logo" className="h-16 md:h-20 w-auto object-contain brightness-0 invert opacity-90" />
              <div className="flex flex-col leading-tight">
                <span className="text-xl md:text-2xl font-bold text-white tracking-tight">VISHVADHARA GROUP</span>
                <span className="text-[11px] md:text-xs font-medium tracking-wide text-gray-400 mt-0.5">Lawns, Gardens and Property Maintenance</span>
              </div>
            </Link>
            <p className="text-sm text-gray-400">
              Professional, reliable, and premium lawn and garden care services dedicated to creating green paradises.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href={isHome ? "#home" : "/#home"} onClick={(e) => handleNavClick(e, '#home')} className="hover:text-brand transition-colors">Home</a></li>
              <li><a href={isHome ? "#services" : "/#services"} onClick={(e) => handleNavClick(e, '#services')} className="hover:text-brand transition-colors">Our Services</a></li>
              <li><a href={isHome ? "#benefits" : "/#benefits"} onClick={(e) => handleNavClick(e, '#benefits')} className="hover:text-brand transition-colors">Benefits</a></li>
              <li><a href={isHome ? "#how-it-works" : "/#how-it-works"} onClick={(e) => handleNavClick(e, '#how-it-works')} className="hover:text-brand transition-colors">How It Works</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services/lawn-mowing" onClick={() => window.scrollTo(0,0)} className="hover:text-brand transition-colors">Lawn Mowing</Link></li>
              <li><Link to="/services/garden-maintenance" onClick={() => window.scrollTo(0,0)} className="hover:text-brand transition-colors">Garden Maintenance</Link></li>
              <li><Link to="/services/weed-control" onClick={() => window.scrollTo(0,0)} className="hover:text-brand transition-colors">Weed Control</Link></li>
              <li><Link to="/services/full-yard-cleanup" onClick={() => window.scrollTo(0,0)} className="hover:text-brand transition-colors">Yard Cleanup</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand text-white transition-colors">
                <FaFacebookF />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand text-white transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand text-white transition-colors">
                <FaInstagram />
              </a>
            </div>
          </div>
          
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
            <p>&copy; {new Date().getFullYear()} VISHVADHARA GROUP. All rights reserved.</p>
            <p className="text-xs text-gray-500">Website designed and developed by <a href="#" className="hover:text-white transition-colors">Astra Digital Solutions (ADS)</a> Sydney Australia</p>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
