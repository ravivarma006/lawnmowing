import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const contactDetails = [
  {
    icon: FaPhoneAlt,
    label: 'Phone',
    value: '+61 2 1234 5678',
    href: 'tel:+61212345678',
    color: 'bg-green-500/20 text-green-400',
  },
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'info@vishvadharagroup.com.au',
    href: 'mailto:info@vishvadharagroup.com.au',
    color: 'bg-emerald-500/20 text-emerald-400',
  },
  {
    icon: FaMapMarkerAlt,
    label: 'Service Area',
    value: 'Sydney & Surrounding Suburbs',
    href: null,
    color: 'bg-teal-500/20 text-teal-400',
  },
  {
    icon: FaClock,
    label: 'Working Hours',
    value: 'Mon – Sat: 7:00 AM – 6:00 PM',
    href: null,
    color: 'bg-lime-500/20 text-lime-400',
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gray-950 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-900/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-brand font-bold tracking-wider uppercase text-sm">Get In Touch</span>
          <h2 className="mt-2 text-3xl md:text-5xl font-extrabold text-white">
            Contact Us
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Ready to transform your lawn? Reach out and we'll get back to you within 24 hours.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Left — Contact Info Cards + CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {contactDetails.map(({ icon: Icon, label, value, href, color }) => (
              <div
                key={label}
                className="flex items-center gap-5 bg-gray-900 border border-gray-800 rounded-2xl p-5 hover:border-brand/50 hover:bg-gray-800/60 transition-all duration-300 group"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${color} group-hover:scale-110 transition-transform`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-0.5">{label}</p>
                  {href ? (
                    <a href={href} className="text-gray-100 font-semibold hover:text-brand transition-colors">
                      {value}
                    </a>
                  ) : (
                    <p className="text-gray-100 font-semibold">{value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="mt-2"
            >
              <Link
                to="/quote"
                className="flex items-center justify-center gap-2 w-full bg-brand hover:bg-brand-dark text-white font-bold text-lg px-8 py-4 rounded-2xl shadow-lg shadow-brand/30 transition-all duration-200"
              >
                Get a Free Quote →
              </Link>
            </motion.div>
          </motion.div>

          {/* Right — Sydney Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-800 relative">
              <iframe
                title="Sydney Service Area"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d424146.01798235456!2d150.65267305000002!3d-33.84356419999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129838f39a743f%3A0x3017d681632a850!2sSydney%20NSW%2C%20Australia!5e0!3m2!1sen!2sau!4v1714300000000!5m2!1sen!2sau"
                width="100%"
                height="420"
                style={{ border: 0, display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[20%]"
              />

              {/* Floating location pin badge */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
                  className="flex flex-col items-center"
                >
                  <div className="bg-gray-900/90 backdrop-blur-sm rounded-2xl shadow-2xl px-5 py-3 flex items-center gap-3 border border-gray-700">
                    <div className="w-10 h-10 bg-brand rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                      <FaMapMarkerAlt className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium">We Service</p>
                      <p className="text-sm font-bold text-white">Sydney, NSW</p>
                    </div>
                  </div>
                  <div className="w-0.5 h-4 bg-brand/70 rounded-full" />
                  <div className="w-2.5 h-2.5 bg-brand rounded-full shadow-lg shadow-brand/50" />
                </motion.div>
              </div>

              {/* Corner badge */}
              <div className="absolute top-4 left-4 bg-gray-900/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg border border-gray-700">
                <p className="text-xs font-bold text-gray-100">📍 Sydney, Australia</p>
              </div>
            </div>

            {/* Stats row below map */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              {[
                { value: '5+',   label: 'Years Active'   },
                { value: '500+', label: 'Happy Clients'  },
                { value: '24h',  label: 'Response Time'  },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="bg-gray-900 border border-gray-800 rounded-2xl py-4 text-center hover:border-brand/40 hover:bg-gray-800/60 transition-all"
                >
                  <p className="text-2xl font-extrabold text-brand">{value}</p>
                  <p className="text-xs text-gray-400 font-medium mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
