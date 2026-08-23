import React from 'react';
import { WhatsAppButton } from './CTAs';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-60 scale-105 transition-transform duration-[10s] hover:scale-100"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=2070")' }}
      />
      <div className="absolute inset-0 z-10 bg-linear-to-t from-black via-black/40 to-transparent" />

      <div className="container relative z-20 px-6 text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] uppercase border border-primary text-primary rounded-full">
            A Melhor Academia de Curitiba
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-6">
            TRANSFORME SEU <br />
            <span className="text-primary italic">POTENCIAL</span> EM PODER.
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 font-medium">
            Qualidade, profissionalismo e tecnologia de ponta para quem não aceita menos que a excelência.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <WhatsAppButton className="h-14 px-10 text-lg uppercase tracking-widest" />
          <button className="h-14 px-10 text-white font-bold border-2 border-white/20 hover:border-white rounded-full transition-colors uppercase tracking-widest text-sm">
            Ver Planos
          </button>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
        <div className="w-[1px] h-20 bg-linear-to-b from-white to-transparent" />
      </div>
    </section>
  );
};
