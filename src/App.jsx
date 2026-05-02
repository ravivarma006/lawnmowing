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

// ── Landing Page ──────────────────────────────────────────────────────────────
const LandingPage = () => (
  <div className="font-sans antialiased text-gray-900 bg-gray-50">
    <Navbar />
    <main>
      <Hero />
      <BeforeAfter />
      <Services />
      <Benefits />
      <HowItWorks />
      <Testimonials />
      <Contact />

    </main>
    <Footer />
  </div>
);

// ── App ───────────────────────────────────────────────────────────────────────
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"              element={<LandingPage />} />
        <Route path="/services/:slug" element={<ServicePage />} />
        <Route path="/quote"         element={<QuotePage />}   />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms"          element={<TermsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
