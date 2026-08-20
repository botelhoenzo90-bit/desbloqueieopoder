import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/day/$dayId")({
  component: DayJourney,
});

function DayJourney() {
  return <div className="p-6">Conteúdo do Dia</div>;
}
