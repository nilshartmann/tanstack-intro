// todo #1:
//   queryOptions()
//     - queryKey: ["books", bookId],
//     - queryFn mit ky.get<IBookDetails>(`/api/books/${bookId}`).json()
//   qopts

// todo #2:
//  - zod Typen in book-types.ts bauen
//  - hier für parse verwenden

export const bookByIdQueryOpts = (bookId: string) => {
  return null;
};
