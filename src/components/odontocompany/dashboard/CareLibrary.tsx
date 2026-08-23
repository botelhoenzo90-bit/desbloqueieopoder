import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

const articles = [
  {
    title: "Guia Pós-Operatório",
    category: "Implantes",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Mitos sobre Clareamento",
    category: "Estética",
    image: "https://images.unsplash.com/photo-1468493916776-041e8944a343?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Como Escovar Corretamente",
    category: "Saúde Bucal",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Alinhadores Invisíveis",
    category: "Ortodontia",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800",
  }
];

export const CareLibrary = () => {
  return (
    <div className="grid sm:grid-cols-2 gap-6">
      {articles.map((art, i) => (
        <motion.div
          key={i}
          whileHover={{ y: -5 }}
        >
          <Card className="rounded-3xl border-none shadow-lg overflow-hidden group h-full">
            <div className="h-40 overflow-hidden relative">
              <img src={art.image} alt={art.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-black uppercase px-3 py-1 rounded-full shadow-lg">
                {art.category}
              </div>
            </div>
            <CardContent className="p-6">
              <h4 className="font-bold text-slate-900 leading-tight group-hover:text-primary transition-colors">
                {art.title}
              </h4>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};
