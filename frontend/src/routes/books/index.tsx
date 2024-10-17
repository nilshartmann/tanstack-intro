import { createFileRoute } from "@tanstack/react-router";
// todo:
//  - define BookListRouteSearchParams
//    - selectedBookId: z.number().optional(),
//  - add validateSearch
//    - return BookListRouteSearchParams.parse(s);
//  bsp
import { z } from "zod";

import { BookList } from "../../components/BookList.tsx";
import { useBooksQuery } from "../../components/books-query.ts";
import { useRenderedLog } from "../../components/use-rendered-log.ts";

const BookListRouteSearchParams = z.object({
  selectedBookId: z.number().optional(),
});

export const Route = createFileRoute("/books/")({
  component: BookListRoute,
  validateSearch: (s) => BookListRouteSearchParams.parse(s),
});

function BookListRoute() {
  useRenderedLog("BookListRoute");
  const booksQuery = useBooksQuery();

  return <BookList books={booksQuery.data} />;
}
