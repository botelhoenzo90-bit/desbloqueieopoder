import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useJourneyStore } from "../lib/store";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

export const Route = createFileRoute("/welcome")({
  component: Welcome,
});

function Welcome() {
  const user = useJourneyStore((s) => s.user);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main className="flex-1 flex flex-col items-center justify-center p-6 space-y-8 max-w-2xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <h1 className="text-3xl font-extrabold uppercase tracking-tight">Bem-vindo, {user?.name}</h1>
          <p className="text-muted-foreground text-sm">Assista à aula de boas-vindas para iniciar sua jornada de transformação.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="w-full aspect-video rounded-2xl overflow-hidden border border-border bg-card shadow-2xl relative group"
        >
          <iframe 
            src="https://www.youtube.com/embed/DWzyXrmr6kY" 
            title="Aula de Boas Vindas"
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center space-y-6 w-full"
        >
          <p className="text-xs text-muted-foreground max-w-md mx-auto">
            Esta jornada de 7 dias foi desenhada para reprogramar seus padrões mentais. Clique no botão abaixo para começar.
          </p>
          <button 
            onClick={() => navigate({ to: "/" })}
            className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-bold uppercase tracking-widest hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
          >
            Começar a Jornada <Play size={18} fill="currentColor" />
          </button>
        </motion.div>
      </main>
    </div>
  );
}
