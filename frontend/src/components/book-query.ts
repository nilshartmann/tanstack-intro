// todo #1:
//   queryOptions()
//     - queryKey: ["books", bookId],
//     - queryFn mit ky.get<IBookDetails>(`/api/books/${bookId}`).json()
//   qopts

// todo #2:
//  - zod Typen in book-types.ts bauen
//  - hier für parse verwenden

import { queryOptions } from "@tanstack/react-query";
import ky from "ky";

import { TBookDetails } from "./book-types.ts";

export const bookByIdQueryOpts = (bookId: string) =>
  queryOptions({
    queryKey: ["books", bookId],

    async queryFn() {
      const data = await ky.get(`/api/books/${bookId}?slowdown=2400`).json();
      const book = TBookDetails.parse(data);
      return book;
    },
  });
