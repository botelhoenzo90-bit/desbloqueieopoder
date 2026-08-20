import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
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
    { id: 0, title: "SEJA BEM VINDOS", subtitle: "Introdução", unlocked: true },
    { id: 1, title: "A MENTE QUE VOCÊ NÃO ESTÁ PERCEBENDO", subtitle: "Dia 1", unlocked: true },
    { id: 2, title: "QUANDO O PENSAMENTO COMEÇA A DIRIGIR VOCÊ", subtitle: "Dia 2", unlocked: completedDays.includes(1) },
    { id: 3, title: "O CÓDIGO POR TRÁS DOS SEUS PADRÕES", subtitle: "Dia 3", unlocked: completedDays.includes(2) },
    { id: 4, title: "O CONFRONTO COM A MENTE QUE CRIOU SEUS LIMITES", subtitle: "Dia 4", unlocked: completedDays.includes(3) },
    { id: 5, title: "A MUDANÇA COMEÇA QUANDO VOCÊ ENXERGA OUTRA POSSIBILIDADE", subtitle: "Dia 5", unlocked: completedDays.includes(4) },
    { id: 6, title: "QUANDO CONSCIÊNCIA VIRA ESCOLHA", subtitle: "Dia 6", unlocked: completedDays.includes(5) },
    { id: 7, title: "VOCÊ NÃO PRECISA SER REFÉM DA SUA MENTE", subtitle: "Dia 7", unlocked: completedDays.includes(6) },
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
          <h1 className="text-4xl font-extrabold leading-tight">Desbloqueie o Poder da Sua Mente</h1>
          <p className="text-muted-foreground text-sm max-w-md">Olá, {user.name}. Sua jornada de transformação começou.</p>
          <div className="flex items-center gap-4 pt-2">
            <Link 
              to="/day/$dayId" 
              params={{ dayId: "0" }}
              className="bg-primary text-primary-foreground px-6 py-3 rounded-md flex items-center gap-2 font-bold hover:scale-105 transition-transform"
            >
              <Play size={20} fill="currentColor" /> Assistir Agora
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
            {journeyCards.map((card) => (
              <Link
                key={card.id}
                to="/day/$dayId"
                params={{ dayId: card.id.toString() }}
                disabled={!card.unlocked}
                className={`relative flex-shrink-0 w-[200px] aspect-[4/5] rounded-lg overflow-hidden snap-start transition-all ${
                  card.unlocked ? 'hover:scale-105 cursor-pointer border border-primary/20' : 'opacity-40 grayscale pointer-events-none border border-transparent'
                }`}
              >
                <img src={thumbnailAsset.url} alt={card.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-[10px] font-bold text-primary uppercase">{card.subtitle}</span>
                  <p className="text-xs font-bold leading-tight mt-0.5 line-clamp-2">{card.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* comando, livros, comunidade */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <a href="https://comunidade-gratuito.lovable.app/" target="_blank" rel="noreferrer" className="bg-card p-4 rounded-xl border border-border flex flex-col items-center justify-center gap-3 text-center group hover:border-primary/50 transition-colors">
            <Users className="text-primary group-hover:scale-110 transition-transform" />
            <span className="text-xs font-bold uppercase">Comunidade</span>
          </a>
          <a href="https://mentor-primario.lovable.app/" target="_blank" rel="noreferrer" className="bg-card p-4 rounded-xl border border-border flex flex-col items-center justify-center gap-3 text-center group hover:border-primary/50 transition-colors">
            <Shield className="text-primary group-hover:scale-110 transition-transform" />
            <span className="text-xs font-bold uppercase">Comando</span>
          </a>
          <a href="https://neuroleitor.lovable.app/" target="_blank" rel="noreferrer" className="bg-card p-4 rounded-xl border border-border flex flex-col items-center justify-center gap-3 text-center group hover:border-primary/50 transition-colors">
            <BookOpen className="text-primary group-hover:scale-110 transition-transform" />
            <span className="text-xs font-bold uppercase">Livros</span>
          </a>
          <Link to="/metaphor" className="bg-card p-4 rounded-xl border border-border flex flex-col items-center justify-center gap-3 text-center group hover:border-primary/50 transition-colors">
            <LayoutGrid className="text-primary group-hover:scale-110 transition-transform" />
            <span className="text-xs font-bold uppercase">Metáfora</span>
          </Link>
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
