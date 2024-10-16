import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

import Pending from "../../../../../src/components/Pending";
import { bookByIdQueryOpts } from "../../../components/book-query.ts";
import BookDetails from "../../../components/BookDetails.tsx";

export const Route = createFileRoute("/books/$bookId/")({
  component: BookRoute,
  pendingComponent: Pending,
});

// Todo:
//  - useParams
//     - select p.bookId
//  - ausgeben
//
//  Todo #2:
//   - Buch lesen (book-query.ts)

function BookRoute() {
  const bookId = Route.useParams({
    select: (p) => p.bookId,
  });

  const book = useSuspenseQuery(bookByIdQueryOpts(bookId));

  return <BookDetails book={book.data} />;
}
