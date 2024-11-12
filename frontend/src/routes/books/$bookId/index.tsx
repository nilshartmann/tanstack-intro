import { createFileRoute, getRouteApi } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { bookByIdQueryOpts } from "../../../components/book-query.ts";
import BookDetails from "../../../components/BookDetails.tsx";
import { Suspense } from "react";
import Pending from "../../../components/Pending.tsx";

export const Route = createFileRoute("/books/$bookId/")({
  pendingComponent: Pending,
  component: BookRoute,
});

function BookRoute() {
  const { bookId } = Route.useParams();

  const result = useSuspenseQuery(bookByIdQueryOpts(bookId));

  return <BookDetails book={result.data} />;
}
