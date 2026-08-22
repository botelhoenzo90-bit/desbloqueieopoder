import { motion } from "framer-motion";

const differentials = [
  { title: "Atendimento Médico", desc: "Procedimentos realizados por profissionais qualificados.", icon: "🩺" },
  { title: "Tecnologia de Ponta", desc: "Equipamentos de última geração para resultados precisos.", icon: "🔬" },
  { title: "Ambiente Exclusivo", desc: "Um refúgio de luxo e tranquilidade para sua experiência.", icon: "🏛️" },
  { title: "Resultados Naturais", desc: "Focamos na harmonia sem exageros ou artificialidade.", icon: "🌿" },
];

export const Differentials = () => {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
        {differentials.map((d, i) => (
          <div key={i} className="space-y-4">
            <div className="text-3xl">{d.icon}</div>
            <h4 className="text-lg font-bold text-gray-900 uppercase tracking-tighter">{d.title}</h4>
            <p className="text-sm text-gray-500 font-light leading-relaxed">{d.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
