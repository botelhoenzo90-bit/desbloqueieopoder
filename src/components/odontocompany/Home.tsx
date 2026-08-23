import React from 'react';
import { Hero } from '@/components/odontocompany/Hero';
import { Features } from '@/components/odontocompany/Features';
import { Services } from '@/components/odontocompany/Services';
import { PricingPlans } from '@/components/odontocompany/landing/PricingPlans';
import { FloatingWhatsApp, WhatsAppButton } from '@/components/odontocompany/CTAs';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

export const Home = () => {
  return (
    <div className="relative selection:bg-primary/20">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 py-4">
        <div className="container px-6 flex justify-between items-center">
          <div className="text-2xl font-black text-primary tracking-tighter">
            ODONTO<span className="text-slate-900">COMPANY</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-bold text-slate-600 uppercase tracking-widest">
            <a href="/" className="hover:text-primary transition-colors">Início</a>
            <a href="/?view=login" className="hover:text-primary transition-colors">Entrar</a>
            <a href="#" className="hover:text-primary transition-colors">Serviços</a>
            <a href="#" className="hover:text-primary transition-colors">Clínica</a>
            <a href="#" className="hover:text-primary transition-colors">Localização</a>
          </div>
          <WhatsAppButton className="hidden sm:flex h-10 px-6 text-xs" />
        </div>
      </nav>

      <Hero />
      
      <Features />

      {/* How it works */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container px-6 grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden rotate-3 shadow-2xl relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1000" 
                alt="Equipamentos OdontoCompany"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -inset-10 bg-primary/5 rounded-full blur-[100px] -z-10" />
          </motion.div>

          <div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
              A EXPERIÊNCIA DA <br />
              <span className="text-primary italic">TECNOLOGIA</span> A SEU FAVOR.
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center font-black text-primary border border-slate-100 shrink-0">01</div>
                <div>
                  <h4 className="text-lg font-bold mb-2">Avaliação Digital</h4>
                  <p className="text-slate-500 text-sm">Escaneamento 3D para diagnóstico preciso sem desconforto.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center font-black text-primary border border-slate-100 shrink-0">02</div>
                <div>
                  <h4 className="text-lg font-bold mb-2">Planejamento Virtual</h4>
                  <p className="text-slate-500 text-sm">Veja o resultado do seu tratamento antes mesmo de começar.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center font-black text-primary border border-slate-100 shrink-0">03</div>
                <div>
                  <h4 className="text-lg font-bold mb-2">Execução Premium</h4>
                  <p className="text-slate-500 text-sm">Procedimentos indolores e materiais de altíssima durabilidade.</p>
                </div>
              </div>
            </div>
            <WhatsAppButton className="mt-12 h-14 px-10" />
          </div>
        </div>
      </section>

      <Services />
      
      <PricingPlans />

      {/* Location Section */}
      <section className="py-24 bg-white">
        <div className="container px-6 text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">ONDE ESTAMOS EM <span className="text-primary">CURITIBA</span></h2>
          <p className="text-slate-500 font-medium">Localização privilegiada com fácil acesso e estacionamento.</p>
        </div>
        
        <div className="container px-6 grid lg:grid-cols-3 gap-8">
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 space-y-4">
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary"><MapPin /></div>
            <h4 className="text-xl font-bold">Endereço</h4>
            <p className="text-slate-600 text-sm">Rua das Flores, 1234 - Centro <br />Curitiba - PR, 80000-000</p>
          </div>
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 space-y-4">
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary"><Clock /></div>
            <h4 className="text-xl font-bold">Horários</h4>
            <p className="text-slate-600 text-sm">Segunda a Sexta: 08:00 - 19:00 <br />Sábados: 08:00 - 12:00</p>
          </div>
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 space-y-4">
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary"><Phone /></div>
            <h4 className="text-xl font-bold">Contato</h4>
            <p className="text-slate-600 text-sm">(41) 99999-9999 <br />contato@odontocompanycwb.com</p>
          </div>
        </div>

        <div className="container px-6 mt-16 rounded-[2rem] overflow-hidden h-[400px] shadow-2xl relative group">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2070" 
            className="w-full h-full object-cover transition-transform duration-[20s] group-hover:scale-110"
            alt="Localização"
          />
          <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
          <div className="absolute inset-0 flex items-center justify-center">
            <WhatsAppButton className="h-16 px-12 text-lg shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-primary text-white">
        <div className="container px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-[1] mb-8">
              SEU NOVO SORRISO <br />
              ESTÁ A UM CLIQUE.
            </h2>
            <p className="text-xl font-bold mb-12 opacity-90 max-w-2xl mx-auto italic">
              Recupere a vontade de sorrir com o atendimento que você sempre buscou em Curitiba.
            </p>
            <WhatsAppButton className="bg-white text-primary hover:bg-slate-50 h-16 px-16 text-xl shadow-2xl border-none" />
          </motion.div>
        </div>
      </section>

      <footer className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="container px-6 text-center space-y-8">
          <div className="text-3xl font-black text-primary tracking-tighter">
            ODONTO<span className="text-slate-900">COMPANY</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-primary transition-colors">Privacidade</a>
            <a href="#" className="hover:text-primary transition-colors">Agendamento</a>
          </div>
          
          <div className="pt-8 border-t border-slate-200/50 text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-loose">
            © {new Date().getFullYear()} OdontoCompany Curitiba - Clínica Odontológica Ltda <br />
            Responsável Técnico: Dr. Exemplo - CRO-PR 12345 <br />
            Criador: Jöweslëy
          </div>
        </div>
      </footer>

      <FloatingWhatsApp />
    </div>
  );
};
