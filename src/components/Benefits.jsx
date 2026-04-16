import React from 'react';
import { motion } from 'framer-motion';

const benefits = [
  {
    id: 1,
    title: 'Stronger Grass Roots',
    description: 'Regular mowing encourages grass to grow thicker and develop deeper root systems, making it more resilient to drought.',
    number: '01'
  },
  {
    id: 2,
    title: 'Weed & Pest Prevention',
    description: 'Keeping grass at an optimal height prevents weeds from taking over and removes habitats for harmful pests.',
    number: '02'
  },
  {
    id: 3,
    title: 'Even Nutrient Distribution',
    description: 'Consistent cutting ensures all parts of the lawn get equal access to sun and water, preventing patchy areas.',
    number: '03'
  },
  {
    id: 4,
    title: 'Increased Property Value',
    description: 'A beautifully manicured exterior significantly boosts curb appeal and the overall visual value of your home.',
    number: '04'
  }
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-24 bg-brand text-white overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 100% 0%, #ffffff 0%, transparent 50%)' }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/3"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Why Regular Maintenance Matters
            </h2>
            <p className="text-lg text-brand-light mb-8 opacity-90 text-white/80">
              Lawn care is more than just aesthetics. Consistent professional maintenance is vital for the biological health of your yard.
            </p>
            <a href="#how-it-works" className="inline-block border-2 border-white text-white hover:bg-white hover:text-brand px-8 py-3 rounded-full font-bold transition-colors">
              See How It Works
            </a>
          </motion.div>

          <motion.div 
            className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
          >
            {benefits.map((benefit) => (
              <motion.div 
                key={benefit.id}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-colors"
              >
                <div className="text-5xl font-black text-white/20 mb-4">{benefit.number}</div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-white/80 leading-relaxed text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Benefits;
