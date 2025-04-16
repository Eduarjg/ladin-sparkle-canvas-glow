import { motion } from "framer-motion";
import { ArrowRight, Star, Crown, Users, Rocket, Phone, MessageSquare } from "lucide-react";
import ClientLogos from "@/components/ClientLogos";
import ContactForm from "@/components/ContactForm";
import Testimonials from "@/components/Testimonials";
const Index = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/seu_numero?text=Olá! Gostaria de saber mais sobre os serviços de tráfego pago.", "_blank");
  };
  return <div className="min-h-screen bg-[#0A0A0B] text-white">
      {/* Header/Nav */}
      <nav className="fixed w-full top-0 z-50 bg-[#0A0A0B]/80 backdrop-blur-lg border-b border-[#00FF76]/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            duration: 0.5
          }} className="flex items-center space-x-2">
              <img src="/lovable-uploads/6196dfc2-a3ed-49bd-9144-f0901793053a.png" alt="Crescer+ Makers" className="h-10\n" />
            </motion.div>
            <div className="hidden md:flex items-center space-x-8">
              <NavLink href="#home">Home</NavLink>
              <NavLink href="#servicos">Serviços</NavLink>
              <NavLink href="#nosotros">Sobre nós</NavLink>
              <motion.button whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} onClick={handleWhatsAppClick} className="bg-[#00FF76] text-[#0A0A0B] px-6 py-2 rounded-full font-medium hover:brightness-110 transition-all inline-flex items-center space-x-2">
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

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
              <span className="text-[#00FF76]">aceleração digital</span>
            </h1>
            <p className="text-lg text-gray-400 mb-8">
              Geramos tráfego qualificado e vendas consistentes para sua empresa
              com anúncios de alta performance.
            </p>
            <motion.button whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} onClick={handleWhatsAppClick} className="bg-[#00FF76] text-[#0A0A0B] px-8 py-3 rounded-full font-medium inline-flex items-center space-x-2 hover:brightness-110 transition-all">
              <span>Começar agora</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Logos Section */}
      <motion.section initial={{
      opacity: 0
    }} whileInView={{
      opacity: 1
    }} transition={{
      duration: 0.8
    }} className="py-20 border-t border-b border-[#00FF76]/10">
        <div className="container mx-auto px-6">
          <p className="text-center mb-12 text-gray-400">Empresas que confiam em Cresce+</p>
          <ClientLogos />
        </div>
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
      <section className="py-20 px-6 bg-[#00FF76]/5" id="nosotros">
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
          <div className="grid md:grid-cols-2 gap-8">
            <FeatureCard icon={<Star className="w-6 h-6 text-[#00FF76]" />} title="Experiência" description="Na Cresce+, transformamos seu anúncio em resultado, com mais de dois anos de experiência, criamos campanhas otimizadas." />
            <FeatureCard icon={<Crown className="w-6 h-6 text-[#00FF76]" />} title="Soluções otimizadas" description="Soluções otimizadas para resultados reais e crescimento consistente do seu negócio." />
            <FeatureCard icon={<Users className="w-6 h-6 text-[#00FF76]" />} title="Assessoria colaborativa" description="Trabalhamos em conjunto para garantir os melhores resultados para sua empresa." />
            <FeatureCard icon={<Rocket className="w-6 h-6 text-[#00FF76]" />} title="Enfoque centrado no cliente" description="Nossa prioridade é o seu sucesso, com estratégias personalizadas para cada objetivo." />
          </div>
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
    </div>;
};
const NavLink = ({
  href,
  children
}: {
  href: string;
  children: React.ReactNode;
}) => <motion.a href={href} className="text-gray-300 hover:text-[#00FF76] transition-colors" whileHover={{
  scale: 1.05
}} whileTap={{
  scale: 0.95
}}>
    {children}
  </motion.a>;
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
}} className="p-6 rounded-xl bg-[#111111] border border-[#00FF76]/10 hover:border-[#00FF76]/30 transition-all">
    <div className="w-12 h-12 bg-[#00FF76]/10 rounded-lg flex items-center justify-center mb-4">
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
}} className="p-6 rounded-xl bg-[#111111] border border-[#00FF76]/10 hover:border-[#00FF76]/30 transition-all">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </motion.div>;
const services = [{
  icon: <Star className="w-6 h-6 text-[#00FF76]" />,
  title: "Desenvolvimento de contas",
  description: "Otimizamos suas campanhas para máxima performance e resultados."
}, {
  icon: <Crown className="w-6 h-6 text-[#00FF76]" />,
  title: "Relatórios semanais",
  description: "Acompanhamento detalhado com métricas relevantes para seu negócio."
}, {
  icon: <Rocket className="w-6 h-6 text-[#00FF76]" />,
  title: "Otimização de anúncios",
  description: "Anúncios otimizados para alcançar seu público-alvo de forma eficiente."
}];
export default Index;