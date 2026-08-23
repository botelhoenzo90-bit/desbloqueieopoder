import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ShieldCheck, Zap, UserCheck } from 'lucide-react';

const features = [
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Cuidado Humanizado",
    desc: "Tratamento focado no seu bem-estar e conforto total."
  },
  {
    icon: < ShieldCheck className="w-8 h-8" />,
    title: "Tecnologia de Ponta",
    desc: "Equipamentos modernos para diagnósticos precisos."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Implantes Rápidos",
    desc: "Protocolos avançados para recuperação imediata."
  },
  {
    icon: <UserCheck className="w-8 h-8" />,
    title: "Especialistas Certificados",
    desc: "Corpo clínico altamente qualificado e experiente."
  }
];

export const Features = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 transition-colors group-hover:bg-primary group-hover:text-white">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{f.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
