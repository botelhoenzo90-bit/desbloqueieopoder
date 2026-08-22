import { Hero } from "../components/aesthetic/Hero";
import { About } from "../components/aesthetic/About";
import { Services } from "../components/aesthetic/Services";
import { Footer } from "../components/aesthetic/Footer";
import { WhatsAppButton } from "../components/aesthetic/WhatsAppButton";
import { Differentials } from "../components/aesthetic/Differentials";
import { HowItWorks } from "../components/aesthetic/HowItWorks";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-[#FFD7E5] selection:text-[#D4AF37]">
      <Hero />
      <About />
      <Differentials />
      
      {/* Testimonials Placeholder for now */}
      <section className="py-24 bg-[#FAFAFA] px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-sm font-bold tracking-[0.3em] text-[#D4AF37] uppercase">Experiências</h2>
          <div className="relative p-12 bg-white rounded-3xl shadow-xl italic font-serif text-2xl text-gray-700">
            "O atendimento na Cicatrizes superou todas as minhas expectativas. O resultado da minha harmonização ficou extremamente natural e elegante."
            <div className="mt-8 not-italic text-sm font-bold uppercase tracking-widest text-gray-400">— Mariana Santos</div>
          </div>
          <motion.a
            href="https://wa.me/yournumber"
            whileHover={{ scale: 1.05 }}
            className="inline-block px-8 py-4 bg-[#D4AF37] text-white rounded-full font-bold uppercase tracking-widest text-sm shadow-xl shadow-[#D4AF37]/20 mt-4"
          >
            Agendar minha consulta
          </motion.a>
        </div>
      </section>

      <Services />
      <HowItWorks />

      {/* CTA Final */}
      <section className="py-32 bg-[#FFD7E5]/20 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-5xl font-serif font-light">Pronta para sua <span className="text-[#D4AF37] italic">melhor</span> versão?</h2>
          <p className="text-xl text-gray-600 font-light">Reserve agora seu horário e sinta a exclusividade de um tratamento pensado para você.</p>
          <motion.a
            href="https://wa.me/yournumber"
            whileHover={{ scale: 1.05 }}
            className="inline-block px-12 py-5 bg-[#D4AF37] text-white rounded-full font-bold uppercase tracking-widest text-base shadow-2xl shadow-[#D4AF37]/30"
          >
            Falar com Especialista agora
          </motion.a>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
