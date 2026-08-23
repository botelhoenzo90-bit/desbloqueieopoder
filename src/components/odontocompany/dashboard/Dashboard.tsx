import React from 'react';
import { useAppStore } from '@/lib/store';
import { PricingCalculator } from './PricingCalculator';
import { CareLibrary } from './CareLibrary';
import { Button } from '@/components/ui/button';
import { LogOut, Target, LayoutDashboard, Settings, User } from 'lucide-react';
import { motion } from 'framer-motion';

export const Dashboard = () => {
  const { user, logout } = useAppStore();

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row">
      {/* Sidebar Mobile/Desktop */}
      <aside className="w-full md:w-64 bg-white border-r border-slate-100 p-6 flex flex-col justify-between">
        <div className="space-y-8">
          <div className="text-xl font-black text-primary tracking-tighter">
            ODONTO<span className="text-slate-900 uppercase">DASH</span>
          </div>
          <nav className="space-y-2">
            <button className="w-full flex items-center gap-3 p-3 rounded-xl bg-primary/10 text-primary font-bold text-sm">
              <LayoutDashboard size={18} /> Dashboard
            </button>
            <button className="w-full flex items-center gap-3 p-3 rounded-xl text-slate-400 hover:bg-slate-50 font-bold text-sm transition-colors">
              <Target size={18} /> Prospecção
            </button>
            <button className="w-full flex items-center gap-3 p-3 rounded-xl text-slate-400 hover:bg-slate-50 font-bold text-sm transition-colors">
              <User size={18} /> Meu Perfil
            </button>
            <button className="w-full flex items-center gap-3 p-3 rounded-xl text-slate-400 hover:bg-slate-50 font-bold text-sm transition-colors">
              <Settings size={18} /> Configurações
            </button>
          </nav>
        </div>

        <Button variant="ghost" onClick={logout} className="mt-8 justify-start text-red-500 hover:bg-red-50 hover:text-red-600 rounded-xl">
          <LogOut size={18} className="mr-2" /> Logout
        </Button>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-6 md:p-12 max-w-7xl mx-auto w-full space-y-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tighter">Olá, {user?.name}! 👋</h1>
            <p className="text-slate-500 font-medium">Bem-vindo à sua central de saúde e gestão OdontoCompany.</p>
          </div>
          <div className="flex gap-3">
            <div className="px-6 py-3 bg-white rounded-2xl shadow-sm border border-slate-100">
              <p className="text-[10px] font-black uppercase text-slate-400">Pontos de Saúde</p>
              <p className="text-lg font-black text-primary">1.250 pts</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Section: Prospecting / Calculator */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-black text-slate-900 uppercase tracking-tighter mb-2">Simulador de Sorriso</h2>
              <p className="text-slate-500 text-sm italic">Calcule investimentos em tempo real.</p>
            </div>
            <PricingCalculator />
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="p-8 bg-primary rounded-[2rem] text-white shadow-xl shadow-primary/20 relative overflow-hidden group"
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-black mb-2">PROSPECÇÃO AI</h3>
                <p className="text-white/80 text-sm font-bold mb-6">Analise seu potencial de transformação com nossa inteligência artificial.</p>
                <Button className="bg-white text-primary hover:bg-slate-50 font-black rounded-xl">INICIAR ANÁLISE</Button>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
            </motion.div>
          </div>

          {/* Section: Library */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-black text-slate-900 uppercase tracking-tighter mb-2">Biblioteca de Cuidados</h2>
              <p className="text-slate-500 text-sm italic">Educação e prevenção para o seu dia a dia.</p>
            </div>
            <CareLibrary />
          </div>
        </div>
      </main>
    </div>
  );
};
