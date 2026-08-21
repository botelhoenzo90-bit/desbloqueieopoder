import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useJourneyStore } from "../lib/store";
import { motion } from "framer-motion";
import { Trophy, ArrowLeft, Zap, Star } from "lucide-react";
import { playSound } from "../lib/audio";

export const Route = createFileRoute("/ranking")({
  component: RankingPage,
});

function RankingPage() {
  const navigate = useNavigate();
  const user = useJourneyStore((s) => s.user);
  const points = useJourneyStore((s) => s.points);

  // Simulated ranking data based on the current user and some mock users
  const rankingData = [
    { name: "Mestre Mind", points: 4500, current: false },
    { name: "Consciência Plena", points: 3800, current: false },
    { name: "Desperto 01", points: 3200, current: false },
    { name: user?.name || "Você", points: points, current: true },
    { name: "Buscador 77", points: 2800, current: false },
    { name: "Mente Clara", points: 2100, current: false },
  ].sort((a, b) => b.points - a.points);

  return (
    <div className="min-h-screen bg-background text-foreground p-6 pb-24 font-sans uppercase">
      <header className="flex items-center gap-4 mb-8">
        <button 
          onClick={() => {
            playSound('click');
            navigate({ to: "/" });
          }}
          className="p-2 hover:bg-accent rounded-full transition-colors"
        >
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-2xl font-black italic tracking-tighter uppercase">Ranking de Poder</h1>
      </header>

      <main className="space-y-6">
        <section className="bg-primary/10 border border-primary/30 rounded-2xl p-6 flex items-center justify-between shadow-xl shadow-primary/10">
          <div className="flex items-center gap-4">
            <div className="bg-primary p-3 rounded-full text-primary-foreground shadow-lg shadow-primary/30">
              <Trophy size={24} />
            </div>
            <div>
              <p className="text-[10px] font-black tracking-widest text-primary">Sua Pontuação</p>
              <p className="text-xl font-black italic">{points} Pontos</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[10px] font-black tracking-widest text-muted-foreground uppercase">Posição</p>
            <p className="text-xl font-black italic">#{rankingData.findIndex(u => u.current) + 1}</p>
          </div>
        </section>

        <div className="space-y-3">
          {rankingData.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`flex items-center justify-between p-4 rounded-xl border ${
                item.current 
                  ? 'bg-primary/20 border-primary shadow-lg shadow-primary/10 scale-[1.02]' 
                  : 'bg-card border-border'
              }`}
            >
              <div className="flex items-center gap-4">
                <span className={`text-sm font-black italic w-6 ${index < 3 ? 'text-primary' : 'text-muted-foreground'}`}>
                  {index + 1}
                </span>
                <div>
                  <p className={`text-xs font-black tracking-tight ${item.current ? 'text-foreground' : 'text-muted-foreground'}`}>
                    {item.name}
                  </p>
                  {index === 0 && (
                    <span className="text-[8px] bg-primary text-primary-foreground px-1.5 py-0.5 rounded font-black tracking-[0.2em]">LÍDER</span>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-black italic">{item.points}</span>
                <Star size={12} className={item.current ? 'text-primary' : 'text-muted-foreground'} fill="currentColor" />
              </div>
            </motion.div>
          ))}
        </div>

        <section className="bg-card/50 border border-border rounded-xl p-4 text-center">
          <p className="text-[10px] text-muted-foreground font-black uppercase tracking-[0.2em] leading-relaxed">
            Ganhe mais pontos completando aulas, quizzes, metáforas e missões diárias.
          </p>
        </section>
      </main>
    </div>
  );
}
