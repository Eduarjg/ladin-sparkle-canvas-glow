import { motion } from "framer-motion";

const ClientLogos = () => {
  const companyNames = [
    "Nexora", "Veltrix", "LuminaTech", "Zentra", "Codenix",
    "NovaCorp", "BlueCore", "Quantico", "Skyware", "Adesso"
  ];

  // Repete os nomes para criar loop infinito suave
  const loopedNames = [...companyNames, ...companyNames, ...companyNames];

  return (
    <div className="w-full py-10 overflow-hidden">

      <div className="relative overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap gap-16"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {loopedNames.map((name, index) => (
            <span
              key={index}
              className="text-[#00FF76] text-lg font-medium opacity-80 hover:opacity-100 transition-all"
            >
              {name}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ClientLogos;
