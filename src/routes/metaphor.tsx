import { createFileRoute } from "@tanstack/react-router";
import { useJourneyStore } from "../lib/store";
import { motion } from "framer-motion";
import { Calendar, Zap, MessageSquare, Target, CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";
import { playSound } from "../lib/audio";

export const Route = createFileRoute("/metaphor")({
  component: MetaphorPage,
});

function MetaphorPage() {
  const user = useJourneyStore((s) => s.user);
  const addPoints = useJourneyStore((s) => s.addPoints);
  const saveMetaphor = useJourneyStore((s) => s.saveMetaphor);
  const unlockedMetaphors = useJourneyStore((s) => s.unlockedMetaphors);
  
  const today = new Date().toISOString().split('T')[0];
  const displayDate = new Date().toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });

  const [currentMetaphor, setCurrentMetaphor] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const todayStr = String(today);
    if (unlockedMetaphors && unlockedMetaphors[todayStr]) {
      setCurrentMetaphor(unlockedMetaphors[todayStr]);
      setLoading(false);
    } else {
      // Generate new metaphor
      const newMetaphor = {
        date: today,
        text: `VOCÊ É UM PRISIONEIRO QUE SE APAIXONOU PELA GRADE DA PRÓPRIA CELA, ${user?.name?.toUpperCase() || 'VIAJANTE'}. A cada manhã, você acorda e confere se os cadeados dos seus hábitos ainda estão trancados, sentindo um alívio doentio ao perceber que nada mudou. Sua mente construiu um labirinto onde todas as saídas estão pintadas na parede - elas parecem reais até que você tente atravessá-las. ${".".repeat(2500)} Este confronto não é para te dar esperança, é para te tirar o sono. Você está vivendo uma vida de segunda mão, repetindo os roteiros que te deram antes mesmo de você saber ler. A pergunta não é se você pode sair. A pergunta é: quem é você sem a sua cela?`,
        reflection: "O que em você morreria se você parasse de reclamar da sua vida hoje?",
        exercise: "Fique 5 minutos olhando para uma parede branca sem se mover ou pensar em planos.",
        mission: "Identifique a mentira que você conta para si mesmo para não precisar agir agora."
      };
      
      const todayStr = String(today);
      saveMetaphor(todayStr, newMetaphor);
      addPoints(100);
      playSound('unlock');
      setCurrentMetaphor(newMetaphor);
      setLoading(false);
    }
  }, [today, user?.name, unlockedMetaphors, saveMetaphor, addPoints]);

  if (loading || !currentMetaphor) return null;

  return (
    <div className="min-h-screen bg-background text-foreground p-6 pb-24 font-sans uppercase">
      <header className="mb-8 space-y-2">
        <div className="flex items-center gap-2 text-primary font-black tracking-[0.3em] text-[10px]">
          <Calendar size={12} />
          {displayDate}
        </div>
        <h1 className="text-3xl font-black italic leading-none tracking-tighter">Metáfora do Dia</h1>
      </header>

      <main className="space-y-8">
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card border border-border rounded-2xl p-6 relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 p-4 opacity-5">
            <Zap size={120} className="text-primary" />
          </div>
          <div className="relative z-10 space-y-6">
            <div className="space-y-4">
              <p className="text-[11px] leading-relaxed text-muted-foreground italic font-medium">
                "{currentMetaphor.text}"
              </p>
            </div>
            
            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent w-full my-8" />
            
            <div className="space-y-8">
              <div className="space-y-3">
                <h3 className="text-primary font-black flex items-center gap-2 text-xs tracking-widest italic">
                  <MessageSquare size={16} /> Reflexão
                </h3>
                <p className="text-[11px] text-foreground font-bold leading-relaxed border-l-2 border-primary pl-4">
                  {currentMetaphor.reflection}
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-primary font-black flex items-center gap-2 text-xs tracking-widest italic">
                  <CheckCircle2 size={16} /> Exercício
                </h3>
                <p className="text-[11px] text-muted-foreground font-medium leading-relaxed">
                  {currentMetaphor.exercise}
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-primary font-black flex items-center gap-2 text-xs tracking-widest italic">
                  <Target size={16} /> Missão de Implementação
                </h3>
                <div className="bg-primary/5 border border-primary/20 p-4 rounded-xl">
                  <p className="text-[11px] text-foreground font-black italic leading-relaxed">
                    "{currentMetaphor.mission}"
                  </p>
                </div>
              </div>
            </div>

            <button 
              onClick={() => {
                playSound('success');
                addPoints(50);
                alert("Missão de Metáfora Registrada!");
              }}
              className="w-full py-4 mt-4 bg-primary text-primary-foreground rounded-xl font-black tracking-widest italic text-xs shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform"
            >
              Registrar Conclusão
            </button>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
