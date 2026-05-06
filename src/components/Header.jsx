import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, User, Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ['About us', 'Service', 'Industry Served', 'Our Work', 'Blog', 'Contact us'];

  return (
    <header className="absolute top-0 w-full z-50 bg-transparent">
      <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center h-24">
        
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          {/* Subtle balloon icon simulation */}
          <div className="w-4 h-6 bg-brand rounded-t-full rounded-b-md relative flex justify-center items-end pb-[2px]">
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="absolute -bottom-2 w-px h-3 bg-gray-400"></div>
          </div>
          <span className="font-poppins font-bold text-2xl text-dark tracking-tight ml-2">
            Balloon<span className="text-brand">3D</span>
          </span>
        </a>
        
        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a key={link} href="#" className="font-poppins text-gray-600 font-medium hover:text-brand transition-colors text-sm">
              {link}
            </a>
          ))}
        </nav>

        {/* Right Controls */}
        <div className="hidden lg:flex items-center gap-6">
          <button className="flex items-center gap-2 text-gray-500 hover:text-dark transition-colors">
            <Globe size={18} />
            <span className="font-poppins text-sm font-medium">Google Translate</span>
          </button>
          
          <button className="bg-brand w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-orange-600 transition-colors shadow-md">
            <User size={18} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-dark" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white shadow-lg overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a key={link} href="#" className="font-poppins text-gray-600 font-medium hover:text-brand">
                  {link}
                </a>
              ))}
              <div className="border-t border-gray-100 pt-4 mt-2 flex flex-col gap-4">
                <button className="flex items-center gap-2 text-gray-500">
                  <Globe size={18} />
                  <span className="font-poppins text-sm font-medium">Google Translate</span>
                </button>
                <button className="bg-brand text-white font-poppins font-medium py-2 rounded-full text-center">
                  Account
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
