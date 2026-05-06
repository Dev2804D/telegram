import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Box, Maximize, Target, Palette, ScanLine } from 'lucide-react';

const technologies = [
  {
    icon: <Layers className="w-8 h-8 text-brand" />,
    title: "FDM",
    desc: "Cost-effective 3D printing using thermoplastic filaments for prototypes and functional parts.",
    bullets: ["Affordable prototyping", "Wide material options", "Strong functional parts"]
  },
  {
    icon: <Box className="w-8 h-8 text-brand" />,
    title: "SLS",
    desc: "Powder-based printing that creates strong, durable, and complex geometries without support structures.",
    bullets: ["No support structures", "High strength", "Complex geometries"]
  },
  {
    icon: <Maximize className="w-8 h-8 text-brand" />,
    title: "SLA",
    desc: "High-precision resin printing for smooth surfaces and fine details.",
    bullets: ["High accuracy", "Smooth surface finish", "Ideal for detailed models"]
  },
  {
    icon: <Target className="w-8 h-8 text-brand" />,
    title: "Polyjet",
    desc: "Advanced multi-material printing with high resolution and smooth finishes.",
    bullets: ["Multi-material capability", "High resolution", "Smooth texture"]
  },
  {
    icon: <Palette className="w-8 h-8 text-brand" />,
    title: "Multicolor",
    desc: "Full-color 3D printing for realistic models, prototypes, and presentation pieces.",
    bullets: ["Realistic color output", "Visual prototypes", "Marketing models"]
  },
  {
    icon: <ScanLine className="w-8 h-8 text-brand" />,
    title: "3D Scanning",
    desc: "Accurate digital capture of physical objects for reverse engineering and replication.",
    bullets: ["High-precision scanning", "Reverse engineering", "Digital archiving"]
  }
];

const Technology = () => {
  return (
    <section className="py-24 bg-[#eaeaea] relative z-10 border-t border-gray-200">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-poppins text-[10px] text-brand font-semibold uppercase tracking-[0.2em] mb-4">Our Capabilities</p>
          <h2 className="font-poppins text-4xl md:text-[40px] font-bold text-gray-900 mb-6 tracking-tight leading-tight">Our Technology</h2>
          <p className="font-poppins text-gray-500 text-[13px] max-w-2xl mx-auto leading-relaxed">
            We leverage state-of-the-art 3D printing technologies to deliver high-precision, industrial-grade solutions tailored to your specific project needs. From rapid prototyping to final production, our advanced systems ensure unmatched quality.
          </p>
          <div className="w-2 h-2 bg-brand rotate-45 mx-auto mt-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              className="bg-white rounded-[20px] p-8 shadow-sm border border-gray-50 transition-all flex flex-col items-center"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="font-poppins font-bold text-gray-900 text-lg text-center mb-3">{item.title}</h3>
              <p className="font-poppins text-gray-500 text-sm text-center leading-relaxed mb-6 min-h-[48px]">
                {item.desc}
              </p>
              <ul className="space-y-2.5 w-full border-t border-gray-100 pt-6">
                {item.bullets.map((bullet, j) => (
                  <li key={j} className="flex items-start text-xs md:text-sm font-poppins text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand mt-1.5 mr-3 flex-shrink-0"></span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Technology;
