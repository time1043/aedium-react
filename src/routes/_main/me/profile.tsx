import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_main/me/profile')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_main/me/profile"!</div>;
}
