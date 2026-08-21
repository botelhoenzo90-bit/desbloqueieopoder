import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { playSound } from "../lib/audio";
import { useJourneyStore } from "../lib/store";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Play, BookOpen, Users, Shield, Trophy, LayoutGrid, Zap } from "lucide-react";
import thumbnailAsset from "@/assets/thumbnail.jpeg.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const user = useJourneyStore((s) => s.user);
  const completedDays = useJourneyStore((s) => s.completedDays);
  const points = useJourneyStore((s) => s.points);
  const resetJourney = useJourneyStore((s) => s.resetJourney);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate({ to: "/login" });
    }
  }, [user, navigate]);

  if (!user) return null;

  const progress = Math.round((completedDays.length / 7) * 100);

  const journeyCards = [
    { id: 10, title: "COMUNIDADE NEUROCONSCIÊNCIA", subtitle: "Primeiro Passo", unlocked: true, external: "https://comunidade-gratuito.lovable.app/" },
    { id: 0, title: "SEJA BEM VINDOS", subtitle: "Boas Vindas", unlocked: true },
    { id: 1, title: "A MENTE QUE VOCÊ NÃO ESTÁ PERCEBENDO", subtitle: "Dia 1", unlocked: true },
    { id: 2, title: "QUANDO O PENSAMENTO COMEÇA A DIRIGIR VOCÊ", subtitle: "Dia 2", unlocked: completedDays.includes(1) },
    { id: 3, title: "O CÓDIGO POR TRÁS DOS SEUS PADRÕES", subtitle: "Dia 3", unlocked: completedDays.includes(2) },
    { id: 4, title: "O CONFRONTO COM A MENTE QUE CRIOU SEUS LIMITES", subtitle: "Dia 4", unlocked: completedDays.includes(3) },
    { id: 5, title: "A MUDANÇA COMEÇA QUANDO VOCÊ ENXERGA OUTRA POSSIBILIDADE", subtitle: "Dia 5", unlocked: completedDays.includes(4) },
    { id: 6, title: "QUANDO CONSCIÊNCIA VIRA ESCOLHA", subtitle: "Dia 6", unlocked: completedDays.includes(5) },
    { id: 7, title: "VOCÊ NÃO PRECISA SER REFÉM DA SUA MENTE", subtitle: "Dia 7", unlocked: completedDays.includes(6) },
    { id: 8, title: "CENTRO DE COMANDO OPERACIONAL", subtitle: "Ferramenta", unlocked: completedDays.includes(7), external: "https://mentor-primario.lovable.app/" },
    { id: 9, title: "ROBÔ DECODIFICADOR DE LIVROS", subtitle: "Livros", unlocked: completedDays.includes(7), external: "https://neuroleitor.lovable.app/" },
    { id: 11, title: "MÉTODO NEUROLEITURA", subtitle: "Absorva Conhecimento", unlocked: completedDays.includes(7) },
    { id: 12, title: "INSTITUTO NEUROCONSCIÊNCIA", subtitle: "Próximo Passo", unlocked: completedDays.includes(7) },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground pb-20 font-sans">
      {/* Header / Netflix Style Hero */}
      <header className="relative h-[60vh] w-full overflow-hidden">
        <img 
          src={thumbnailAsset.url} 
          alt="Mind Power" 
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        <div className="absolute bottom-10 left-6 right-6 space-y-4">
          <span className="text-primary font-bold tracking-widest text-sm">PREMIUM EXPERIENCE</span>
          <h1 className="text-4xl font-black leading-tight tracking-tighter uppercase italic">Desbloqueie o Poder da Sua Mente</h1>
          <p className="text-muted-foreground text-[10px] max-w-md uppercase tracking-[0.2em] font-bold">7 dias para sair do piloto automático e perceber os padrões que governam sua experiência.</p>
          <p className="text-primary text-xs font-bold uppercase italic tracking-widest">Olá, {user.name.split(' ')[0]}.</p>
          <div className="flex items-center gap-4 pt-2">
            <Link 
              to="/day/$dayId" 
              params={{ dayId: "0" }}
              onClick={() => playSound('click')}
              className="bg-primary text-primary-foreground px-6 py-3 rounded-md flex items-center gap-2 font-black uppercase tracking-widest text-xs hover:scale-105 transition-transform shadow-xl shadow-primary/20"
            >
              <Play size={16} fill="currentColor" /> Assistir Agora
            </Link>
            <div className="flex flex-col">
              <span className="text-xs text-muted-foreground">Progresso Total</span>
              <div className="w-32 h-1.5 bg-card rounded-full mt-1 overflow-hidden border border-border">
                <div className="h-full bg-primary" style={{ width: `${progress}%` }} />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="px-6 -mt-4 relative z-10 space-y-12">
        {/* Journey Section */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Zap className="text-primary" size={20} /> Sua Jornada de 7 Dias
          </h2>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x">
            {journeyCards.map((card) => {
              const CardContent = (
                <div className={`relative flex-shrink-0 w-[220px] aspect-[4/5] rounded-lg overflow-hidden snap-start transition-all border-2 border-transparent ${
                  card.unlocked ? 'hover:scale-105 cursor-pointer hover:border-primary/50 group shadow-2xl' : 'opacity-40 grayscale pointer-events-none'
                }`}>
                  <img src={thumbnailAsset.url} alt={card.title} className="w-full h-full object-cover brightness-75 group-hover:brightness-100 transition-all" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 space-y-1">
                    <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">{card.subtitle}</span>
                    <p className="text-xs font-black leading-tight uppercase italic tracking-tighter line-clamp-2">{card.title}</p>
                    {card.unlocked && <div className="h-0.5 w-0 group-hover:w-full bg-primary transition-all duration-500" />}
                  </div>
                </div>
              );

              return card.external ? (
                <a key={card.id} href={card.external} target="_blank" rel="noreferrer" onClick={() => playSound('click')}>
                  {CardContent}
                </a>
              ) : (
                <Link
                  key={card.id}
                  to="/day/$dayId"
                  params={{ dayId: card.id.toString() }}
                  disabled={!card.unlocked}
                  onClick={() => playSound('click')}
                >
                  {CardContent}
                </Link>
              );
            })}
          </div>
        </section>

        {/* comando, livros, comunidade */}
        <section className="space-y-4">
          <h2 className="text-xs font-black uppercase tracking-[0.3em] text-muted-foreground px-2">Bônus Premium</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a href="https://metodoneuroconfronto.lovable.app/" target="_blank" rel="noreferrer" onClick={() => playSound('click')} className="bg-card/50 p-6 rounded-xl border border-border flex items-center gap-4 group hover:border-primary/50 transition-all hover:bg-card">
              <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                <Shield size={24} />
              </div>
              <div className="text-left">
                <span className="text-[10px] font-black uppercase tracking-widest text-primary">App</span>
                <p className="text-xs font-bold uppercase tracking-tighter italic">12 Confronto</p>
              </div>
            </a>
            <a href="https://inner-fortress-mind-forge.lovable.app/challenge" target="_blank" rel="noreferrer" onClick={() => playSound('click')} className="bg-card/50 p-6 rounded-xl border border-border flex items-center gap-4 group hover:border-primary/50 transition-all hover:bg-card">
              <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                <Zap size={24} />
              </div>
              <div className="text-left">
                <span className="text-[10px] font-black uppercase tracking-widest text-primary">App</span>
                <p className="text-xs font-bold uppercase tracking-tighter italic">Fortaleza Interior</p>
              </div>
            </a>
            <a href="https://destiny-unlocked-app.lovable.app/" target="_blank" rel="noreferrer" onClick={() => playSound('click')} className="bg-card/50 p-6 rounded-xl border border-border flex items-center gap-4 group hover:border-primary/50 transition-all hover:bg-card">
              <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                <Trophy size={24} />
              </div>
              <div className="text-left">
                <span className="text-[10px] font-black uppercase tracking-widest text-primary">App</span>
                <p className="text-xs font-bold uppercase tracking-tighter italic">Revele Seu Destino</p>
              </div>
            </a>
          </div>
        </section>

        {/* Stats / Points */}
        <section className="bg-card/50 border border-border rounded-2xl p-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-primary/20 p-3 rounded-full">
              <Trophy className="text-primary" size={24} />
            </div>
            <div>
              <p className="text-sm font-bold">{points} Pontos Conquistados</p>
              <p className="text-xs text-muted-foreground">Nível Iniciante • {progress}% completo</p>
            </div>
          </div>
          <button 
            onClick={() => {
              if(confirm("Deseja realmente apagar todo o seu progresso?")) {
                resetJourney();
                navigate({ to: "/login" });
              }
            }}
            className="text-[10px] font-bold uppercase text-muted-foreground hover:text-destructive transition-colors"
          >
            Reiniciar Jornada
          </button>
        </section>

        <footer className="text-center space-y-1 py-4">
          <p className="text-[10px] text-muted-foreground">© Instituto NeuroConsciência de Desenvolvimento Humano</p>
          <p className="text-[10px] text-muted-foreground font-medium">Criador: Jöweslëy</p>
        </footer>
      </main>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 h-16 bg-background/80 backdrop-blur-lg border-t border-border flex items-center justify-around px-6 z-50">
        <Link to="/" className="flex flex-col items-center gap-1 text-primary">
          <LayoutGrid size={20} />
          <span className="text-[10px] font-bold uppercase">Home</span>
        </Link>
        <Link to="/metaphor" className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
          <Zap size={20} />
          <span className="text-[10px] font-bold uppercase">Metáfora</span>
        </Link>
        <div className="flex flex-col items-center gap-1 text-muted-foreground opacity-50">
          <Trophy size={20} />
          <span className="text-[10px] font-bold uppercase">Ranking</span>
        </div>
      </nav>
    </div>
  );
}
