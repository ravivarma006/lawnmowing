import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const heroImage = '/hero_lawn.png';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax effect simulation using fixed attachment */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed transform scale-105"
        style={{ backgroundImage: `url('${heroImage}')` }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-xl">
            Transform Your Lawn Into a <span className="text-brand-light">Green Paradise</span>
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-gray-200 drop-shadow-md">
            Professional Lawn Mowing & Garden Care Services. Reliable, expert maintenance for a beautiful home.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link to="/quote" className="px-8 py-4 bg-brand hover:bg-brand-light text-white rounded-full font-bold text-lg shadow-lg shadow-brand/40 transition-transform transform hover:scale-105 text-center">
              Get Free Quote
            </Link>
            <a href="#services" className="px-8 py-4 glass text-white rounded-full font-bold text-lg hover:bg-white/20 transition-colors text-center shadow-lg">
              Our Services
            </a>
          </div>

          <div className="mt-8 flex items-center gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-brand-light w-5 h-5" />
              <span className="font-medium">Fully Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-brand-light w-5 h-5" />
              <span className="font-medium">100% Satisfaction</span>
            </div>
          </div>
        </motion.div>

        {/* Floating Glass Card Element */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="hidden lg:block glass p-8 rounded-3xl max-w-sm mt-10 md:mt-0 shadow-2xl"
        >
          <div className="bg-white/90 rounded-2xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-gray-900 text-lg">Weekly Service</h3>
              <span className="bg-green-100 text-brand-dark px-2 py-1 rounded-md text-xs font-bold">POPULAR</span>
            </div>
            <p className="text-gray-600 text-sm mb-6">Enjoy a perfectly neat lawn every weekend without lifting a finger.</p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <FaCheckCircle className="text-brand" /> Mowing & Edging
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <FaCheckCircle className="text-brand" /> Trimming
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <FaCheckCircle className="text-brand" /> Clean up
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <a href="#before-after" className="text-white/70 hover:text-white transition-colors flex flex-col items-center">
          <span className="text-sm font-medium mb-2 tracking-widest uppercase">Scroll</span>
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center p-1">
            <div className="w-1.5 h-3 bg-current rounded-full" />
          </div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
