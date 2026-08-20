import { createFileRoute, useRouter } from "@tanstack/react-router";
import { useJourneyStore } from "../lib/store";
import { useState } from "react";
import { motion } from "framer-motion";

export const Route = createFileRoute("/login")({
  component: Login,
});

function Login() {
  const [name, setName] = useState("");
  const login = useJourneyStore((s) => s.login);
  const router = useRouter();

  const handleLogin = () => {
    if (name.trim()) {
      login(name);
      router.navigate({ to: "/welcome" });
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md space-y-8"
      >
        <h1 className="text-3xl font-bold text-center text-primary">Desbloqueie o Poder da Sua Mente</h1>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Digite seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-4 rounded-lg bg-card border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            onClick={handleLogin}
            className="w-full p-4 rounded-lg bg-primary text-primary-foreground font-bold hover:opacity-90 transition-opacity"
          >
            Entrar na Jornada
          </button>
        </div>
      </motion.div>
    </div>
  );
}
