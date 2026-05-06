import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const AboutVideo = () => {
  return (
    <section className="py-24 bg-[#f9fafb] relative z-10">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-bebas text-6xl md:text-7xl lg:text-8xl leading-[0.85] text-dark mb-6 tracking-normal">
              BALLOON<br/>
              3D LLP
            </h2>
            <p className="font-poppins text-gray-500 leading-relaxed text-[13px] md:text-sm max-w-lg mb-10">
              We provide high-quality 3D printing services with a focus on precision, innovation, and reliability. We turn your ideas into accurate and functional 3D models using advanced technology. From design to final production, we ensure efficient, cost-effective, and high-standard solutions for all your 3D printing needs.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="font-poppins font-bold text-[13px] bg-brand text-white px-8 py-3 rounded-full shadow-lg hover:bg-orange-600 transition-colors tracking-wide"
            >
              GET QUOTE
            </motion.button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full aspect-[16/10] bg-black rounded-xl shadow-2xl overflow-hidden flex items-center justify-center group cursor-pointer"
          >
            {/* Fake Video Player UI */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 z-10 group-hover:bg-brand transition-colors"
            >
              <Play className="w-6 h-6 text-white ml-1" fill="white" />
            </motion.div>

            {/* Fake Controls */}
            <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center gap-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
              <Play className="w-4 h-4 text-white" fill="white" />
              <div className="h-1 flex-grow bg-white/30 rounded-full">
                <div className="h-full w-1/3 bg-brand rounded-full relative">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>
              <span className="text-white font-poppins text-xs font-medium">1:23 / 3:45</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
export default AboutVideo;
