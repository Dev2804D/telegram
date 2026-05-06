import React from 'react';
import { motion } from 'framer-motion';
import ballonImg from '../assets/Ballon_3D.jpeg';

const Hero = () => {
  return (
    <main className="bg-[#f9fafb] min-h-screen flex items-center pt-24 overflow-hidden relative z-0">
      <div className="max-w-[1400px] mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Column: Typography & Content */}
          <motion.div 
            className="flex flex-col items-start z-10 pt-10 lg:pt-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="font-bebas text-7xl md:text-8xl lg:text-[110px] leading-[0.85] text-dark tracking-normal mb-8">
              <span className="block">YOU</span>
              <span className="block">THINK</span>
              <span className="block text-brand">WE PRINT</span>
            </h1>
            
            <p className="font-poppins text-gray-500 leading-relaxed mb-10 max-w-lg text-[15px] md:text-base">
              At Balloon 3D Printing, we transform your ideas into reality using the latest 3D printing technology. From concept to creation, we deliver precision, quality, and innovation in every print.
            </p>
            
            <div className="flex gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="font-poppins font-bold text-sm md:text-base bg-brand text-white px-8 md:px-10 py-3 md:py-4 rounded-full shadow-lg hover:bg-orange-600 transition-colors tracking-wide"
              >
                ABOUT US
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="font-poppins font-bold text-sm md:text-base bg-brand text-white px-8 md:px-10 py-3 md:py-4 rounded-full shadow-lg hover:bg-orange-600 transition-colors tracking-wide"
              >
                GET QUOTE
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column: Balloon Container */}
          <motion.div 
            className="relative flex justify-center lg:justify-end items-center mt-12 lg:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="relative w-[320px] h-[320px] md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px]">
              
              {/* Circular Mask for Image */}
              <div className="w-full h-full rounded-full overflow-hidden border-[12px] border-white shadow-2xl z-10 relative bg-gray-900 flex items-center justify-center">
                <motion.img 
                  src={ballonImg} 
                  alt="3D Dragon Print" 
                  className="w-full h-full object-cover"
                  animate={{ 
                    y: [0, -15, 0],
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                />
              </div>

              {/* Custom SVG Knot and String Effect hanging from the bottom center */}
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-[160px] z-0 flex flex-col items-center">
                {/* The Knot (Improved to match image) */}
                <svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="-mt-1">
                  <circle cx="10" cy="12" r="4" stroke="#111827" strokeWidth="2" />
                  <circle cx="20" cy="12" r="4" stroke="#111827" strokeWidth="2" />
                  <path d="M15 8C15 8 13 14 15 20" stroke="#111827" strokeWidth="2" strokeLinecap="round" />
                  <ellipse cx="15" cy="12" rx="3" ry="5" fill="#111827" />
                </svg>
                {/* The squiggly string (Improved) */}
                <svg width="10" height="120" viewBox="0 0 10 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="-mt-1">
                  <path d="M5 0 C 8 20, 2 40, 5 60 C 8 80, 2 100, 5 120" stroke="#4b5563" strokeWidth="1.5" fill="none" />
                </svg>
                {/* The bottom handle (Added) */}
                <svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="-mt-1">
                  <path d="M2 2C6 10 18 10 22 2" stroke="#4b5563" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </main>
  );
};

export default Hero;
