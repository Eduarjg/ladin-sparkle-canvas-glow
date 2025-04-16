
import { motion } from "framer-motion";

const ClientLogos = () => {
  return (
    <div className="overflow-hidden relative w-full py-8">
      <motion.div
        className="flex space-x-16 items-center"
        animate={{
          x: [0, -2000],
        }}
        transition={{
          x: {
            duration: 25,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          },
        }}
      >
        {/* First set of logos */}
        <motion.img whileHover={{ scale: 1.1 }} src="logo1.png" alt="ODE" className="h-30 opacity-90 hover:opacity-100 transition-all" />
        <motion.img whileHover={{ scale: 1.1 }} src="logo2.png" alt="TURBO" className="h-30 opacity-90 hover:opacity-100 transition-all" />
        <motion.img whileHover={{ scale: 1.1 }} src="logo3.png" alt="LECOS" className="h-30 opacity-90 hover:opacity-100 transition-all" />
        <motion.img whileHover={{ scale: 1.1 }} src="logo4.png" alt="ADESSI" className="h-30 opacity-90 hover:opacity-100 transition-all" />
        
        {/* Duplicate set for continuous loop */}
        <motion.img whileHover={{ scale: 1.1 }} src="logo1.png" alt="ODE" className="h-30 opacity-90 hover:opacity-100 transition-all" />
        <motion.img whileHover={{ scale: 1.1 }} src="logo2.png" alt="TURBO" className="h-30 opacity-90 hover:opacity-100 transition-all" />
        <motion.img whileHover={{ scale: 1.1 }} src="logo3.png" alt="LECOS" className="h-30 opacity-90 hover:opacity-100 transition-all" />
        <motion.img whileHover={{ scale: 1.1 }} src="logo4.png" alt="ADESSI" className="h-30 opacity-90 hover:opacity-100 transition-all" />
        
        {/* Third set for extra smoothness */}
        <motion.img whileHover={{ scale: 1.1 }} src="logo1.png" alt="ODE" className="h-30 opacity-90 hover:opacity-100 transition-all" />
        <motion.img whileHover={{ scale: 1.1 }} src="logo2.png" alt="TURBO" className="h-30 opacity-90 hover:opacity-100 transition-all" />
        <motion.img whileHover={{ scale: 1.1 }} src="logo3.png" alt="LECOS" className="h-30 opacity-90 hover:opacity-100 transition-all" />
        <motion.img whileHover={{ scale: 1.1 }} src="logo4.png" alt="ADESSI" className="h-30 opacity-90 hover:opacity-100 transition-all" />
      </motion.div>
    </div>
  );
};

export default ClientLogos;
