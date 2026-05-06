import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "How do I integrate the 3D models into React?",
    answer: "You can easily integrate our 3D models using libraries like React Three Fiber or directly via Framer Motion's 3D capabilities. We provide comprehensive documentation for all frameworks."
  },
  {
    question: "Are the assets optimized for mobile?",
    answer: "Yes! Every single asset in our library undergoes rigorous optimization to ensure they load incredibly fast and render smoothly on mobile devices without draining battery."
  },
  {
    question: "Do I need a commercial license?",
    answer: "Our standard subscription includes full commercial rights for up to 5 concurrent projects. For unlimited projects, we offer an enterprise tier."
  },
  {
    question: "Can I customize the colors of the balloons?",
    answer: "Absolutely. Our assets are provided in formats that allow complete material and color customization to perfectly match your brand guidelines."
  }
];

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-6 last:border-b-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left"
      >
        <h3 className="font-poppins font-semibold text-xl text-gray-900 pr-8">{question}</h3>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
          <ChevronDown className="text-primary" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="font-poppins text-gray-700 text-sm leading-relaxed mt-4">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  return (
    <section className="py-24 bg-white relative z-10">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h4 className="font-bebas text-gray-600 text-center text-4xl mb-4 tracking-wide">Questions?</h4>
          <h2 className="font-bebas text-6xl max-md:text-5xl mb-4 text-gray-900 tracking-wide">Frequently Asked Questions</h2>
        </div>
        
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
