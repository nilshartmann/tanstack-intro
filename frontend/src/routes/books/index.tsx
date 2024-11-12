import { createFileRoute } from "@tanstack/react-router";

import { BookList } from "../../components/BookList.tsx";
import { useBooksQuery } from "../../components/books-query.ts";
import { useRenderedLog } from "../../components/use-rendered-log.ts";

// todo:
//  - define BookListRouteSearchParams
//    - selectedBookId: z.number().optional(),
//  - add validateSearch
//    - return BookListRouteSearchParams.parse(s);
//  bsp
import { z } from "zod";

const BookListRouteSearchParams = z.object({
  selectedBookId: z.number().optional(),
});
export const Route = createFileRoute("/books/")({
  component: BookListRoute,
  validateSearch(search) {
    return BookListRouteSearchParams.parse(search);
  },
});

function BookListRoute() {
  useRenderedLog("BookListRoute");
  const booksQuery = useBooksQuery();

  return <BookList books={booksQuery.data} />;
}
