import React from 'react';
import { motion } from 'framer-motion';
import { WhatsAppButton } from './CTAs';

const services = [
  {
    title: "Implantes Dentários",
    desc: "Recupere sua função mastigatória e estética com tecnologia de carga imediata.",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Lentes de Contato",
    desc: "Transforme seu sorriso com facetas ultrafinas que corrigem cor e formato.",
    image: "https://images.unsplash.com/photo-1468493916776-041e8944a343?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Ortodontia Invisível",
    desc: "Corrija o alinhamento dos seus dentes com aparelhos transparentes e confortáveis.",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=1000",
  }
];

export const Services = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container px-6">
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">SOLUÇÕES COMPLETAS <br />PARA SEU SORRISO.</h2>
          <p className="text-slate-600 font-medium italic">Protocolos exclusivos de odontologia moderna.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col"
            >
              <div className="h-64 overflow-hidden">
                <img src={s.image} alt={s.title} className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-500" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{s.title}</h3>
                <p className="text-slate-500 text-sm mb-8 leading-relaxed flex-grow">{s.desc}</p>
                <WhatsAppButton className="w-full h-12" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
