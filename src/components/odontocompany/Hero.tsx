import React from 'react';
import { WhatsAppButton } from './CTAs';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden bg-slate-50">
      <div className="container px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-primary/10 text-primary rounded-full">
            OdontoCompany Curitiba
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] mb-6">
            O SORRISO QUE VOCÊ <br />
            <span className="text-primary italic font-serif">MERECE</span>, COM A <br />
            QUALIDADE QUE CONFIA.
          </h1>
          <p className="text-lg text-slate-600 mb-8 font-medium leading-relaxed">
            Especialistas em implantes, estética dental e saúde bucal completa. Tecnologia de ponta no coração de Curitiba para transformar sua autoestima.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppButton className="h-14 px-8 text-lg" />
            <button className="h-14 px-8 text-slate-700 font-bold border-2 border-slate-200 hover:border-primary/30 rounded-full transition-all bg-white shadow-sm">
              Conhecer Serviços
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-3xl -z-10 animate-pulse" />
          <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
            <img 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2070" 
              alt="Clínica Odontológica Moderna"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden sm:block">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-ping" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Disponível Hoje</p>
                <p className="text-sm font-black text-slate-900">Horários para Curitiba</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-400/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
    </section>
  );
};
