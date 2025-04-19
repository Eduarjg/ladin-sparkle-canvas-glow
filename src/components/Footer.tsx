
import { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Facebook, TikTok } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <footer className="w-full bg-[#0A0A0B] text-white">
      {/* Contact Button Section */}
      <div className="py-12 text-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          className="px-8 py-3 bg-black rounded-full font-bold text-[#01F28D] border border-[#01F28D] hover:bg-[#01F28D] hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(1,242,141,0.3)]"
        >
          Entrar em contato
        </motion.button>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-t border-[#01F28D]/20">
          {/* Logo & Brand */}
          <div className="flex items-center justify-center md:justify-start">
            <h2 className="text-2xl font-bold text-[#01F28D]">Designez</h2>
          </div>

          {/* Navigation */}
          <nav className="flex justify-center items-center">
            <ul className="flex flex-wrap justify-center gap-8">
              {["Home", "Serviços", "Nosotros", "Blog"].map((item) => (
                <li key={item}>
                  <Link
                    to="/"
                    className="text-gray-300 hover:text-[#01F28D] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-end gap-6">
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#01F28D] hover:text-[#01F28D]/80 transition-colors"
            >
              <TikTok size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#01F28D] hover:text-[#01F28D]/80 transition-colors"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#01F28D] hover:text-[#01F28D]/80 transition-colors"
            >
              <Facebook size={24} />
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-[#01F28D]/20 py-6">
          <p className="text-center text-sm text-gray-400">
            © 2024 Designz | Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
