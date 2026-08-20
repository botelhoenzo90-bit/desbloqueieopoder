import { createFileRoute } from "@tanstack/react-router";
import { useJourneyStore } from "../lib/store";
import { motion } from "framer-motion";
import { Calendar, Zap, MessageSquare, Target } from "lucide-react";

export const Route = createFileRoute("/metaphor")({
  component: MetaphorPage,
});

function MetaphorPage() {
  const user = useJourneyStore((s) => s.user);
  const date = new Date().toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="min-h-screen bg-background text-foreground p-6 pb-24">
      <header className="mb-8 space-y-2">
        <div className="flex items-center gap-2 text-primary font-bold tracking-widest text-xs uppercase">
          <Calendar size={14} />
          {date}
        </div>
        <h1 className="text-3xl font-extrabold uppercase leading-none">Metáfora do Dia</h1>
      </header>

      <main className="space-y-8">
        <section className="bg-card border border-border rounded-2xl p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Zap size={80} className="text-primary" />
          </div>
          <div className="relative z-10 space-y-4">
            <p className="text-sm leading-relaxed text-muted-foreground italic">
              "Olá {user?.name}, o que você vê não é o que está lá, é o que a sua mente construiu para proteger você da realidade que você ainda não consegue sustentar..."
            </p>
            {/* Metaphor text content will be generated here */}
            <div className="h-px bg-border w-full my-6" />
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-primary font-bold flex items-center gap-2 text-sm uppercase">
                  <MessageSquare size={16} /> Reflexão
                </h3>
                <p className="text-xs text-muted-foreground">Onde você está se escondendo hoje?</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-primary font-bold flex items-center gap-2 text-sm uppercase">
                  <Target size={16} /> Missão
                </h3>
                <p className="text-xs text-muted-foreground">Identifique o primeiro padrão reativo do seu dia.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
