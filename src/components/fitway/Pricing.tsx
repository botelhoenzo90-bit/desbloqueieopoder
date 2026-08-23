import React from 'react';
import { Check, Info } from 'lucide-react';
import { WhatsAppButton } from './CTAs';
import { motion } from 'framer-motion';

const plans = [
  {
    name: 'START',
    price: '119',
    features: ['Acesso em horário livre', 'Área de musculação', 'Vestiários premium', 'Avaliação física inicial'],
    popular: false,
  },
  {
    name: 'PERFORMANCE',
    price: '169',
    features: ['Tudo do plano Start', 'Aulas coletivas ilimitadas', 'CrossFit & Funcional', 'Consultoria nutricional mensal'],
    popular: true,
  },
  {
    name: 'ELITE',
    price: '249',
    features: ['Tudo do Performance', 'Personal Trainer 2x/semana', 'Acesso VIP Lounge', 'Recovery Muscular'],
    popular: false,
  }
];

export const Pricing = () => {
  return (
    <section className="py-24 bg-white dark:bg-black text-foreground">
      <div className="container px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">ESCOLHA SEU PLANO</h2>
          <p className="text-muted-foreground text-lg">Investimento na sua melhor versão.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              whileHover={{ y: -10 }}
              className={`relative p-8 rounded-3xl border-2 ${plan.popular ? 'border-primary shadow-2xl scale-105 z-10' : 'border-border'} flex flex-col`}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest">
                  Mais Escolhido
                </span>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-black mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-bold">R$</span>
                  <span className="text-5xl font-black tracking-tighter">{plan.price}</span>
                  <span className="text-muted-foreground font-medium">/mês</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm font-medium">
                    <Check className="w-5 h-5 text-primary shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <WhatsAppButton className="w-full h-12 uppercase tracking-widest text-xs" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
