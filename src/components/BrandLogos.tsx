
import { motion } from "framer-motion";
import { Crown, Zap, Globe, Shield, BarChart, Database } from "lucide-react";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  name: string;
  style: "tech" | "elegant" | "creative" | "corporate" | "startup";
  icon?: React.ReactNode;
  color?: string;
}

const BrandLogo = ({ name, style, icon, color = "#ffffff" }: BrandLogoProps) => {
  const getLogoStyle = () => {
    switch (style) {
      case "tech":
        return "font-mono uppercase tracking-widest text-xs font-bold";
      case "elegant":
        return "font-serif italic tracking-wide text-base";
      case "creative":
        return "font-sans font-extrabold tracking-tight text-base uppercase";
      case "corporate":
        return "font-sans font-medium tracking-normal text-sm";
      case "startup":
        return "font-sans font-black tracking-tight text-base";
      default:
        return "font-sans";
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={cn(
        "flex items-center justify-center space-x-1 p-2 rounded-md transition-all duration-300",
        style === "tech" && "border border-[#9b87f5]/30 bg-[#1A1F2C]/20",
        style === "elegant" && "border-b border-[#fff]/20",
        style === "corporate" && "bg-gradient-to-r from-[#0EA5E9]/10 to-[#0EA5E9]/5 rounded-sm",
        style === "startup" && "bg-gradient-to-br from-[#F97316]/10 to-[#F97316]/5",
      )}
      style={{ color }}
    >
      {icon && <div className="opacity-80">{icon}</div>}
      <span className={cn(getLogoStyle())}>
        {name}
      </span>
    </motion.div>
  );
};

const BrandLogos = () => {
  const brands: BrandLogoProps[] = [
    { name: "NEXTECH", style: "tech", icon: <Database className="w-4 h-4" />, color: "#9b87f5" },
    { name: "Elegantia", style: "elegant", color: "#D6BCFA" },
    { name: "IMPACTO", style: "creative", icon: <Zap className="w-4 h-4" />, color: "#FEC6A1" },
    { name: "Global Systems", style: "corporate", icon: <Globe className="w-4 h-4" />, color: "#0EA5E9" },
    { name: "SHIELD", style: "tech", icon: <Shield className="w-4 h-4" />, color: "#8B5CF6" },
    { name: "Analítica", style: "corporate", icon: <BarChart className="w-4 h-4" />, color: "#33C3F0" },
    { name: "CROWN", style: "startup", icon: <Crown className="w-4 h-4" />, color: "#D946EF" },
  ];

  return (
    <div className="py-6">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center">
        {brands.map((brand, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="min-h-12 flex items-center"
          >
            <BrandLogo {...brand} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BrandLogos;
