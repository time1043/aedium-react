import { AccountView } from '@neondatabase/neon-js/auth/react';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_main/me/$pathname')({
  component: RouteComponent,
});

function RouteComponent() {
  const { pathname } = Route.useParams();

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <AccountView pathname={pathname} />
    </div>
  );
}
