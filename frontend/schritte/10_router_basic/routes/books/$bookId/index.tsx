import { createFileRoute } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import BookDetails from "../../../components/BookDetails.tsx";
import { bookByIdQueryOpts } from "../../../components/book-query.ts";

export const Route = createFileRoute("/books/$bookId/")({
  component: BookRoute,
});

function BookRoute() {
  const params = Route.useParams();

  return <div>Hello, {params.bookId}</div>;
}
