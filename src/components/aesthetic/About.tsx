import { motion } from "framer-motion";

export const About = () => {
  return (
    <section id="sobre" className="py-24 bg-[#FAFAFA] px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000&auto=format&fit=crop" 
              alt="Nossa Clínica" 
              className="w-full h-[500px] object-cover"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#FFD7E5] rounded-full -z-0 opacity-40 blur-2xl" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-sm font-bold tracking-[0.3em] text-[#D4AF37] uppercase">Nossa Essência</h2>
          <h3 className="text-4xl font-serif font-light text-gray-900 leading-tight">
            A união perfeita entre <span className="italic">saúde</span> e estética
          </h3>
          <p className="text-gray-600 leading-relaxed font-light">
            Na Cicatrizes, acreditamos que a verdadeira beleza nasce da harmonia. Fundada com a missão de elevar a autoestima feminina, nossa clínica combina tecnologia de ponta com um olhar artístico e sensível.
          </p>
          <p className="text-gray-600 leading-relaxed font-light">
            Cada paciente é única. Por isso, nossos protocolos são totalmente personalizados, focados em resultados naturais que preservam a identidade de cada mulher, sempre sob o rigor do profissionalismo médico.
          </p>
          
          <div className="grid grid-cols-2 gap-8 pt-6">
            <div>
              <p className="text-3xl font-serif text-[#D4AF37]">10+</p>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Anos de Experiência</p>
            </div>
            <div>
              <p className="text-3xl font-serif text-[#D4AF37]">5k+</p>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Vidas Transformadas</p>
            </div>
          </div>

          <motion.a
            href="https://wa.me/yournumber"
            whileHover={{ scale: 1.05 }}
            className="inline-block px-8 py-4 bg-[#D4AF37] text-white rounded-full font-bold uppercase tracking-widest text-sm shadow-xl shadow-[#D4AF37]/20 mt-4"
          >
            Falar com Especialista
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
