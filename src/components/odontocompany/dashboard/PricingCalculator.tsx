import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { motion } from 'framer-motion';

export const PricingCalculator = () => {
  const [procedure, setProcedure] = useState<string>('');
  
  const suggestions = {
    implante: { price: "R$ 1.800 - R$ 3.500", note: "Valor sugerido para implantes unitários com pino de titânio." },
    clareamento: { price: "R$ 600 - R$ 1.200", note: "Opções a laser ou caseiro com moldeira personalizada." },
    lentes: { price: "R$ 2.000 - R$ 4.000 por dente", note: "Lentes de porcelana de alta durabilidade." },
    ortodontia: { price: "R$ 150 - R$ 450 mensais", note: "Manutenção mensal para aparelhos fixos ou alinhadores." },
  };

  return (
    <Card className="rounded-[2rem] border-none shadow-2xl overflow-hidden bg-white">
      <CardHeader className="bg-primary text-white p-8">
        <CardTitle className="text-2xl font-black tracking-tighter uppercase">Calculadora de Investimento</CardTitle>
      </CardHeader>
      <CardContent className="p-8 space-y-6">
        <div className="space-y-2">
          <Label className="text-xs font-black uppercase text-slate-400">Selecione o Procedimento</Label>
          <Select onValueChange={setProcedure}>
            <SelectTrigger className="rounded-xl h-14 border-slate-200">
              <SelectValue placeholder="Escolha um serviço..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="implante">Implante Dentário</SelectItem>
              <SelectItem value="clareamento">Clareamento Dental</SelectItem>
              <SelectItem value="lentes">Lentes de Contato</SelectItem>
              <SelectItem value="ortodontia">Aparelho / Alinhadores</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {procedure && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-6 bg-slate-50 rounded-2xl border border-slate-100"
          >
            <p className="text-xs font-black text-primary uppercase mb-1">Preço Sugerido</p>
            <p className="text-3xl font-black text-slate-900 mb-2">
              {suggestions[procedure as keyof typeof suggestions].price}
            </p>
            <p className="text-sm text-slate-500 font-medium italic">
              * {suggestions[procedure as keyof typeof suggestions].note}
            </p>
          </motion.div>
        )}
      </CardContent>
    </Card>
  );
};
