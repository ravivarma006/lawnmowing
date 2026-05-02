import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';

const QuotePage = () => {
  useEffect(() => {
    // Dynamically load the Tally embed script
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    document.body.appendChild(script);

    // If Tally is already loaded (e.g., navigating back and forth), re-initialize embeds
    if (window.Tally) {
      window.Tally.loadEmbeds();
    }

    return () => {
      // Optional: Cleanup script if necessary, but leaving it ensures embeds work on re-mount
    };
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start px-4 py-10"
      style={{ background: 'linear-gradient(135deg, #064e3b 0%, #065f46 40%, #047857 70%, #10b981 100%)' }}
    >
      {/* Decorative blobs */}
      <div className="fixed top-0 left-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-emerald-300/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />
      <div className="fixed top-1/2 right-0 w-64 h-64 bg-teal-300/10 rounded-full blur-2xl translate-x-1/2 pointer-events-none" />

      {/* Brand Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-3 mb-8 relative z-10"
      >
        <img
          src="/Vishvadharalogo.png"
          alt="VISHVADHARA GROUP Logo"
          className="h-20 w-auto object-contain brightness-0 invert opacity-90 drop-shadow-md"
        />
        <span className="text-xl font-bold text-white tracking-tight drop-shadow">
          VISHVADHARA GROUP
        </span>
      </motion.div>

      {/* Form Card — WHITE */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="w-full max-w-xl relative z-10"
      >
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden pb-4">

          {/* Card Header */}
          <div className="px-8 pt-8 pb-4">
            <div className="flex items-center gap-3 mb-1">
              <span className="text-3xl">🌿</span>
              <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight">
                Get Your <span className="text-green-600">FREE</span> Quote
              </h1>
            </div>
            <p className="text-gray-500 text-sm mt-2 ml-10">
              Fill in the details below — we'll get back to you within <strong className="text-gray-800">24 hours</strong>.
            </p>
          </div>

          {/* Tally Embed Container */}
          <div className="px-4 md:px-8">
            <iframe 
              data-tally-src="https://tally.so/embed/VLo576?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
              loading="lazy" 
              width="100%" 
              height="586" 
              frameBorder="0" 
              marginHeight="0" 
              marginWidth="0" 
              title="Get Your FREE Quote"
              className="w-full"
            ></iframe>
          </div>

          {/* Back link */}
          <div className="text-center pt-4 pb-2 border-t border-gray-50 mt-4">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-gray-400 hover:text-gray-600 text-sm transition-colors"
            >
              <FaArrowLeft className="w-3 h-3" />
              Back to homepage
            </Link>
          </div>

        </div>

        {/* Trust badge */}
        <p className="text-white/50 text-xs text-center mt-5">
          🔒 Your information is private and will never be shared with third parties.
        </p>
      </motion.div>
    </div>
  );
};

export default QuotePage;
