
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Formulário enviado!",
      description: "Entraremos em contato em breve.",
    });
    setEmail("");
    setName("");
    setWhatsapp("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto p-6 bg-[#111111] rounded-xl border border-[#01F28D]/10">
      <h3 className="text-xl font-semibold mb-4">Receba mais informações</h3>
      <div>
        <Input
          type="text"
          placeholder="Seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="bg-[#0A0A0B] border-[#01F28D]/20"
        />
      </div>
      <div>
        <Input
          type="email"
          placeholder="Seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-[#0A0A0B] border-[#01F28D]/20"
        />
      </div>
      <div>
        <Input
          type="tel"
          placeholder="Seu WhatsApp (com DDD)"
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
          required
          className="bg-[#0A0A0B] border-[#01F28D]/20"
        />
      </div>
      <Button type="submit" className="w-full bg-[#01F28D] text-[#0A0A0B] hover:bg-[#01F28D]/90">
        Enviar
      </Button>
    </form>
  );
};

export default ContactForm;
