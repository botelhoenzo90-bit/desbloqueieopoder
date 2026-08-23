import React from 'react';
import { useAppStore } from '@/lib/store';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calculator, BookOpen, Stethoscope, Sparkles, LogOut } from 'lucide-react';
import { motion } from 'framer-motion';

export const Dashboard = () => {
  const { user, logout } = useAppStore();

  const features = [
    { title: "Calculadora de Sorriso", icon: <Calculator className="w-6 h-6" />, desc: "Simulação de investimentos", price: "A partir de R$ 99/mês" },
    { title: "Biblioteca de Cuidados", icon: <BookOpen className="w-6 h-6" />, desc: "Guias de saúde bucal", price: "Gratuito" },
    { title: "Agendar Consulta", icon: <Stethoscope className="w-6 h-6" />, desc: "Atendimento premium", price: "Agende agora" },
    { title: "Dicas de Estética", icon: <Sparkles className="w-6 h-6" />, desc: "Segredos da beleza", price: "Exclusivo" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <header className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tighter">Olá, {user?.name}!</h1>
          <p className="text-slate-500 text-sm font-medium">Seu painel OdontoCompany.</p>
        </div>
        <Button variant="ghost" onClick={logout} className="text-red-500 hover:text-red-600 hover:bg-red-50">
          <LogOut className="w-5 h-5 mr-2" /> Sair
        </Button>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="rounded-3xl border-none shadow-xl hover:shadow-2xl transition-all">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                  {f.icon}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">{f.title}</h3>
                  <p className="text-xs text-slate-500 mb-2">{f.desc}</p>
                  <p className="text-sm font-black text-primary">{f.price}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
