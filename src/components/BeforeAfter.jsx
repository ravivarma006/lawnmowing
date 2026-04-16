import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const beforeImage = '/before_lawn.png';
const afterImage = '/after_lawn.png';

const BeforeAfter = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - left, width));
    const percent = (x / width) * 100;
    setSliderPosition(percent);
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const onTouchMove = (e) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  // Pulse animation for the slider handle to draw attention
  useEffect(() => {
    const interval = setInterval(() => {
      if(!isDragging && sliderPosition === 50) {
        setSliderPosition(52);
        setTimeout(() => {
           if(!isDragging) setSliderPosition(50);
        }, 300);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [isDragging, sliderPosition]);

  return (
    <section id="before-after" className="py-24 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-brand font-bold tracking-wider uppercase text-sm">The Transformation</span>
          <h2 className="mt-2 text-3xl md:text-5xl font-extrabold text-gray-900">
            See the Difference We Make
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            From overgrown and untidy to pristine and perfectly manicured. Drag the slider to reveal the results of our professional care.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full max-w-5xl mx-auto aspect-video rounded-3xl overflow-hidden shadow-2xl cursor-ew-resize select-none"
          ref={containerRef}
          onMouseMove={onMouseMove}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onTouchMove={onTouchMove}
          onTouchEnd={() => setIsDragging(false)}
          onMouseDown={(e) => {
            setIsDragging(true);
            handleMove(e.clientX);
          }}
          onTouchStart={(e) => {
            setIsDragging(true);
            handleMove(e.touches[0].clientX);
          }}
        >
          {/* After Image (Background) */}
          <div className="absolute inset-0 w-full h-full">
            <img 
              src={afterImage} 
              alt="Clean manicured lawn" 
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              draggable="false"
            />
            <div className="absolute top-4 right-4 glass px-4 py-2 rounded-full text-brand-dark font-bold text-sm shadow-md">
              After: Perfect Pattern
            </div>
          </div>

          {/* Before Image (Foreground, clipped) */}
          <div 
            className="absolute inset-0 w-full h-full overflow-hidden"
            style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
          >
            <img 
              src={beforeImage} 
              alt="Messy untidy lawn" 
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              draggable="false"
            />
             <div className="absolute top-4 left-4 glass px-4 py-2 rounded-full text-gray-700 font-bold text-sm shadow-md">
              Before: Overgrown
            </div>
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-[0_0_10px_rgba(0,0,0,0.5)] z-10"
            style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-brand text-brand">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
              <svg className="rotate-180" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default BeforeAfter;
