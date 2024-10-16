import { useSuspenseQuery } from "@tanstack/react-query";
import ky from "ky";

import { GetBooksQueryResult } from "./book-abstract-types.ts";

export function useBooksQuery() {
  return useSuspenseQuery({
    queryKey: ["books"],
    async queryFn() {
      const result = await ky.get("/api/books").json();
      const books = GetBooksQueryResult.parse(result);
      return books;
    },
  });
}
