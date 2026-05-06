import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#f9fafb] pt-20 pb-10 border-t border-gray-200">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div>
            <h4 className="font-poppins font-bold text-gray-900 text-sm mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About us', 'Service', 'Industry Served', 'Our Work', 'Blog', 'Contact us'].map((link) => (
                <li key={link}>
                  <a href="#" className="font-poppins text-xs text-gray-500 hover:text-brand transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-poppins font-bold text-gray-900 text-sm mb-6">Services</h4>
            <ul className="space-y-4">
              {['Rapid Prototyping Services', 'Vacuum Casting', '3D Laser Scanning', '3D Modeling', 'Small Batch Manufacturing', 'Architectural Model Making Services'].map((link) => (
                <li key={link}>
                  <a href="#" className="font-poppins text-xs text-gray-500 hover:text-brand transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-poppins font-bold text-gray-900 text-sm mb-6 opacity-0 hidden lg:block">Services Continued</h4>
            <ul className="space-y-4">
              {['Jewellery RPT', 'Reverse Engineering', 'Inspection Report', 'Product Commercialization', 'Industrial Design', '3D Design Services'].map((link) => (
                <li key={link}>
                  <a href="#" className="font-poppins text-xs text-gray-500 hover:text-brand transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-poppins font-bold text-gray-900 text-sm mb-6">Get In Touch</h4>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-xs font-poppins text-gray-500">
                <Mail className="w-4 h-4 text-brand flex-shrink-0" />
                <span>info@balloon3d.com</span>
              </li>
              <li className="flex items-start gap-3 text-xs font-poppins text-gray-500">
                <Phone className="w-4 h-4 text-brand flex-shrink-0" />
                <span>+91 9999999999</span>
              </li>
              <li className="flex items-start gap-3 text-xs font-poppins text-gray-500">
                <MapPin className="w-4 h-4 text-brand flex-shrink-0" />
                <span>Ahmedabad, Gujarat, India</span>
              </li>
            </ul>

            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-poppins text-[10px] font-bold text-gray-500 hover:bg-brand hover:text-white transition-all">
                FB
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-poppins text-[10px] font-bold text-gray-500 hover:bg-brand hover:text-white transition-all">
                TW
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-poppins text-[10px] font-bold text-gray-500 hover:bg-brand hover:text-white transition-all">
                IG
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-poppins text-[10px] font-bold text-gray-500 hover:bg-brand hover:text-white transition-all">
                YT
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-poppins text-[10px] font-bold text-gray-500 hover:bg-brand hover:text-white transition-all">
                LI
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-poppins text-xs text-gray-400">© 2026 Balloon 3D LLP. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="font-poppins text-xs text-gray-400 hover:text-brand transition-colors">Privacy Policy</a>
            <a href="#" className="font-poppins text-xs text-gray-400 hover:text-brand transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
