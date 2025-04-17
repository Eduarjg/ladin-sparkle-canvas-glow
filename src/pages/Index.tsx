
import { motion } from "framer-motion";
import { ArrowRight, Star, Crown, Users, Rocket } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import Testimonials from "@/components/Testimonials";
import ClientLogos from "@/components/ClientLogos";
import Header from "@/components/Header";

const Index = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/seu_numero?text=Olá! Gostaria de saber mais sobre os serviços de tráfego pago.", "_blank");
  };
  
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6" id="home">
        <div className="container mx-auto">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Gestão de tráfego pago de alta performance e{" "}
              <span className="text-[#01F28D]">aceleração digital</span>
            </h1>
            <p className="text-lg text-gray-400 mb-8">
              Geramos tráfego qualificado e vendas consistentes para sua empresa
              com anúncios de alta performance.
            </p>
            <motion.button whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} onClick={handleWhatsAppClick} className="bg-[#01F28D] text-[#0A0A0B] px-8 py-3 rounded-full font-medium inline-flex items-center space-x-2 hover:brightness-110 transition-all">
              <span>Começar agora</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Logos Section with Continuous Scrolling */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto">
          <p className="text-center mb-6 text-gray-400 font-medium">Empresas que confiam em Cresce+</p>
        </div>
        <ClientLogos />
      </motion.section>

      {/* Services Section */}
      <section className="py-20 px-6" id="servicos">
        <div className="container mx-auto">
          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }} className="text-3xl font-bold text-center mb-16">
            Serviços
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => <ServiceCard key={index} {...service} />)}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-[#01F28D]/5" id="nossos">
        <div className="container mx-auto">
          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }} className="text-3xl font-bold text-center mb-16">
            Por que escolher Cresce+?
          </motion.h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
            <FeatureCard icon={<Star className="w-6 h-6 text-[#01F28D]" />} title="Experiência" description="Na Cresce+, transformamos seu anúncio em resultado, com mais de dois anos de experiência, criamos campanhas otimizadas." />
            <FeatureCard icon={<Crown className="w-6 h-6 text-[#01F28D]" />} title="Soluções otimizadas" description="Soluções otimizadas para resultados reais e crescimento consistente do seu negócio." />
            <FeatureCard icon={<Users className="w-6 h-6 text-[#01F28D]" />} title="Assessoria colaborativa" description="Trabalhamos em conjunto para garantir os melhores resultados para sua empresa." />
            <FeatureCard icon={<Rocket className="w-6 h-6 text-[#01F28D]" />} title="Enfoque centrado no cliente" description="Nossa prioridade é o seu sucesso, com estratégias personalizadas para cada objetivo." />
          </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <ContactForm />
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />
    </div>
  );
};

const ServiceCard = ({
  icon,
  title,
  description
}: any) => <motion.div initial={{
  opacity: 0,
  y: 20
}} whileInView={{
  opacity: 1,
  y: 0
}} whileHover={{
  y: -5
}} transition={{
  duration: 0.5
}} className="p-6 rounded-xl bg-[#111111] border border-[#01F28D]/10 hover:border-[#01F28D]/30 transition-all">
    <div className="w-12 h-12 bg-[#01F28D]/10 rounded-lg flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </motion.div>;

const FeatureCard = ({
  icon,
  title,
  description
}: any) => <motion.div initial={{
  opacity: 0,
  y: 20
}} whileInView={{
  opacity: 1,
  y: 0
}} whileHover={{
  y: -5
}} transition={{
  duration: 0.5
}} className="p-6 rounded-xl bg-[#111111] border border-[#01F28D]/10 hover:border-[#01F28D]/30 transition-all">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </motion.div>;

const services = [{
  icon: <Star className="w-6 h-6 text-[#01F28D]" />,
  title: "Desenvolvimento de contas",
  description: "Otimizamos suas campanhas para máxima performance e resultados."
}, {
  icon: <Crown className="w-6 h-6 text-[#01F28D]" />,
  title: "Relatórios semanais",
  description: "Acompanhamento detalhado com métricas relevantes para seu negócio."
}, {
  icon: <Rocket className="w-6 h-6 text-[#01F28D]" />,
  title: "Otimização de anúncios",
  description: "Anúncios otimizados para alcançar seu público-alvo de forma eficiente."
}];

export default Index;
