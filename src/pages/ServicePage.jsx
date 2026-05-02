import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { servicesData } from '../data/servicesData';
import { FaCheckCircle, FaStar, FaPhoneAlt, FaChevronRight, FaRegCalendarCheck } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
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

const ServicePage = () => {
  const { slug } = useParams();
  const service = servicesData[slug];

  useEffect(() => {
    if (service) {
      // 1. Set Title
      document.title = service.meta.title;
      
      // 2. Set Meta Description
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        document.head.appendChild(metaDesc);
      }
      metaDesc.content = service.meta.description;

      // 3. Inject LocalBusiness + Service JSON-LD Schema
      const schemaData = {
        "@context": "https://schema.org",
        "@type": ["LocalBusiness", "Service"],
        "name": "Vishvadhara Group",
        "serviceType": service.serviceName,
        "description": service.meta.description,
        "provider": {
          "@type": "LocalBusiness",
          "name": "Vishvadhara Group"
        },
        "areaServed": [
          { "@type": "City", "name": "Sydney" },
          { "@type": "City", "name": "Parramatta" },
          { "@type": "City", "name": "Blacktown" },
          { "@type": "City", "name": "Castle Hill" }
        ]
      };

      // 4. Inject FAQ Schema
      const faqSchemaData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": service.faqs.items.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      };

      // Create or update script tags for JSON-LD
      const injectSchema = (id, data) => {
        let script = document.getElementById(id);
        if (!script) {
          script = document.createElement('script');
          script.id = id;
          script.type = 'application/ld+json';
          document.head.appendChild(script);
        }
        script.textContent = JSON.stringify(data);
      };

      injectSchema('schema-local-business', schemaData);
      injectSchema('schema-faq', faqSchemaData);
      
      // Scroll to top on load
      window.scrollTo(0, 0);
    }
  }, [service, slug]);

  // If slug doesn't exist in data, redirect to home or 404
  if (!service) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="font-sans antialiased text-gray-900 bg-gray-50">
      <Navbar />
      <main> 
        
        {/* SECTION 1 - HERO SECTION */}
        {/* Increased top padding to offset the transparent fixed Navbar */}
        <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-brand-dark text-white overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-light rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6"
            >
              {service.hero.h1}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto"
            >
              {service.hero.subheadline}
            </motion.p>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row justify-center items-center gap-4"
            >
              <Link to="/quote" className="bg-brand hover:bg-brand-light text-white px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-lg shadow-brand/30 flex items-center gap-2">
                Get Free Quote <FaChevronRight className="w-4 h-4" />
              </Link>
              <a href="tel:0485560093" className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors flex items-center gap-2">
                <FaPhoneAlt className="w-4 h-4" /> Call Now
              </a>
            </motion.div>
          </div>
        </section>

        {/* SECTION 2 & 3 - ABOUT & INCLUDED */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* About */}
              <div>
                <span className="text-brand font-bold tracking-wider uppercase text-sm">{service.serviceName}</span>
                <h2 className="text-3xl font-extrabold text-gray-900 mt-2 mb-6">{service.about.title}</h2>
                <div className="prose prose-lg text-gray-600">
                  <p className="mb-4"><strong>What it is:</strong> {service.about.what}</p>
                  <p className="mb-4"><strong>Why it matters:</strong> {service.about.whyMatters}</p>
                  <p className="mb-4"><strong>Common issues solved:</strong> {service.about.commonIssues}</p>
                  <p><strong>Who needs this:</strong> {service.about.whoNeeds}</p>
                </div>
              </div>

              {/* What's Included */}
              <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{service.included.title}</h3>
                <ul className="space-y-4">
                  {service.included.items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <FaCheckCircle className="text-brand w-6 h-6 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 4 - OUR PROCESS */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">{service.process.title}</h2>
              <p className="mt-4 text-lg text-gray-600">Our systematic approach guarantees consistent, high-quality results every time.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.process.steps.map((step, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 relative">
                  <div className="absolute -top-4 -left-4 w-10 h-10 bg-brand text-white rounded-full flex items-center justify-center font-bold text-xl shadow-md">
                    {index + 1}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2 mt-2">{step.title}</h4>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5 & 6 - SYDNEY RELEVANCE & LOCAL SEO */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900 mb-6">{service.sydneyRelevance.title}</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {service.sydneyRelevance.content}
                </p>
                <div className="p-6 bg-brand-light/10 rounded-2xl border border-brand-light/20">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.serviceAreas.title}</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {service.serviceAreas.content}
                  </p>
                </div>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-2xl relative h-[400px]">
                {/* Fallback pattern if no image */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-dark to-brand">
                   <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center flex-col text-white text-center p-8">
                  <FaRegCalendarCheck className="w-16 h-16 mb-4 opacity-80" />
                  <h3 className="text-3xl font-bold mb-2">Local Sydney Experts</h3>
                  <p className="text-xl opacity-90">Ready to serve your suburb today.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7 & 8 - BENEFITS & WHY CHOOSE US */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Benefits */}
              <div>
                <h2 className="text-3xl font-extrabold mb-8">{service.benefits.title}</h2>
                <div className="grid gap-6">
                  {service.benefits.items.map((item, index) => (
                    <div key={index} className="flex">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-8 h-8 rounded-full bg-brand/20 flex items-center justify-center">
                          <FaCheckCircle className="text-brand w-4 h-4" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-xl font-bold">{item.title}</h4>
                        <p className="mt-1 text-gray-400">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-gray-800 rounded-3xl p-8 lg:p-10 border border-gray-700">
                <h2 className="text-3xl font-extrabold mb-8">{service.whyChoose.title}</h2>
                <ul className="space-y-4">
                  {service.whyChoose.items.map((item, index) => (
                    <li key={index} className="flex items-center text-lg">
                      <FaStar className="text-amber-400 w-5 h-5 mr-4 flex-shrink-0" />
                      <span className="text-gray-200">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 9 - FAQ */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">{service.faqs.title}</h2>
            </div>
            <div className="space-y-6">
              {service.faqs.items.map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 10 & 11 - RELATED SERVICES & TRUST SIGNALS */}
        <section className="py-20 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center md:text-left">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Explore Related Services</h3>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  {service.relatedServices.map((rel, index) => (
                    <Link 
                      key={index} 
                      to={`/services/${rel.slug}`}
                      className="px-6 py-3 bg-gray-50 hover:bg-brand hover:text-white text-gray-700 rounded-full transition-colors font-medium border border-gray-200"
                    >
                      {rel.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{service.trustSignals.title}</h3>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  {service.trustSignals.items.map((signal, index) => (
                    <span key={index} className="flex items-center text-gray-600 bg-gray-50 px-4 py-2 rounded-lg border border-gray-100">
                      <FaCheckCircle className="text-emerald-500 mr-2" /> {signal}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 12 - CTA */}
        <section className="py-20 bg-brand text-white text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">{service.cta.title}</h2>
            <p className="text-xl md:text-2xl mb-10 opacity-90">{service.cta.subtitle}</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <Link to="/quote" className="bg-white text-brand px-10 py-4 rounded-full font-bold text-xl shadow-xl hover:bg-gray-50 transition-colors w-full sm:w-auto">
                {service.cta.button1}
              </Link>
              <a href="tel:0485560093" className="border-2 border-white text-white hover:bg-white/10 px-10 py-4 rounded-full font-bold text-xl transition-colors w-full sm:w-auto">
                {service.cta.button2}
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default ServicePage;
