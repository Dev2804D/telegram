import React from 'react';
import { motion } from 'framer-motion';
import { Smile, Settings, Factory, Car, Plane, GraduationCap, Stethoscope, Cuboid } from 'lucide-react';

const industries = [
  {
    icon: <Smile className="w-6 h-6 text-gray-700" />,
    title: "Dental",
    desc: "Precision customized solutions for modern orthodontics and dentistry.",
    bullets: ["Surgical guides and bridges", "Custom dental implants", "Anatomical models"]
  },
  {
    icon: <Settings className="w-6 h-6 text-gray-700" />,
    title: "Engineering",
    desc: "Accelerate development and prototyping & structural validations.",
    bullets: ["Functional prototyping", "Concept visualization", "Rapid tooling solutions"]
  },
  {
    icon: <Factory className="w-6 h-6 text-gray-700" />,
    title: "Manufacturing",
    desc: "Rapid tooling for production workflow and assembly operations.",
    bullets: ["Custom jigs and fixtures", "Low-volume production runs", "Industrial tooling solutions"]
  },
  {
    icon: <Car className="w-6 h-6 text-gray-700" />,
    title: "Automotive",
    desc: "Custom parts & rapid prototyping for mobility innovators.",
    bullets: ["Lightweight engine parts", "Custom interior components", "Scalable system parts"]
  },
  {
    icon: <Plane className="w-6 h-6 text-gray-700" />,
    title: "Aerospace",
    desc: "Lightweight, high-performance components designed for the skies.",
    bullets: ["High-strength/weight parts", "Complex bracket structures", "Aerospace-grade enclosures"]
  },
  {
    icon: <GraduationCap className="w-6 h-6 text-gray-700" />,
    title: "Education",
    desc: "Hands-on learning resources & research-based student prototypes.",
    bullets: ["Tangible research aids", "Architectural models", "Classroom prototypes"]
  },
  {
    icon: <Stethoscope className="w-6 h-6 text-gray-700" />,
    title: "Medical",
    desc: "Accurate anatomical models & patient-specific healthcare devices.",
    bullets: ["Pre-surgical planning models", "Customized prosthetics", "Surgical instruments"]
  },
  {
    icon: <Cuboid className="w-6 h-6 text-gray-700" />,
    title: "3D Animation",
    desc: "Experience cinematic storytelling spanning multi-platform visual vectors.",
    bullets: ["Artistic sculptures", "Character/creature concept art", "Props & immersive designs"]
  }
];

const Industries = () => {
  return (
    <section className="py-24 bg-[#eaeaea] relative z-10">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-poppins text-[10px] text-brand font-semibold uppercase tracking-[0.2em] mb-4">What We Serve</p>
          <h2 className="font-poppins text-4xl md:text-[40px] font-bold text-gray-900 mb-6 tracking-tight leading-tight">Industries Powered<br/>by Precision Print</h2>
          <p className="font-poppins text-gray-500 text-[13px] max-w-2xl mx-auto leading-relaxed">
            From dental labs to aerospace floors — our technology adapts to every production demand. We deliver customized, high-performance solutions tailored to the unique requirements of various sectors.
          </p>
          <div className="w-2 h-2 bg-brand rotate-45 mx-auto mt-8"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {industries.map((item, i) => (
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
              <ul className="space-y-2.5 w-full">
                {item.bullets.map((bullet, j) => (
                  <li key={j} className="flex items-start text-xs md:text-sm font-poppins text-gray-600">
                    <span className="w-1 h-1 rounded-full bg-brand mt-1.5 mr-2.5 flex-shrink-0"></span>
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
export default Industries;
