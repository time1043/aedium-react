import { AuthView } from '@neondatabase/neon-js/auth/react';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/auth/$pathname')({
  component: RouteComponent,
});

function RouteComponent() {
  const { pathname } = Route.useParams();
  const navigate = Route.useNavigate();

  return (
    <div className="auth-page flex min-h-screen flex-col items-center justify-center gap-4">
      <button className="btn text-xl btn-ghost" onClick={() => navigate({ to: '/' })}>
        Aedium
      </button>
      <AuthView pathname={pathname} className="neon-auth-patch" />
    </div>
  );
}
