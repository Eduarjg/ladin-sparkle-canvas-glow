
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Formulário enviado!",
      description: "Entraremos em contato em breve.",
    });
    setEmail("");
    setName("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto p-6 bg-[#111111] rounded-xl border border-[#00FF76]/10">
      <h3 className="text-xl font-semibold mb-4">Receba mais informações</h3>
      <div>
        <Input
          type="text"
          placeholder="Seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="bg-[#0A0A0B] border-[#00FF76]/20"
        />
      </div>
      <div>
        <Input
          type="email"
          placeholder="Seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-[#0A0A0B] border-[#00FF76]/20"
        />
      </div>
      <Button type="submit" className="w-full bg-[#00FF76] text-[#0A0A0B] hover:bg-[#00FF76]/90">
        Enviar
      </Button>
    </form>
  );
};

export default ContactForm;
