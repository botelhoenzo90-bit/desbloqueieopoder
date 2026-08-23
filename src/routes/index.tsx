import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

import { Home } from "@/components/fitway/Home";

function Index() {
  return <Home />;
}
