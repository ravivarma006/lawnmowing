import React from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const faqs = [
  {
    question: "How often should I mow my lawn in Sydney?",
    answer: "For most Sydney lawns (Buffalo, Couch, or Kikuyu), we recommend mowing every 1-2 weeks during the growing season (spring/summer) and every 3-4 weeks during winter to maintain optimal health and appearance."
  },
  {
    question: "Do you offer organic or eco-friendly weed control?",
    answer: "Yes! We offer a range of eco-friendly weed management solutions that are safe for pets and children while effectively targeting common Australian weeds like Bindii and Clover."
  },
  {
    question: "What is included in a regular garden maintenance service?",
    answer: "Our standard maintenance includes lawn mowing, edging, pruning of shrubs/hedges, weed control in garden beds, and clearing of leaves/debris to keep your property looking pristine."
  },
  {
    question: "Are you fully insured for property maintenance?",
    answer: "Absolutely. VISHVADHARA GROUP is fully insured with public liability coverage, giving you complete peace of mind while we transform your outdoor spaces."
  }
];

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-b border-gray-800 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group focus:outline-none"
      >
        <span className="text-lg font-semibold text-white group-hover:text-brand transition-colors">
          {question}
        </span>
        <FaChevronDown 
          className={`text-brand transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 pb-6' : 'max-h-0'}`}
      >
        <p className="text-gray-400 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section id="faq" className="py-24 bg-gray-950 relative">
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand font-bold tracking-wider uppercase text-sm">Got Questions?</span>
          <h2 className="mt-2 text-3xl md:text-5xl font-extrabold text-white">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-gray-400">
            Find answers to common questions about our lawn and garden care services in Sydney.
          </p>
        </div>

        <div className="bg-gray-900/50 rounded-3xl border border-gray-800 px-8 py-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
