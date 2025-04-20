import React from 'react';
import { Instagram, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/seu_numero?text=Olá! Gostaria de saber mais sobre os serviços de tráfego pago.", "_blank");
  };

  return (
    <footer className="bg-black text-white">
      {/* Contact Button Section */}
      <div className="text-center py-8">
        <motion.button 
          whileHover={{
            scale: 1.05
          }} 
          whileTap={{
            scale: 0.95
          }} 
          onClick={handleWhatsAppClick}
          className="bg-black text-[#01F28D] border border-[#01F28D] px-8 py-3 rounded-full font-bold"
        >
          Entrar em contato
        </motion.button>
      </div>

      {/* Main Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-16 py-12 bg-[#111111]">
        {/* Left: Logo and Brand */}
        <div>
          <h2 className="text-[#01F28D] text-2xl font-bold">Creça+Market</h2>
        </div>

        {/* Center: Navigation Links */}
        <div className="flex justify-center space-x-6">
          <span 
            onClick={() => scrollToSection('home')}
            className="text-white hover:text-[#01F28D] transition-colors cursor-pointer"
          >
            Home
          </span>
          <span 
            onClick={() => scrollToSection('servicos')}
            className="text-white hover:text-[#01F28D] transition-colors cursor-pointer"
          >
            Serviços
          </span>
          <span 
            onClick={() => scrollToSection('nossos')}
            className="text-white hover:text-[#01F28D] transition-colors cursor-pointer"
          >
            Sobre
          </span>
        </div>

        {/* Right: Social Icons */}
        <div className="flex justify-end space-x-4">
          <span 
            onClick={() => window.open('https://www.instagram.com/crecamarkers/', '_blank')}
            className="text-[#01F28D] hover:opacity-80 transition-opacity cursor-pointer"
          >
            <Instagram size={24} />
          </span>
          <span 
            onClick={() => window.open('https://facebook.com', '_blank')}
            className="text-[#01F28D] hover:opacity-80 transition-opacity cursor-pointer"
          >
            <Facebook size={24} />
          </span>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center py-4 border-t border-[#01F28D]/20">
        <p className="text-sm">© 2025 Creça+Market | Todos os direitos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
