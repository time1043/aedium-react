import { NeonAuthUIProvider } from '@neondatabase/neon-js/auth/react';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

import BreakpointIndicator from '@/components/BreakpointIndicator';
import { authClient } from '@/libs/neon-auth';

const RootLayout = () => (
  <NeonAuthUIProvider authClient={authClient} emailOTP>
    <Outlet />
    {/* <Toaster position="top-center" richColors /> */}
    <BreakpointIndicator />
    <TanStackRouterDevtools position="bottom-left" />
  </NeonAuthUIProvider>
);

export const Route = createRootRoute({ component: RootLayout });
