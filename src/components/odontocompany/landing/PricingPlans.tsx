import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const plans = [
  {
    name: "Básico",
    price: "R$ 49",
    desc: "Para quem busca prevenção essencial.",
    features: ["Avaliação Semestral", "Limpeza Profissional", "Clínica Geral", "Desconto em Raios-X"],
    recommended: false
  },
  {
    name: "Premium",
    price: "R$ 99",
    desc: "O plano mais completo para sua família.",
    features: ["Avaliação Trimestral", "Limpeza + Flúor", "Ortodontia Inclusa", "20% em Implantes", "Atendimento Urgência"],
    recommended: true
  },
  {
    name: "Elite",
    price: "R$ 189",
    desc: "Estética e tecnologia de luxo.",
    features: ["Check-up Digital VIP", "Clareamento Anual", "Lentes de Contato (Desconto 30%)", "Implantes Prioritários", "Concierge Odonto"],
    recommended: false
  }
];

export const PricingPlans = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-6">
            PLANOS QUE CABEM NO SEU <br /><span className="text-primary italic">ORÇAMENTO.</span>
          </h2>
          <p className="text-lg text-slate-500 font-medium">Escolha a melhor opção para transformar seu sorriso com tranquilidade.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className={`p-10 rounded-[3rem] border relative flex flex-col ${plan.recommended ? 'bg-primary text-white border-primary shadow-2xl shadow-primary/30' : 'bg-slate-50 border-slate-100 text-slate-900'}`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-full tracking-widest">
                  Mais Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-black uppercase tracking-tighter mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black">{plan.price}</span>
                  <span className={`text-sm font-bold opacity-60`}>/mês</span>
                </div>
                <p className={`mt-4 text-sm font-medium ${plan.recommended ? 'text-white/80' : 'text-slate-500'}`}>
                  {plan.desc}
                </p>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feat, j) => (
                  <div key={j} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${plan.recommended ? 'bg-white/20' : 'bg-primary/10'}`}>
                      <Check size={12} className={plan.recommended ? 'text-white' : 'text-primary'} />
                    </div>
                    <span className="text-sm font-bold opacity-90">{feat}</span>
                  </div>
                ))}
              </div>

              <Button className={`w-full h-14 rounded-2xl font-black text-lg ${plan.recommended ? 'bg-white text-primary hover:bg-slate-50' : 'bg-primary text-white hover:bg-primary/90'}`}>
                ASSINAR AGORA
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative bg element */}
      <div className="absolute top-1/2 left-0 w-full h-1/2 bg-slate-50/50 -z-10" />
    </section>
  );
};
