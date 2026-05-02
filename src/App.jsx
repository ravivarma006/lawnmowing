import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BeforeAfter from './components/BeforeAfter';
import Services from './components/Services';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

import QuotePage from './pages/QuotePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import ServicePage from './pages/ServicePage';

import { HelmetProvider } from 'react-helmet-async';
import SEO from './components/SEO';

import FAQ from './components/FAQ';

// ── Landing Page ──────────────────────────────────────────────────────────────
const LandingPage = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "VISHVADHARA GROUP",
    "image": "https://bharatlawncare.vercel.app/viishvadharagrouplogo.png",
    "@id": "https://bharatlawncare.vercel.app",
    "url": "https://bharatlawncare.vercel.app",
    "telephone": "0415687060",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sydney Area",
      "addressLocality": "Sydney",
      "addressRegion": "NSW",
      "postalCode": "2000",
      "addressCountry": "AU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -33.8688,
      "longitude": 151.2093
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "07:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://facebook.com/vishvadharagroup",
      "https://instagram.com/vishvadharagroup"
    ]
  };

  return (
    <div className="font-sans antialiased text-gray-900 bg-gray-50">
      <SEO 
        title="Premium Lawn Mowing & Garden Care Sydney"
        description="Professional Lawn Mowing & Garden Maintenance in Sydney. Reliable, eco-friendly, and premium care for your green paradise. Get a free quote today!"
        canonical="/"
        schema={localBusinessSchema}
      />
      <Navbar />
      <main>
        <Hero />
        <BeforeAfter />
        <Services />
        <Benefits />
        <HowItWorks />
        <FAQ />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

// ── App ───────────────────────────────────────────────────────────────────────
function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/"              element={<LandingPage />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="/quote"         element={<QuotePage />}   />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms"          element={<TermsPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
