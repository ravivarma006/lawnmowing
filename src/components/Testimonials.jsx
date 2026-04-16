import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Homeowner',
    content: 'Bharat Lawn Care completely transformed my backyard. They are punctual, professional, and the results are stunning. Highly recommended!',
    image: 'https://i.pravatar.cc/150?img=47'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Property Manager',
    content: 'We use their services for multiple properties. Consistent quality, affordable pricing, and they always leave the area perfectly clean.',
    image: 'https://i.pravatar.cc/150?img=11'
  },
  {
    id: 3,
    name: 'Emily Davis',
    role: 'Local Resident',
    content: 'I love the weekly mowing service. My lawn looks like a golf course, and I get my weekends back. Best decision ever!',
    image: 'https://i.pravatar.cc/150?img=5'
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand font-bold tracking-wider uppercase text-sm">Real Reviews</span>
          <h2 className="mt-2 text-3xl md:text-5xl font-extrabold text-gray-900">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div 
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-gray-50 border border-gray-100 rounded-3xl p-8 hover:shadow-xl transition-shadow relative"
            >
              <div className="text-brand text-4xl font-serif absolute top-6 right-8 opacity-20">"</div>
              <p className="text-gray-600 mb-8 italic relative z-10">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-14 h-14 rounded-full border-2 border-brand-light" />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <span className="text-sm text-gray-500">{testimonial.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
