import React from 'react';
import { Hero } from '@/components/fitway/Hero';
import { Features } from '@/components/fitway/Features';
import { Pricing } from '@/components/fitway/Pricing';
import { FloatingWhatsApp, WhatsAppButton } from '@/components/fitway/CTAs';
import { motion } from 'framer-motion';

export const Home = () => {
  return (
    <div className="relative">
      <Hero />
      
      <Features />

      {/* Intro/About Section */}
      <section className="py-24 overflow-hidden">
        <div className="container px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-none">
                A EXPERIÊNCIA <br />
                <span className="text-primary">DEFINITIVA</span> <br />
                EM CURITIBA.
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                A FitWay não é apenas uma academia. É um centro de performance desenhado para quem exige o melhor. Localizada no coração de Curitiba, oferecemos uma estrutura luxuosa, equipamentos de última geração e uma metodologia focada em resultados reais.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex gap-4 items-center font-bold">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  Localização Privilegiada em Curitiba
                </li>
                <li className="flex gap-4 items-center font-bold">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  Estacionamento VIP e Gratuito
                </li>
                <li className="flex gap-4 items-center font-bold">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  Ambiente Climatizado e Higienizado
                </li>
              </ul>
              <WhatsAppButton className="h-12 px-8 uppercase tracking-widest" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-3xl overflow-hidden border-8 border-primary/10"
            >
              <img 
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=2070" 
                alt="Treino FitWay"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery/Infrastructure */}
      <section className="py-24 bg-black text-white">
        <div className="container px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black tracking-tighter italic text-primary">NOSSO ESPAÇO</h2>
            <p className="text-gray-400 mt-2">Tecnologia e design a serviço do seu treino.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500" alt="Academia" />
            </div>
            <div className="aspect-[3/4] rounded-2xl overflow-hidden translate-y-8 group">
              <img src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500" alt="Academia" />
            </div>
            <div className="aspect-[3/4] rounded-2xl overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1574673139762-014a1f9a7cf2?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500" alt="Academia" />
            </div>
            <div className="aspect-[3/4] rounded-2xl overflow-hidden translate-y-8 group">
              <img src="https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500" alt="Academia" />
            </div>
          </div>
          
          <div className="mt-24 text-center">
            <WhatsAppButton className="h-14 px-12 text-lg uppercase tracking-[0.2em]" />
          </div>
        </div>
      </section>

      <Pricing />

      {/* Final CTA */}
      <section className="py-24 bg-primary text-white">
        <div className="container px-6 text-center">
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-8">
            PARE DE DAR DESCULPAS. <br />
            COMECE A DAR RESULTADOS.
          </h2>
          <p className="text-xl md:text-2xl font-bold mb-12 opacity-90 max-w-3xl mx-auto">
            Junte-se ao time FitWay em Curitiba e mude sua vida para sempre.
          </p>
          <WhatsAppButton className="bg-black text-white hover:bg-black/90 h-16 px-16 text-xl uppercase tracking-widest shadow-2xl" />
        </div>
      </section>

      <footer className="py-12 bg-zinc-950 text-white border-t border-white/5">
        <div className="container px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-2xl font-black italic tracking-tighter">
              FIT<span className="text-primary">WAY</span>
            </div>
            
            <div className="text-zinc-500 text-sm font-medium">
              Curitiba - PR | Todos os direitos reservados
            </div>
            
            <div className="flex gap-6 text-zinc-400">
              <a href="#" className="hover:text-primary transition-colors uppercase text-[10px] font-bold tracking-widest">Instagram</a>
              <a href="#" className="hover:text-primary transition-colors uppercase text-[10px] font-bold tracking-widest">Facebook</a>
              <a href="#" className="hover:text-primary transition-colors uppercase text-[10px] font-bold tracking-widest">YouTube</a>
            </div>
          </div>
          
          <div className="mt-12 text-center text-[10px] text-zinc-700 font-bold uppercase tracking-widest opacity-50">
            © Instituto NeuroConsciência de Desenvolvimento Humano | Criador: Jöweslëy
          </div>
        </div>
      </footer>

      <FloatingWhatsApp />
    </div>
  );
};
