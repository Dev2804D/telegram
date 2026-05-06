import React from 'react';
import { motion } from 'framer-motion';

const images = [
  "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1581092162384-8987c1d64718?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1631558556816-43f1107d3b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1610488663806-cd348cb5df80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
];

const OurWork = () => {
  return (
    <section className="py-24 bg-white relative z-10">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="font-poppins text-[40px] font-bold text-dark text-center mb-16 tracking-tight">
          Our Work
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {images.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              className="aspect-square rounded-[20px] overflow-hidden shadow-sm hover:shadow-xl transition-shadow cursor-pointer"
            >
              <img src={img} alt={`Work ${i+1}`} className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="font-poppins font-bold text-[13px] bg-brand text-white px-10 py-3.5 rounded-full shadow-lg hover:bg-orange-600 transition-colors tracking-widest uppercase"
          >
            VIEW MORE
          </motion.button>
        </div>
      </div>
    </section>
  );
};
export default OurWork;
