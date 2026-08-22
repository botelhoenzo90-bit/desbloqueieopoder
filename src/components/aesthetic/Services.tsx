import { motion } from "framer-motion";

const services = [
  { name: "Harmonização Facial", desc: "Equilíbrio e contornos definidos para seu rosto.", icon: "✨" },
  { name: "Preenchimento", desc: "Suavize linhas e devolva o volume natural.", icon: "💉" },
  { name: "Bioestimulação", desc: "Rejuvenescimento profundo de dentro para fora.", icon: "🌿" },
  { name: "Protocolos Personalizados", desc: "Planos exclusivos desenhados para você.", icon: "💎" },
];

export const Services = () => {
  return (
    <section id="servicos" className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-sm font-bold tracking-[0.3em] text-[#D4AF37] uppercase">Serviços</h2>
          <h3 className="text-4xl font-serif font-light text-gray-900">Nossa Especialidade</h3>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 rounded-2xl bg-[#FAFAFA] border border-[#FFD7E5]/20 shadow-sm hover:shadow-xl transition-all space-y-4"
            >
              <div className="text-4xl">{s.icon}</div>
              <h4 className="text-xl font-serif text-gray-900">{s.name}</h4>
              <p className="text-sm text-gray-600 font-light">{s.desc}</p>
              <a href="https://wa.me/yournumber" className="block text-[#D4AF37] font-bold uppercase tracking-widest text-xs pt-4 hover:underline">
                Saiba mais
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
