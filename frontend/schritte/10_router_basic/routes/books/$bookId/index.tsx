import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/books/$bookId/")({
  component: BookRoute,
});

// Todo:
//  - useParams
//     - select p.bookId
//  - ausgeben
//  bir
//
//  Todo #2:
//   - Buch lesen (book-query.ts)

function BookRoute() {
  const bookId = Route.useParams({
    select: (p) => p.bookId,
  });

  return <div>Book-Id {bookId}</div>;
}
