import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute, Outlet } from "@tanstack/react-router";

import { addLogEvent } from "../../../event-store.ts";
import { bookByIdQueryOpts } from "../-queries.ts";

export const Route = createFileRoute("/books/$bookId")({
  beforeLoad({ params, context }) {
    addLogEvent(Route.id, `beforeLoad`);
    const { bookId } = params;

    context.queryClient.ensureQueryData(bookByIdQueryOpts(bookId));
    // context.queryClient.ensureQueryData(commentsForBookQueryOpts(bookId));
  },
  pendingComponent: () => <div>Pending...</div>,
  component: BookRoute,
});

function BookRoute() {
  const bookId = Route.useParams({
    select: (p) => p.bookId,
  });

  const x = useSuspenseQuery(bookByIdQueryOpts(bookId));

  return (
    <div>
      <h1>{x.data.title}</h1>
      <Outlet />
    </div>
  );
}
