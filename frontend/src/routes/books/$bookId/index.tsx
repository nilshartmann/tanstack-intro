import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

import { bookByIdQueryOpts } from "../-queries.ts";

export const Route = createFileRoute("/books/$bookId/")({
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
    </div>
  );
}
