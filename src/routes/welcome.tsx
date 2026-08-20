import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/welcome")({
  component: Welcome,
});

function Welcome() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center p-6 bg-background text-foreground">
      <h1 className="text-3xl font-bold mb-8">Bem-vindo à Jornada</h1>
      {/* Aqui virá o componente de vídeo */}
      <button className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold">
        Acessar Jornada
      </button>
    </div>
  );
}
