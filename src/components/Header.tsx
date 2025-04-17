
import { motion } from "framer-motion";
import { MessageSquare, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
};

const NavLink = ({ href, children, onClick }: NavLinkProps) => (
  <motion.a 
    href={href}
    className="relative text-gray-300 hover:text-[#01F28D] transition-colors text-sm md:text-base font-medium"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
  >
    <span className="relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[#01F28D] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
      {children}
    </span>
  </motion.a>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/seu_numero?text=Olá! Gostaria de saber mais sobre os serviços de tráfego pago.", "_blank");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed w-full top-0 z-50 bg-[#0A0A0B]/90 backdrop-blur-lg border-b border-[#01F28D]/10"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <a href="#home" className="flex items-center space-x-2">
              <div className="flex items-baseline">
                <span className="font-serif text-xl md:text-2xl font-bold bg-gradient-to-r from-[#01F28D] to-[#9b87f5] bg-clip-text text-transparent">Cresce+</span>
                <span className="ml-1 font-mono text-sm md:text-base font-extrabold tracking-widest text-white">MAKERS</span>
              </div>
            </a>
          </motion.div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#servicos">Serviços</NavLink>
            <NavLink href="#nossos">Sobre Nós</NavLink>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                onClick={handleWhatsAppClick}
                className="bg-[#01F28D]/90 hover:bg-[#01F28D] text-[#0A0A0B] font-medium px-5 py-2 rounded-full transition-all"
                size="sm"
              >
                <MessageSquare className="mr-1 h-4 w-4" />
                <span>WhatsApp</span>
              </Button>
            </motion.div>
          </div>
          
          {/* Mobile menu button */}
          <motion.div 
            className="md:hidden flex items-center"
            whileTap={{ scale: 0.9 }}
          >
            <button 
              onClick={toggleMenu}
              className="p-2 rounded-full bg-[#111111] border border-[#01F28D]/20"
              aria-label="Menu"
            >
              {isMenuOpen ? <X className="h-5 w-5 text-[#01F28D]" /> : <Menu className="h-5 w-5 text-[#01F28D]" />}
            </button>
          </motion.div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <motion.div 
        initial={false}
        animate={{ height: isMenuOpen ? "auto" : 0, opacity: isMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={cn(
          "md:hidden overflow-hidden bg-[#111111] border-b border-[#01F28D]/10",
          !isMenuOpen && "pointer-events-none"
        )}
      >
        <div className="container mx-auto px-6 py-4 flex flex-col space-y-6">
          <NavLink href="#home" onClick={closeMenu}>Home</NavLink>
          <NavLink href="#servicos" onClick={closeMenu}>Serviços</NavLink>
          <NavLink href="#nossos" onClick={closeMenu}>Sobre Nós</NavLink>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-[#01F28D]/90 hover:bg-[#01F28D] text-[#0A0A0B] font-medium px-5 py-2 rounded-full w-full justify-center"
              size="sm"
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              <span>WhatsApp</span>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;
