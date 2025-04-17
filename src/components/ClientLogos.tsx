
import { motion } from "framer-motion";

const ClientLogos = () => {
  const clientLogos = [
    { name: "NEXTECH", style: "tech", color: "#9b87f5" },
    { name: "Elegantia", style: "elegant", color: "#D6BCFA" },
    { name: "IMPACTO", style: "creative", color: "#FEC6A1" },
    { name: "Global Systems", style: "corporate", color: "#0EA5E9" },
    { name: "SHIELD", style: "tech", color: "#8B5CF6" },
    { name: "Analítica", style: "corporate", color: "#33C3F0" },
    { name: "CROWN", style: "startup", color: "#D946EF" },
    { name: "Synergy", style: "elegant", color: "#E5DEFF" },
    { name: "QUANTUM", style: "tech", color: "#6E59A5" },
    { name: "Fusion", style: "creative", color: "#F97316" },
  ];

  // Duplicamos a lista para criar o efeito contínuo
  const duplicatedLogos = [...clientLogos, ...clientLogos];

  const getLogoStyle = (style: string) => {
    switch (style) {
      case "tech":
        return "font-mono uppercase tracking-widest text-xl font-bold";
      case "elegant":
        return "font-serif italic tracking-wide text-xl";
      case "creative":
        return "font-sans font-extrabold tracking-tight text-xl uppercase";
      case "corporate":
        return "font-sans font-medium tracking-normal text-lg";
      case "startup":
        return "font-sans font-black tracking-tight text-xl";
      default:
        return "font-sans";
    }
  };

  return (
    <div className="w-full py-10 overflow-hidden bg-[#0A0A0B]/80 border-t border-b border-[#00FF76]/10">
      <div className="relative overflow-hidden">
        <motion.div
          className="flex items-center gap-16 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className={`flex-shrink-0 transition-all duration-300 hover:scale-105`}
            >
              <span
                className={`${getLogoStyle(logo.style)}`}
                style={{ color: logo.color }}
              >
                {logo.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ClientLogos;
