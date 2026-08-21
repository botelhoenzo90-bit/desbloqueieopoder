import { createFileRoute, useParams, useNavigate, Link } from "@tanstack/react-router";
import { playSound } from "../lib/audio";
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
    exercise: "Respire fundo 3 vezes antes de começar qualquer tarefa hoje.",
    mission: "Escreva uma coisa que você notou no automático hoje.",
    quiz: [
      { q: "Você percebe quando está no piloto automático?", a: ["Sempre", "Às vezes", "Nunca"] },
      { q: "Qual a sua maior distração?", a: ["Celular", "Pensamentos", "Pessoas"] },
      { q: "Você acredita que pode mudar seus padrões?", a: ["Sim", "Não tenho certeza", "É impossível"] },
      { q: "Como você se sente ao ser confrontado?", a: ["Curioso", "Defensivo", "Indiferente"] },
      { q: "Você dedica tempo para se observar?", a: ["Diariamente", "Raramente", "Nunca"] },
      { q: "O que é 'consciência' para você?", a: ["Um estado", "Uma escolha", "Uma ideia"] },
      { q: "Sua mente domina você?", a: ["Sim", "Estamos em guerra", "Eu domino"] },
      { q: "Você está disposto a sofrer o desconforto da mudança?", a: ["Sim", "Talvez", "Não"] },
      { q: "Qual seu objetivo principal aqui?", a: ["Paz", "Poder", "Entendimento"] }
    ]
  },
  "1": {
    title: "A MENTE QUE VOCÊ NÃO ESTÁ PERCEBENDO",
    video: "https://www.youtube.com/embed/0qKbe2jMRV0",
    protocol: "Observe o observador. Quem é que está ouvindo esses pensamentos?",
    exercise: "Fique 1 minuto em silêncio absoluto observando o fluxo mental.",
    mission: "Identifique um pensamento repetitivo e diga 'Eu te vejo'.",
    quiz: [
      { q: "Quem é que observa seus pensamentos?", a: ["Eu", "Minha mente", "Não sei"] },
      { q: "Os pensamentos são fatos?", a: ["Sim", "Não", "Depende"] },
      { q: "Você se perde em histórias mentais?", a: ["Toda hora", "Às vezes", "Nunca"] },
      { q: "Onde você sente o pensamento no corpo?", a: ["Cabeça", "Peito", "Barriga"] },
      { q: "Você consegue parar de pensar por 10 segundos?", a: ["Sim", "Não", "Quase"] },
      { q: "O pensamento é barulhento?", a: ["Muito", "Suave", "Inexistente"] },
      { q: "Você julga o que pensa?", a: ["Sim", "Não", "Estou tentando parar"] },
      { q: "Sua mente é sua amiga?", a: ["Sim", "Não", "É uma ferramenta"] },
      { q: "O que acontece quando você apenas observa?", a: ["Acalma", "Agita", "Nada"] }
    ]
  },
  "2": {
    title: "QUANDO O PENSAMENTO COMEÇA A DIRIGIR VOCÊ",
    video: "https://www.youtube.com/embed/jFp_ae_kp7g",
    protocol: "Sinta a tração do hábito. Perceba o impulso antes da ação.",
    exercise: "Atrase uma reação automática (como pegar o celular) por 30 segundos.",
    mission: "Não reclame de nada por 1 hora.",
    quiz: [
      { q: "Qual gatilho te faz perder o controle?", a: ["Crítica", "Cansaço", "Medo"] },
      { q: "Você reage ou responde?", a: ["Reajo", "Respondo", "Oscilo"] },
      { q: "Onde o impulso nasce?", a: ["No estômago", "Na mente", "No ambiente"] },
      { q: "Você se sente refém das emoções?", a: ["Sim", "Não", "Às vezes"] },
      { q: "O que você ganha ao reagir no automático?", a: ["Segurança falsa", "Alívio", "Nada"] },
      { q: "Você percebe o espaço entre o estímulo e a resposta?", a: ["Sim", "Não", "O que é isso?"] },
      { q: "Quem dirige seu carro hoje?", a: ["Medo", "Hábito", "Consciência"] },
      { q: "Você aceita ser dirigido por padrões antigos?", a: ["Sim", "Não", "Não sabia que era"] },
      { q: "Qual a cor da sua reatividade hoje?", a: ["Vermelho", "Cinza", "Preto"] }
    ]
  },
  "3": {
    title: "O CÓDIGO POR TRÁS DOS SEUS PADRÕES",
    video: "https://www.youtube.com/embed/placeholder3",
    protocol: "Decodifique a intenção positiva por trás do padrão destrutivo.",
    exercise: "Liste 3 comportamentos que você repete sem querer.",
    mission: "Pergunte ao seu padrão: 'Do que você está me protegendo?'",
    quiz: Array(9).fill({ q: "Pergunta de decodificação de padrão...", a: ["Opção A", "Opção B", "Opção C"] })
  },
  "4": {
    title: "O CONFRONTO COM A MENTE QUE CRIOU SEUS LIMITES",
    video: "https://www.youtube.com/embed/placeholder4",
    protocol: "Encare a sombra. O limite é uma construção de segurança.",
    exercise: "Olhe no espelho por 2 minutos e diga: 'Eu vejo o que você criou'.",
    mission: "Faça algo que sua mente diz que você 'não deveria' fazer (pequeno).",
    quiz: Array(9).fill({ q: "Pergunta de confronto mental...", a: ["Opção A", "Opção B", "Opção C"] })
  },
  "5": {
    title: "A MUDANÇA COMEÇA QUANDO VOCÊ ENXERGA OUTRA POSSIBILIDADE",
    video: "https://www.youtube.com/embed/placeholder5",
    protocol: "Abra o leque. Para cada 'não dá', encontre três 'e se?'.",
    exercise: "Troque um 'eu tenho que' por 'eu escolho' durante o dia.",
    mission: "Mude o caminho habitual que você faz para algum lugar.",
    quiz: Array(9).fill({ q: "Pergunta de possibilidades...", a: ["Opção A", "Opção B", "Opção C"] })
  },
  "6": {
    title: "QUANDO CONSCIÊNCIA VIRA ESCOLHA",
    video: "https://www.youtube.com/embed/placeholder6",
    protocol: "A liberdade é o espaço entre o pensamento e o ato.",
    exercise: "Pratique a pausa deliberada 5 vezes hoje.",
    mission: "Escolha conscientemente não ter a última palavra em uma conversa.",
    quiz: Array(9).fill({ q: "Pergunta sobre escolha consciente...", a: ["Opção A", "Opção B", "Opção C"] })
  },
  "7": {
    title: "VOCÊ NÃO PRECISA SER REFÉM DA SUA MENTE",
    video: "https://www.youtube.com/embed/placeholder7",
    protocol: "Consolidação. A mente é serva, você é o mestre.",
    exercise: "Escreva sua nova declaração de poder mental.",
    mission: "Assista ao vídeo final do Instituto e planeje seu próximo passo.",
    quiz: Array(9).fill({ q: "Pergunta de consolidação final...", a: ["Opção A", "Opção B", "Opção C"] })
  }
};

function DayJourney() {
  const { dayId } = useParams({ from: "/day/$dayId" });
  const navigate = useNavigate();
  const user = useJourneyStore((s) => s.user);
  const completeDay = useJourneyStore((s) => s.completeDay);
  const addPoints = useJourneyStore((s) => s.addPoints);
  const completedDays = useJourneyStore((s) => s.completedDays);

  const [step, setStep] = useState<"video" | "protocol" | "exercise" | "mission" | "quiz" | "conclusion">("video");
  const data = JOURNEY_DATA[dayId] || JOURNEY_DATA["0"];

  const generateDiagnosis = () => {
    const text = `ANÁLISE PROFUNDA PARA ${user?.name?.toUpperCase()}:\n\nSua jornada no Dia ${dayId} revela um padrão intrincado de funcionamento mental. Ao responder a estas 9 camadas de inquisição, você descascou a primeira superfície do que chama de 'eu'. O diagnóstico processado indica que sua mente utiliza a reatividade como um mecanismo de defesa contra o desconhecido. \n\n${".".repeat(2500)}\n\nESTE É O SEU PONTO DE RUPTURA. A partir daqui, a percepção não é mais opcional. Você agora carrega a responsabilidade da visão. O que foi visto não pode ser desvisto. Sua mente tentará retornar ao conforto do automático, mas a semente da dúvida consciente foi plantada. O próximo passo exige que você não apenas veja, mas que decida quem realmente está no comando.`;
    return text;
  };

  const handleFinish = () => {
    const id = parseInt(dayId);
    completeDay(id);
    addPoints(200); // 100 da aula + 100 do quiz/conclusão
    playSound('complete');
    confetti({
      particleCount: 200,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#FFD700', '#FFFFFF', '#4A90E2', '#B8860B']
    });
    setStep("conclusion");
  };

  const handleNextStep = (next: any) => {
    playSound('click');
    setStep(next);
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
                  onClick={() => {
                    addPoints(50);
                    handleNextStep("protocol");
                  }}
                  className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-bold uppercase flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
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
                onClick={() => handleNextStep("exercise")}
                className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-bold uppercase flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
              >
                Ir para Exercícios <ArrowRight size={18} />
              </button>
            </motion.div>
          )}

          {step === "exercise" && (
            <motion.div 
              key="exercise"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="bg-card border border-border rounded-2xl p-6 space-y-6">
                <div className="flex items-center gap-3 text-primary">
                  <Zap size={24} />
                  <h3 className="font-bold uppercase tracking-widest">Exercícios Práticos</h3>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{data.exercise}</p>
              </div>
              <button 
                onClick={() => {
                  addPoints(30);
                  handleNextStep("mission");
                }}
                className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-bold uppercase flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
              >
                Concluir Exercício <ArrowRight size={18} />
              </button>
            </motion.div>
          )}

          {step === "mission" && (
            <motion.div 
              key="mission"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="bg-card border border-primary/30 rounded-2xl p-6 space-y-6 bg-gradient-to-br from-card to-primary/5">
                <div className="flex items-center gap-3 text-primary">
                  <Target size={24} />
                  <h3 className="font-bold uppercase tracking-widest">Missão do Dia</h3>
                </div>
                <p className="text-sm leading-relaxed font-bold italic text-foreground">"{data.mission}"</p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest">A missão é o que consolida a consciência em ação.</p>
              </div>
              <button 
                onClick={() => {
                  addPoints(50);
                  handleNextStep("quiz");
                }}
                className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-bold uppercase flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
              >
                Aceitar Missão & Quiz <ArrowRight size={18} />
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
                        <button 
                          key={ans} 
                          onClick={() => playSound('click')}
                          className="w-full p-4 rounded-xl border border-border bg-card text-left text-[10px] md:text-xs hover:border-primary transition-colors uppercase font-bold tracking-wider"
                        >
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
                  {generateDiagnosis()}
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
