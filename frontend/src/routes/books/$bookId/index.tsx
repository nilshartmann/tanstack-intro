import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

import { bookByIdQueryOpts } from "../../../components/book-query.ts";
import BookDetails from "../../../components/BookDetails.tsx";
import Pending from "../../../components/Pending.tsx";

export const Route = createFileRoute("/books/$bookId/")({
  component: BookRoute,
  pendingComponent: Pending,
});

function BookRoute() {
  const bookId = Route.useParams({
    select: (search) => search.bookId,
  });

  const { data: book } = useSuspenseQuery(bookByIdQueryOpts(bookId));

  return <BookDetails book={book} />;
}
