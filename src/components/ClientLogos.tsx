
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const ClientLogos = () => {
  return (
    <div className="overflow-hidden relative w-full">
      <motion.div
        className="flex space-x-8"
        animate={{
          x: [0, -1600],
        }}
        transition={{
          x: {
            duration: 20,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          },
        }}
      >
        <Card className="shrink-0 p-4 bg-[#111111]/50 backdrop-blur">
          <img src="logo1.png" alt="ODE" className="h-16" />
        </Card>
        <Card className="shrink-0 p-4 bg-[#111111]/50 backdrop-blur">
          <img src="logo2.png" alt="TURBO" className="h-16" />
        </Card>
        <Card className="shrink-0 p-4 bg-[#111111]/50 backdrop-blur">
          <img src="logo3.png" alt="LECOS" className="h-16" />
        </Card>
        <Card className="shrink-0 p-4 bg-[#111111]/50 backdrop-blur">
          <img src="logo4.png" alt="ADESSI" className="h-16" />
        </Card>

        {/* Duplicate for seamless loop */}
        <Card className="shrink-0 p-4 bg-[#111111]/50 backdrop-blur">
          <img src="logo1.png" alt="ODE" className="h-16" />
        </Card>
        <Card className="shrink-0 p-4 bg-[#111111]/50 backdrop-blur">
          <img src="logo2.png" alt="TURBO" className="h-16" />
        </Card>
        <Card className="shrink-0 p-4 bg-[#111111]/50 backdrop-blur">
          <img src="logo3.png" alt="LECOS" className="h-16" />
        </Card>
        <Card className="shrink-0 p-4 bg-[#111111]/50 backdrop-blur">
          <img src="logo4.png" alt="ADESSI" className="h-16" />
        </Card>
        
        {/* Additional duplication for continuous effect */}
        <Card className="shrink-0 p-4 bg-[#111111]/50 backdrop-blur">
          <img src="logo1.png" alt="ODE" className="h-16" />
        </Card>
        <Card className="shrink-0 p-4 bg-[#111111]/50 backdrop-blur">
          <img src="logo2.png" alt="TURBO" className="h-16" />
        </Card>
        <Card className="shrink-0 p-4 bg-[#111111]/50 backdrop-blur">
          <img src="logo3.png" alt="LECOS" className="h-16" />
        </Card>
        <Card className="shrink-0 p-4 bg-[#111111]/50 backdrop-blur">
          <img src="logo4.png" alt="ADESSI" className="h-16" />
        </Card>
      </motion.div>
    </div>
  );
};

export default ClientLogos;
