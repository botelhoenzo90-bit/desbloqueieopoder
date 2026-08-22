import { motion } from "framer-motion";
import { Play } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white px-6 py-20">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#FFD7E5] blur-3xl" />
        <div className="absolute top-1/2 -right-24 w-80 h-80 rounded-full bg-[#E5C47F] blur-3xl opacity-50" />
      </div>

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-block px-4 py-1 rounded-full bg-[#FFD7E5] text-[#D4AF37] text-sm font-bold tracking-widest uppercase"
            >
              Excelência em Estética
            </motion.span>
            <h1 className="text-5xl md:text-7xl font-serif font-light text-gray-900 leading-tight">
              Realce sua <span className="text-[#D4AF37] italic font-normal">Beleza</span> Natural
            </h1>
            <p className="text-xl text-gray-600 font-light leading-relaxed max-w-lg">
              Harmonização facial e procedimentos avançados com o toque de sofisticação que você merece. Transformamos sua autoestima com ciência e arte.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <motion.a
              href="https://wa.me/yournumber"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#D4AF37] text-white rounded-full font-bold uppercase tracking-widest text-sm shadow-xl shadow-[#D4AF37]/20 hover:bg-[#B8962F] transition-colors"
            >
              Agendar agora
            </motion.a>
            <motion.a
              href="#servicos"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-[#D4AF37] text-[#D4AF37] rounded-full font-bold uppercase tracking-widest text-sm hover:bg-[#D4AF37] hover:text-white transition-all"
            >
              Ver Procedimentos
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-t-[200px] rounded-b-2xl overflow-hidden border-8 border-white shadow-2xl relative z-10">
            <img 
              src="https://images.unsplash.com/photo-1570172619382-c1069d7a3015?q=80&w=1000&auto=format&fit=crop" 
              alt="Clínica Cicatrizes - Estética de Luxo" 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative frame */}
          <div className="absolute -inset-4 border-2 border-[#D4AF37] rounded-t-[204px] rounded-b-3xl -z-0 opacity-30" />
        </motion.div>
      </div>
    </section>
  );
};
