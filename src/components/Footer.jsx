import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-400 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src="/Vishvadharalogo.png" alt="VISHVADHARA GROUP Logo" className="h-20 w-auto object-contain brightness-0 invert opacity-90" />
              <span className="text-2xl font-bold text-white tracking-tight">VISHVADHARA GROUP</span>
            </div>
            <p className="text-sm">
              Professional, reliable, and premium lawn and garden care services dedicated to creating green paradises.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-brand transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-brand transition-colors">Our Services</a></li>
              <li><a href="#benefits" className="hover:text-brand transition-colors">Benefits</a></li>
              <li><a href="#how-it-works" className="hover:text-brand transition-colors">How It Works</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-brand transition-colors">Lawn Mowing</a></li>
              <li><a href="#services" className="hover:text-brand transition-colors">Garden Maintenance</a></li>
              <li><a href="#services" className="hover:text-brand transition-colors">Weed Control</a></li>
              <li><a href="#services" className="hover:text-brand transition-colors">Yard Cleanup</a></li>
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
          <p>&copy; {new Date().getFullYear()} VISHVADHARA GROUP. All rights reserved.</p>
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
