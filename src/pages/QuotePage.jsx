import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaTractor, FaSeedling, FaCut, FaBug,
  FaBroom, FaTh, FaTrash, FaTools,
  FaCheckCircle, FaArrowLeft, FaPaperPlane,
  FaUser, FaPhone, FaMapMarkerAlt,
} from 'react-icons/fa';

// ─── Service Options ──────────────────────────────────────────────────────────
const SERVICE_OPTIONS = [
  { id: 'lawn-mowing',        label: 'Lawn Mowing',        Icon: FaTractor  },
  { id: 'garden-maintenance', label: 'Garden Maintenance', Icon: FaSeedling },
  { id: 'hedge-trimming',     label: 'Hedge Trimming',     Icon: FaCut      },
  { id: 'weed-control',       label: 'Weed Control',       Icon: FaBug      },
  { id: 'full-yard-cleanup',  label: 'Full Yard Cleanup',  Icon: FaBroom    },
  { id: 'turf-laying',        label: 'Turf Laying',        Icon: FaTh       },
  { id: 'rubbish-removal',    label: 'Rubbish Removal',    Icon: FaTrash    },
  { id: 'gutter-cleaning',    label: 'Gutter Cleaning',    Icon: FaTools    },
];

const INITIAL_FORM = { name: '', phone: '', address: '', services: [] };

// ─── ServiceCheckbox ──────────────────────────────────────────────────────────
const ServiceCheckbox = ({ service, checked, onChange }) => {
  const { id, label, Icon } = service;
  return (
    <label
      htmlFor={`svc-${id}`}
      className={`flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer select-none
        transition-all duration-200
        ${checked
          ? 'border-green-500 bg-green-50 text-green-800 shadow-sm'
          : 'border-gray-200 bg-gray-50 text-gray-700 hover:border-green-400 hover:bg-green-50/50'
        }`}
    >
      <input
        type="checkbox"
        id={`svc-${id}`}
        value={id}
        checked={checked}
        onChange={() => onChange(id)}
        className="sr-only"
      />
      <span className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0
        ${checked ? 'bg-green-500 text-white' : 'bg-green-100 text-green-600'}`}>
        <Icon className="w-4 h-4" />
      </span>
      <span className="text-sm font-medium leading-tight">{label}</span>
      {checked && (
        <FaCheckCircle className="ml-auto w-4 h-4 text-green-500 flex-shrink-0" />
      )}
    </label>
  );
};

// ─── Main Page ────────────────────────────────────────────────────────────────
const QuotePage = () => {
  const [form, setForm]       = useState(INITIAL_FORM);
  const [errors, setErrors]   = useState({});
  const [status, setStatus]   = useState('idle');
  const [touched, setTouched] = useState({});

  const validate = (data) => {
    const errs = {};
    if (!data.name.trim())    errs.name    = 'Full name is required.';
    if (!data.phone.trim())   errs.phone   = 'Contact number is required.';
    else if (!/^[0-9+\-\s()]{7,15}$/.test(data.phone.trim()))
                              errs.phone   = 'Enter a valid phone number.';
    if (!data.address.trim()) errs.address = 'Address is required.';
    if (data.services.length === 0) errs.services = 'Please select at least one service.';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updated = { ...form, [name]: value };
    setForm(updated);
    if (touched[name]) setErrors(validate(updated));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors(validate(form));
  };

  const toggleService = (id) => {
    const updated = {
      ...form,
      services: form.services.includes(id)
        ? form.services.filter((s) => s !== id)
        : [...form.services, id],
    };
    setForm(updated);
    if (touched.services) setErrors(validate(updated));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ name: true, phone: true, address: true, services: true });
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setStatus('submitting');
    try {
      // ┌─────────────────────────────────────────────────────────────────────┐
      // │  TODO: EmailJS Integration                                          │
      // │                                                                     │
      // │  1. npm install @emailjs/browser                                    │
      // │  2. import emailjs from '@emailjs/browser';                         │
      // │  3. Replace the setTimeout below with:                              │
      // │                                                                     │
      // │  await emailjs.send(                                                │
      // │    'YOUR_SERVICE_ID',    // from emailjs.com dashboard              │
      // │    'YOUR_TEMPLATE_ID',   // from emailjs.com dashboard              │
      // │    {                                                                 │
      // │      from_name: form.name,                                          │
      // │      phone:     form.phone,                                         │
      // │      address:   form.address,                                       │
      // │      services:  form.services.join(', '),                           │
      // │    },                                                                │
      // │    'YOUR_PUBLIC_KEY',    // from emailjs.com dashboard              │
      // │  );                                                                  │
      // └─────────────────────────────────────────────────────────────────────┘
      await new Promise((res) => setTimeout(res, 1500));
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const handleReset = () => {
    setForm(INITIAL_FORM);
    setErrors({});
    setTouched({});
    setStatus('idle');
  };

  // ── Success Screen ──────────────────────────────────────────────────────────
  if (status === 'success') {
    return (
      <div className="min-h-screen flex items-center justify-center px-4"
        style={{ background: 'linear-gradient(135deg, #064e3b 0%, #065f46 40%, #047857 70%, #10b981 100%)' }}>
        <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="fixed bottom-0 right-0 w-[400px] h-[400px] bg-emerald-300/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl p-10 max-w-md w-full text-center shadow-2xl"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md"
          >
            <FaCheckCircle className="w-10 h-10 text-green-500" />
          </motion.div>

          <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Request Sent!</h2>
          <p className="text-gray-500 mb-8">
            Thank you, <span className="font-semibold text-gray-800">{form.name}</span>!
            We've received your request and will get back to you within <strong className="text-green-700">24 hours</strong>.
          </p>

          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-4 text-left mb-8 space-y-2">
            <p className="text-gray-600 text-sm">
              <span className="font-semibold text-gray-800">Contact:</span> {form.phone}
            </p>
            <p className="text-gray-600 text-sm">
              <span className="font-semibold text-gray-800">Services:</span>{' '}
              {form.services
                .map((id) => SERVICE_OPTIONS.find((s) => s.id === id)?.label)
                .join(', ')}
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleReset}
              className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-200 px-5 py-3 rounded-full font-medium transition-all"
            >
              Submit Another
            </button>
            <Link
              to="/"
              className="flex-1 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-full font-bold text-center transition-all shadow-md"
            >
              Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  // ── Main Form ───────────────────────────────────────────────────────────────
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
          src="/viishvadharagrouplogo.png"
          alt="VISHVADHARA GROUP Logo"
          className="h-12 w-auto object-contain drop-shadow-md"
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
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">

          {/* Card Header */}
          <div className="px-8 pt-8 pb-6 border-b border-gray-100">
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

          {/* Form Body */}
          <form onSubmit={handleSubmit} noValidate className="px-8 py-7 space-y-5">

            {/* ── Full Name ── */}
            <div>
              <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-1.5">
                Full Name <span className="text-green-600">*</span>
              </label>
              <div className="relative">
                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="e.g. Rajesh Kumar"
                  className={`w-full bg-gray-50 border ${errors.name && touched.name ? 'border-red-400 focus:ring-red-300' : 'border-gray-200 focus:ring-green-300'} text-gray-900 placeholder-gray-400 rounded-xl pl-11 pr-4 py-3 text-sm outline-none focus:ring-2 focus:border-green-400 transition-all`}
                />
              </div>
              <AnimatePresence>
                {errors.name && touched.name && (
                  <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    className="text-red-500 text-xs mt-1.5 ml-1">{errors.name}</motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* ── Contact Number ── */}
            <div>
              <label htmlFor="phone" className="block text-gray-700 text-sm font-semibold mb-1.5">
                Contact Number <span className="text-green-600">*</span>
              </label>
              <div className="relative">
                <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="e.g. +91 98765 43210"
                  className={`w-full bg-gray-50 border ${errors.phone && touched.phone ? 'border-red-400 focus:ring-red-300' : 'border-gray-200 focus:ring-green-300'} text-gray-900 placeholder-gray-400 rounded-xl pl-11 pr-4 py-3 text-sm outline-none focus:ring-2 focus:border-green-400 transition-all`}
                />
              </div>
              <AnimatePresence>
                {errors.phone && touched.phone && (
                  <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    className="text-red-500 text-xs mt-1.5 ml-1">{errors.phone}</motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* ── Address ── */}
            <div>
              <label htmlFor="address" className="block text-gray-700 text-sm font-semibold mb-1.5">
                Property Address <span className="text-green-600">*</span>
              </label>
              <div className="relative">
                <FaMapMarkerAlt className="absolute left-4 top-4 text-gray-400 w-4 h-4 pointer-events-none" />
                <textarea
                  id="address"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  rows={3}
                  placeholder="Street, Suburb, City, Postcode"
                  className={`w-full bg-gray-50 border ${errors.address && touched.address ? 'border-red-400 focus:ring-red-300' : 'border-gray-200 focus:ring-green-300'} text-gray-900 placeholder-gray-400 rounded-xl pl-11 pr-4 py-3 text-sm outline-none focus:ring-2 focus:border-green-400 transition-all resize-none`}
                />
              </div>
              <AnimatePresence>
                {errors.address && touched.address && (
                  <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    className="text-red-500 text-xs mt-1.5 ml-1">{errors.address}</motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* ── Services Multi-Select ── */}
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Services Required <span className="text-green-600">*</span>
                <span className="text-gray-400 font-normal ml-2">(select all that apply)</span>
              </label>
              <div className="grid grid-cols-2 gap-2">
                {SERVICE_OPTIONS.map((svc) => (
                  <ServiceCheckbox
                    key={svc.id}
                    service={svc}
                    checked={form.services.includes(svc.id)}
                    onChange={toggleService}
                  />
                ))}
              </div>
              <AnimatePresence>
                {errors.services && touched.services && (
                  <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    className="text-red-500 text-xs mt-2 ml-1">{errors.services}</motion.p>
                )}
              </AnimatePresence>
              {form.services.length > 0 && (
                <p className="text-green-600 text-xs mt-2 ml-1 font-medium">
                  ✓ {form.services.length} service{form.services.length > 1 ? 's' : ''} selected
                </p>
              )}
            </div>

            {/* ── Error state ── */}
            <AnimatePresence>
              {status === 'error' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl px-4 py-3">
                  Something went wrong. Please try again or contact us directly.
                </motion.div>
              )}
            </AnimatePresence>

            {/* ── Submit Button ── */}
            <motion.button
              type="submit"
              disabled={status === 'submitting'}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700
                text-white disabled:opacity-60 disabled:cursor-not-allowed
                py-4 rounded-2xl font-bold text-base shadow-lg shadow-green-900/20
                transition-all duration-200 mt-2"
            >
              {status === 'submitting' ? (
                <>
                  <svg className="animate-spin w-5 h-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z" />
                  </svg>
                  Sending Request…
                </>
              ) : (
                <>
                  <FaPaperPlane className="w-4 h-4" />
                  Submit Your Request
                </>
              )}
            </motion.button>

            {/* ── Back link ── */}
            <div className="text-center pt-1">
              <Link
                to="/"
                className="inline-flex items-center gap-1.5 text-gray-400 hover:text-gray-600 text-sm transition-colors"
              >
                <FaArrowLeft className="w-3 h-3" />
                Back to homepage
              </Link>
            </div>

          </form>
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
