import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Users, Zap, Clock } from 'lucide-react';

const features = [
  {
    icon: <Dumbbell className="w-8 h-8" />,
    title: "Equipamentos de Elite",
    desc: "As melhores máquinas importadas para resultados máximos."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Time Especialista",
    desc: "Profissionais certificados prontos para te guiar."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Ambiente Energético",
    desc: "Design moderno e som de alta fidelidade para seu foco."
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Horário Flexível",
    desc: "Treine no seu ritmo, 24h ou horários estendidos."
  }
];

export const Features = () => {
  return (
    <section className="py-24 bg-zinc-50 dark:bg-zinc-950">
      <div className="container px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="text-primary">{f.icon}</div>
              <h3 className="text-xl font-bold tracking-tight">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
