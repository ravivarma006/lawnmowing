import React from 'react';
import { motion } from 'framer-motion';
import { FaClipboardList, FaCalendarCheck, FaSmileBeam } from 'react-icons/fa';

const steps = [
  {
    id: 1,
    title: 'Request a Quote',
    description: 'Fill out our quick online form or give us a call. Tell us what your garden needs.',
    icon: <FaClipboardList className="w-8 h-8" />
  },
  {
    id: 2,
    title: 'Schedule Service',
    description: 'We will provide a transparent estimate and book a convenient time for our team to arrive.',
    icon: <FaCalendarCheck className="w-8 h-8" />
  },
  {
    id: 3,
    title: 'Enjoy Your Lawn',
    description: 'Sit back and relax while our professionals transform your yard into a pristine paradise.',
    icon: <FaSmileBeam className="w-8 h-8" />
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand font-bold tracking-wider uppercase text-sm">Simple Process</span>
          <h2 className="mt-2 text-3xl md:text-5xl font-extrabold text-gray-900">
            How It Works
          </h2>
        </div>

        <div className="relative">
          {/* Horizontal Line connecting steps (Desktop only) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-brand text-2xl font-black shadow-xl shadow-brand/10 border-4 border-gray-50 group-hover:scale-110 group-hover:border-brand-light transition-all duration-300 relative z-10">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold mt-6 mb-3 text-gray-900">{step.title}</h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
