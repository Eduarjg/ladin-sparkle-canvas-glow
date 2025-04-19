
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("E-mail inválido"),
  whatsapp: z
    .string()
    .min(10, "WhatsApp deve ter pelo menos 10 dígitos")
    .max(11, "WhatsApp deve ter no máximo 11 dígitos")
    .regex(/^\d+$/, "WhatsApp deve conter apenas números"),
});

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      whatsapp: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading(true);
    try {
      const { error } = await supabase.from("leads").insert([values]);
      
      if (error) throw error;

      toast({
        title: "Formulário enviado!",
        description: "Entraremos em contato em breve.",
      });
      
      form.reset();
    } catch (error: any) {
      toast({
        title: "Erro ao enviar formulário",
        description: error.message === "duplicate key value violates unique constraint \"leads_email_unique\"" 
          ? "Este e-mail já está cadastrado."
          : "Ocorreu um erro ao enviar o formulário. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 max-w-md mx-auto p-6 bg-[#111111] rounded-xl border border-[#01F28D]/10">
        <h3 className="text-xl font-semibold mb-4">Receba mais informações</h3>
        
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Seu nome"
                  className="bg-[#0A0A0B] border-[#01F28D]/20"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Seu email"
                  className="bg-[#0A0A0B] border-[#01F28D]/20"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="whatsapp"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Seu WhatsApp (com DDD)"
                  className="bg-[#0A0A0B] border-[#01F28D]/20"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button 
          type="submit" 
          className="w-full bg-[#01F28D] text-[#0A0A0B] hover:bg-[#01F28D]/90"
          disabled={loading}
        >
          {loading ? "Enviando..." : "Enviar"}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
