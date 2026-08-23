import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-8">
      <p className="text-gray-400 font-light text-center">
        deixa agoa sem nada denovo posi deposi vou enviar outro prompt
      </p>
    </div>
  );
}