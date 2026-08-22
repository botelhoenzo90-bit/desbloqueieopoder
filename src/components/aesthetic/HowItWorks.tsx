import { motion } from "framer-motion";

const steps = [
  { step: "01", title: "Primeiro Contato", desc: "Agende sua avaliação inicial via WhatsApp de forma simples." },
  { step: "02", title: "Análise Personalizada", desc: "Entendemos seus desejos e necessidades estéticas." },
  { step: "03", title: "Execução com Arte", desc: "Procedimento realizado com máximo cuidado e técnica." },
  { step: "04", title: "Entrega do Resultado", desc: "Acompanhamento pós-procedimento para sua satisfação total." },
];

export const HowItWorks = () => {
  return (
    <section className="py-24 bg-[#FAFAFA] px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12">
          {steps.map((s, i) => (
            <div key={i} className="relative space-y-4">
              <span className="text-6xl font-serif text-[#FFD7E5] absolute -top-8 -left-4 opacity-50 z-0">{s.step}</span>
              <div className="relative z-10 pt-4">
                <h4 className="text-xl font-bold text-gray-900">{s.title}</h4>
                <p className="text-sm text-gray-600 font-light mt-2">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
