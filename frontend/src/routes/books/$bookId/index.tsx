import { createFileRoute } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import BookDetails from "../../../components/BookDetails.tsx";
import { bookByIdQueryOpts } from "../../../components/book-query.ts";
import Pending from "../../../components/Pending.tsx";

export const Route = createFileRoute("/books/$bookId/")({
  component: BookRoute,
  pendingComponent: Pending,
  errorComponent: () => <h1>Books could not be load :-(</h1>,
});

function BookRoute() {
  const bookId = Route.useParams().bookId;
  // -  todo #1: Route.useParams().bookId
  // -  todo #2 Link in BookList.tsx

  const result = useSuspenseQuery(bookByIdQueryOpts(bookId));

  return <BookDetails book={result.data} />;

  // more:
  // TanStack Query:
  // -  todo #3: Query Options (book-query.ts)
  // -  todo #4: useSuspenseQuery, BookDetails
}
