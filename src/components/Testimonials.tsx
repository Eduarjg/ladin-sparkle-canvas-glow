
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rafael Silva",
      company: "TechSoft",
      text: "A equipe da Cresce+ transformou completamente nossa presença digital. Nosso ROI aumentou em 250% nos primeiros três meses!",
      rating: 5,
    },
    {
      name: "Mariana Costa",
      company: "Bella Moda",
      text: "Trabalhar com a Cresce+ foi uma experiência incrível. Eles realmente entendem como gerar resultados reais com tráfego pago.",
      rating: 5,
    },
    {
      name: "Pedro Almeida",
      company: "Construtech",
      text: "Profissionais extremamente competentes. Conseguimos aumentar nossas conversões em 180% com as estratégias implementadas.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 px-6 bg-[#0A0A0B]">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-16 text-white"
        >
          O que nossos clientes dizem
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ name, company, text, rating }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ y: -5 }}
    transition={{ duration: 0.5 }}
    className="p-6 rounded-xl bg-[#111111] border border-[#01F28D]/10 hover:border-[#01F28D]/30 transition-all"
  >
    <div className="flex mb-4">
      {Array.from({ length: rating }).map((_, i) => (
        <Star key={i} className="w-5 h-5 text-[#01F28D] fill-[#01F28D]" />
      ))}
    </div>
    <p className="text-gray-400 mb-6 italic">"{text}"</p>
    <div className="text-center">
      <h4 className="font-bold text-lg text-[#01F28D] mb-1">{name}</h4>
      <p className="text-sm text-gray-500 uppercase tracking-wider">{company}</p>
    </div>
  </motion.div>
);

export default Testimonials;

