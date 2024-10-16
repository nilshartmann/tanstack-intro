import { queryOptions } from "@tanstack/react-query";
import ky from "ky";

import { IBookDetails } from "./book-types.ts";

// todo #1:
//   queryOptions()
//     - queryKey
//     - queryFn mit ky.get<IBookDetails>(`/api/books/${bookId}`).json()

// todo #2:
//  - zod Typen in book-types.ts bauen
//  - hier für parse verwenden

export const bookByIdQueryOpts = (bookId: string) =>
  queryOptions({
    queryKey: ["books", bookId],
    async queryFn() {
      const data = await ky
        .get<IBookDetails>(`/api/books/${bookId}?slowdown=2400`)
        .json();
      return data;
    },
  });
