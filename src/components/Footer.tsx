
import React from 'react';
import { Instagram, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* Contact Button Section */}
      <div className="text-center py-8">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-black text-[#01F28D] border border-[#01F28D] px-8 py-3 rounded-full font-bold"
        >
          Entrar em contato
        </motion.button>
      </div>

      {/* Main Footer Content */}
      <div className="grid grid-cols-3 gap-8 px-16 py-12 bg-[#111111]">
        {/* Left: Logo and Brand */}
        <div>
          <h2 className="text-[#01F28D] text-2xl font-bold">Designez</h2>
        </div>

        {/* Center: Navigation Links */}
        <div className="flex justify-center space-x-6">
          <a href="/" className="text-white hover:text-[#01F28D] transition-colors">Home</a>
          <a href="/services" className="text-white hover:text-[#01F28D] transition-colors">Serviços</a>
          <a href="/about" className="text-white hover:text-[#01F28D] transition-colors">Nosotros</a>
          <a href="/blog" className="text-white hover:text-[#01F28D] transition-colors">Blog</a>
        </div>

        {/* Right: Social Icons */}
        <div className="flex justify-end space-x-4">
          <a href="#" className="text-[#01F28D] hover:opacity-80 transition-opacity">
            <Instagram size={24} />
          </a>
          <a href="#" className="text-[#01F28D] hover:opacity-80 transition-opacity">
            <Facebook size={24} />
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center py-4 border-t border-[#01F28D]/20">
        <p className="text-sm">© 2024 Designz | Todos los derechos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
