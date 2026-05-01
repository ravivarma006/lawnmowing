import React from 'react';
import { motion } from 'framer-motion';
import { FaTractor, FaSeedling, FaCut, FaBug, FaBroom, FaTh, FaTrash, FaTools, FaCalendarAlt, FaTint, FaClipboardList } from 'react-icons/fa';

const services = [
  {
    id: 1,
    title: 'Lawn Mowing',
    description: 'Precision mowing with beautiful striping patterns. We trim edges and clean up all clippings for a flawless finish.',
    icon: <FaTractor className="w-8 h-8 text-white" />,
    color: 'from-green-400 to-brand',
  },
  {
    id: 2,
    title: 'Garden Maintenance',
    description: 'Keep your flower beds pristine. We prune, mulch, and maintain the health of your beautiful garden plants.',
    icon: <FaSeedling className="w-8 h-8 text-white" />,
    color: 'from-emerald-400 to-emerald-600',
  },
  {
    id: 3,
    title: 'Hedge Trimming',
    description: 'Perfectly shaped hedges and bushes. We ensure your property boundaries and feature plants look sharp all year round.',
    icon: <FaCut className="w-8 h-8 text-white" />,
    color: 'from-teal-400 to-teal-600',
  },
  {
    id: 4,
    title: 'Weed Control',
    description: 'Targeted weed removal and prevention strategies to keep your lawn and garden beds looking unblemished.',
    icon: <FaBug className="w-8 h-8 text-white" />,
    color: 'from-lime-400 to-lime-600',
  },
  {
    id: 5,
    title: 'Full Yard Cleanup',
    description: 'Seasonal cleanups including leaf removal, debris clearing, and preparing your landscape for the heavy weather changes.',
    icon: <FaBroom className="w-8 h-8 text-white" />,
    color: 'from-green-500 to-green-800',
  },
  {
    id: 6,
    title: 'Turf Laying',
    description: 'Instant green results with professional turf installation. We prepare the soil and lay premium quality grass for an immediate lawn transformation.',
    icon: <FaTh className="w-8 h-8 text-white" />,
    color: 'from-green-600 to-green-900',
  },
  {
    id: 7,
    title: 'Rubbish Removal',
    description: 'Efficient clearing of garden waste and general outdoor debris. We leave your property clean and tidy, disposing of all waste responsibly.',
    icon: <FaTrash className="w-8 h-8 text-white" />,
    color: 'from-gray-400 to-gray-600',
  },
  {
    id: 8,
    title: 'Gutter Cleaning',
    description: 'Safe and thorough gutter cleaning for single-storey homes. Prevent water damage and blockages with our reliable maintenance service.',
    icon: <FaTools className="w-8 h-8 text-white" />,
    color: 'from-blue-400 to-blue-600',
  },
  {
    id: 9,
    title: 'Monthly Package',
    description: 'Our holistic care plan for long-term clients — one fixed monthly amount covers regular maintenance, seasonal soil feeding, weed health checks, garden planting and pruning, plus priority service when we are in your area. No surprises, no stress.',
    icon: <FaCalendarAlt className="w-8 h-8 text-white" />,
    color: 'from-violet-400 to-violet-700',
  },
  {
    id: 10,
    title: 'Pressure Washing',
    description: "Powerful high-pressure cleaning for driveways, paths, patios, and hard surfaces. Remove dirt, moss, and grime to restore your property's kerb appeal.",
    icon: <FaTint className="w-8 h-8 text-white" />,
    color: 'from-cyan-400 to-cyan-700',
  },
  {
    id: 11,
    title: 'Property Audit',
    description: 'A detailed assessment of your entire outdoor property. We identify maintenance priorities and deliver a clear action plan to keep your grounds in peak condition.',
    icon: <FaClipboardList className="w-8 h-8 text-white" />,
    color: 'from-amber-400 to-amber-700',
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring', stiffness: 100 }
  }
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-brand-light/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[500px] h-[500px] bg-emerald-300/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand font-bold tracking-wider uppercase text-sm">Professional Care</span>
          <h2 className="mt-2 text-3xl md:text-5xl font-extrabold text-gray-900">
            Our Premium Services
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Comprehensive lawn and garden care tailored to keep your property looking its absolute best, without you having to break a sweat.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service) => (
            <motion.div 
              key={service.id} 
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass bg-white/80 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 border border-white group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className={`w-16 h-16 rounded-2xl mb-6 shadow-lg flex items-center justify-center bg-gradient-to-br ${service.color} transform group-hover:rotate-6 transition-transform`}>
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
             

            </motion.div>
          ))}
          
          {/* Custom CTA Card within grid */}
          <motion.div 
            variants={itemVariants}
            className="rounded-3xl p-8 flex flex-col justify-center items-center text-center bg-gradient-to-br from-brand to-brand-dark text-white shadow-xl shadow-brand/30 relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform translate-x-10 -translate-y-10"></div>
             <h3 className="text-2xl font-bold mb-4 relative z-10">Need a Custom Plan?</h3>
             <p className="mb-6 opacity-90 relative z-10">We offer personalized service bundles tailored exactly to your garden's specific needs.</p>
             <a href="#contact" className="bg-white text-brand px-6 py-3 rounded-full font-bold shadow-md hover:bg-gray-50 transition-colors relative z-10">
               Contact Us Now
             </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
