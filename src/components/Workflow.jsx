import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, Box, Settings2, Printer, Hammer, CheckCircle2 } from 'lucide-react';

const steps = [
  { num: "01", icon: <PenTool className="w-5 h-5 text-gray-700" />, title: "CAD Design" },
  { num: "02", icon: <Box className="w-5 h-5 text-gray-700" />, title: "Material Selection" },
  { num: "03", icon: <Settings2 className="w-5 h-5 text-gray-700" />, title: "Machine Setup" },
  { num: "04", icon: <Printer className="w-5 h-5 text-gray-700" />, title: "Build Process (3D Printing)" },
  { num: "05", icon: <Hammer className="w-5 h-5 text-gray-700" />, title: "Post-Processing" },
  { num: "06", icon: <CheckCircle2 className="w-5 h-5 text-gray-700" />, title: "Final Application" }
];

const Workflow = () => {
  return (
    <section className="py-24 bg-[#eaeaea] relative z-10">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="font-bebas text-5xl md:text-6xl text-gray-900 text-center mb-16 tracking-tight">
          3D Printing Process Workflow
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="bg-white rounded-[22px] p-6 flex items-center justify-between shadow-sm border border-gray-50 group transition-all hover:border-brand/30 hover:shadow-xl"
            >
              <div className="flex items-center gap-6">
                <div className="text-gray-400 group-hover:text-brand transition-all transform group-hover:scale-110">
                  {React.cloneElement(step.icon, { className: "w-7 h-7" })}
                </div>
                <span className="font-poppins font-bold text-base text-[#2239a4] tracking-tight">{step.title}</span>
              </div>
              <div className="bg-[#f3f4f6] rounded-2xl px-4 py-3 flex flex-col items-center justify-center min-w-[70px] group-hover:bg-brand/10 transition-all">
                <span className="font-poppins font-bold text-2xl text-gray-400 leading-none group-hover:text-brand transition-colors">{step.num}</span>
                <span className="font-poppins text-[10px] uppercase tracking-widest font-bold text-gray-400 group-hover:text-brand transition-colors mt-1">Step</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Workflow;
