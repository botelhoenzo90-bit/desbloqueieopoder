import { createFileRoute } from "@tanstack/react-router";
import { Home } from "@/components/odontocompany/Home";
import { Dashboard } from "@/components/odontocompany/dashboard/Dashboard";
import { LoginForm } from "@/components/odontocompany/auth/LoginForm";
import { useAppStore } from "@/lib/store";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const { isAuthenticated } = useAppStore();
  const search = new URLSearchParams(window.location.search);
  const view = search.get('view');

  if (view === 'login') return <LoginForm />;
  if (view === 'dashboard' && isAuthenticated) return <Dashboard />;
  if (view === 'dashboard' && !isAuthenticated) return <LoginForm />;

  return <Home />;
}