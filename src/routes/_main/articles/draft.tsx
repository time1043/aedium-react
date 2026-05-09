import { createFileRoute } from '@tanstack/react-router';

import Editor from '@/components/Editor';

export const Route = createFileRoute('/_main/articles/draft')({
  component: RouteComponent,
});

function RouteComponent() {
  // return <h1>editor</h1>;
  return <Editor />;
}
