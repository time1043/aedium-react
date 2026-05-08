import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  // component: RouteComponent,
  beforeLoad: () => {
    throw redirect({ to: '/articles' });
  },
});

// function RouteComponent() {
//   return <Navigate to="/article" />;
//   return <div>Hello "/"!</div>;
// }
