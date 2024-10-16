import { queryOptions } from "@tanstack/react-query";
import ky from "ky";

export const bookByIdQueryOpts = (bookId: string) =>
  queryOptions({
    queryKey: ["books", bookId],
    queryFn() {
      return ky
        .get<{
          id: string;
          title: string;
        }>(`/api/books/${bookId}?slowdown=2400`)
        .json();
    },
  });

export const commentsForBookQueryOpts = (bookId: string) =>
  queryOptions({
    queryKey: ["books", bookId, "comments"],
    queryFn() {
      return ky
        .get<
          Array<{
            reviewer: string;
            comment: string;
          }>
        >(`/api/books/${bookId}/comments?slowdown=3200`)
        .json();
    },
  });
