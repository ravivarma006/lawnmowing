import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    service: 'lawn-mowing'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Usually submit to backend
    alert('Thank you! Your quote request has been received.');
    setFormData({ name: '', phone: '', address: '', service: 'lawn-mowing' });
  };

  return (
    <section id="contact" className="py-24 bg-gray-900 text-white relative flex items-center">
      {/* Decorative background image */}
      <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1592424040954-3e9112dbfcb2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-gray-900"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <span className="text-brand-light font-bold tracking-wider uppercase text-sm">Get in Touch</span>
            <h2 className="mt-2 text-4xl md:text-5xl font-extrabold mb-6">
              Ready for a Perfect Lawn?
            </h2>
            <p className="text-gray-300 text-lg mb-10">
              Contact us today for a free, no-obligation quote. Fill out the form, and our team will get back to you within 24 hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-brand-light">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h4 className="text-sm text-gray-400">Call Us Anytime</h4>
                  <p className="text-lg font-bold">1-800-LAWN-CARE</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-brand-light">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="text-sm text-gray-400">Email Us</h4>
                  <p className="text-lg font-bold">info@vishvadharagroup.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-brand-light">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="text-sm text-gray-400">Our Location</h4>
                  <p className="text-lg font-bold">123 Green Avenue, Garden City</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:w-1/2"
          >
            <div className="glass-dark p-8 md:p-10 rounded-3xl border border-gray-700 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-white">Book Your Service Today</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-black/30 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-light transition-colors"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      required
                      className="w-full bg-black/30 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-light transition-colors"
                      placeholder="(555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Service Required</label>
                    <select 
                      className="w-full bg-black/30 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-light transition-colors appearance-none"
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                    >
                      <option value="lawn-mowing">Lawn Mowing</option>
                      <option value="garden-maintenance">Garden Maintenance</option>
                      <option value="hedge-trimming">Hedge Trimming</option>
                      <option value="full-cleanup">Full Yard Cleanup</option>
                      <option value="turf-laying">Turf Laying</option>
                      <option value="rubbish-removal">Rubbish Removal</option>
                      <option value="gutter-cleaning">Gutter Cleaning (Single Storey)</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Property Address</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-black/30 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-light transition-colors"
                    placeholder="123 Main St, City"
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-brand hover:bg-brand-light text-white font-bold py-4 rounded-lg shadow-lg shadow-brand/30 transition-all mt-4 hover:scale-[1.02]"
                >
                  Get Your Free Quote
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;
