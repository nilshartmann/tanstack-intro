import ky from "ky";
import { IBookDetails, TBookDetails } from "./book-types.ts";
import { queryOptions } from "@tanstack/react-query";

// todo #1:
//   queryOptions()
//     - queryKey: ["books", bookId],
//     - queryFn mit ky.get<IBookDetails>(`/api/books/${bookId}`).json()
//   qopts

// todo #2:
//  - zod Typen in book-types.ts bauen
//  - hier für parse verwenden
export const bookByIdQueryOpts = (bookId: string) =>
  queryOptions({
    queryKey: ["books", bookId],
    async queryFn() {
      const data = await ky.get(`/api/books/${bookId}?slowdown=0`).json();

      const book = TBookDetails.parse(data);

      return book;
    },
  });
