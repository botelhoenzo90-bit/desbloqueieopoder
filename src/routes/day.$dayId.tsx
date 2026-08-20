import { createFileRoute, useParams, useNavigate, Link } from "@tanstack/react-router";
import { useJourneyStore } from "../lib/store";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, Play, FileText, CheckCircle2, Award, Zap, ArrowRight, Brain } from "lucide-react";
import confetti from "canvas-confetti";

export const Route = createFileRoute("/day/$dayId")({
  component: DayJourney,
});

const JOURNEY_DATA: Record<string, any> = {
  "0": {
    title: "SEJA BEM VINDOS",
    video: "https://www.youtube.com/embed/7SSS9Ev7LSc",
    protocol: "Inicie com mente aberta. Este é o primeiro passo para a liberdade consciente.",
    quiz: [
      { q: "Você está pronto para questionar sua realidade?", a: ["Sim", "Talvez", "Não"] }
    ]
  },
  "1": {
    title: "A MENTE QUE VOCÊ NÃO ESTÁ PERCEBENDO",
    video: "https://www.youtube.com/embed/0qKbe2jMRV0",
    protocol: "Observe seus pensamentos como nuvens passando. Não se identifique com eles.",
    quiz: [
      { q: "Com que frequência você age no automático?", a: ["Sempre", "Às vezes", "Raramente"] }
    ]
  },
  "2": {
    title: "QUANDO O PENSAMENTO COMEÇA A DIRIGIR VOCÊ",
    video: "https://www.youtube.com/embed/jFp_ae_kp7g",
    protocol: "Identifique o 'motorista' dos seus pensamentos hoje.",
    quiz: [
      { q: "Quem está no comando agora?", a: ["Eu", "Meu medo", "Minha rotina"] }
    ]
  }
};

function DayJourney() {
  const { dayId } = useParams({ from: "/day/$dayId" });
  const navigate = useNavigate();
  const user = useJourneyStore((s) => s.user);
  const completeDay = useJourneyStore((s) => s.completeDay);
  const addPoints = useJourneyStore((s) => s.addPoints);
  const completedDays = useJourneyStore((s) => s.completedDays);

  const [step, setStep] = useState<"video" | "protocol" | "quiz" | "conclusion">("video");
  const data = JOURNEY_DATA[dayId] || JOURNEY_DATA["0"];

  const handleFinish = () => {
    const id = parseInt(dayId);
    completeDay(id);
    addPoints(100);
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FFD700', '#FFFFFF', '#4A90E2']
    });
    setStep("conclusion");
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <header className="p-4 flex items-center gap-4 border-b border-border bg-card/50 backdrop-blur-md sticky top-0 z-20">
        <button onClick={() => navigate({ to: "/" })} className="p-2 hover:bg-accent rounded-full transition-colors">
          <ChevronLeft size={20} />
        </button>
        <div>
          <h2 className="text-xs font-bold text-primary uppercase tracking-widest">Dia {dayId}</h2>
          <h1 className="text-sm font-bold truncate max-w-[200px] uppercase">{data.title}</h1>
        </div>
      </header>

      <main className="flex-1 p-6 space-y-8 overflow-y-auto">
        <AnimatePresence mode="wait">
          {step === "video" && (
            <motion.div 
              key="video"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="aspect-video rounded-2xl overflow-hidden border border-border bg-black shadow-2xl">
                <iframe src={data.video} className="w-full h-full" allowFullScreen title="Aula" />
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold uppercase">Assistir Aula</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Assista ao vídeo completo para desbloquear o protocolo e os exercícios práticos do dia.</p>
                <button 
                  onClick={() => setStep("protocol")}
                  className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-bold uppercase flex items-center justify-center gap-2"
                >
                  Concluir Aula <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          )}

          {step === "protocol" && (
            <motion.div 
              key="protocol"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="bg-card border border-border rounded-2xl p-6 space-y-6">
                <div className="flex items-center gap-3 text-primary">
                  <Brain size={24} />
                  <h3 className="font-bold uppercase tracking-widest">Protocolo de Implementação</h3>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground italic border-l-2 border-primary pl-4">{data.protocol}</p>
                <div className="space-y-4 pt-4">
                  <div className="flex gap-3 items-start">
                    <CheckCircle2 size={16} className="text-primary mt-0.5" />
                    <p className="text-xs text-muted-foreground">Aplique o reconhecimento de padrões durante suas próximas 3 horas.</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <CheckCircle2 size={16} className="text-primary mt-0.5" />
                    <p className="text-xs text-muted-foreground">Registre qualquer desconforto mental que surgir.</p>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setStep("quiz")}
                className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-bold uppercase flex items-center justify-center gap-2"
              >
                Ir para o Quiz <ArrowRight size={18} />
              </button>
            </motion.div>
          )}

          {step === "quiz" && (
            <motion.div 
              key="quiz"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="space-y-8">
                {data.quiz.map((q: any, i: number) => (
                  <div key={i} className="space-y-4">
                    <h4 className="text-lg font-bold leading-tight uppercase">{q.q}</h4>
                    <div className="space-y-2">
                      {q.a.map((ans: string) => (
                        <button key={ans} className="w-full p-4 rounded-xl border border-border bg-card text-left text-sm hover:border-primary transition-colors uppercase font-medium">
                          {ans}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <button 
                onClick={handleFinish}
                className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-bold uppercase flex items-center justify-center gap-2"
              >
                Gerar Diagnóstico <Zap size={18} fill="currentColor" />
              </button>
            </motion.div>
          )}

          {step === "conclusion" && (
            <motion.div 
              key="conclusion"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center text-center space-y-6 py-12"
            >
              <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center text-primary mb-2">
                <Award size={48} />
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-black uppercase italic tracking-tighter">Parabéns, {user?.name}!</h2>
                <p className="text-muted-foreground uppercase text-xs font-bold">Você concluiu o Dia {dayId}</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4 max-w-xs">
                <p className="text-[10px] text-muted-foreground text-left leading-relaxed">
                  DIAGNÓSTICO: Você demonstrou uma capacidade latente de observação. O padrão identificado no Dia {dayId} sugere que sua mente está pronta para a próxima camada de desconstrução...
                </p>
              </div>
              <button 
                onClick={() => navigate({ to: "/" })}
                className="w-full py-4 border border-primary text-primary rounded-xl font-bold uppercase tracking-widest hover:bg-primary/10 transition-colors"
              >
                Voltar à Central
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
