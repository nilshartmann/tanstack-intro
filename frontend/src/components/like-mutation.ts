import { useMutation, useQueryClient } from "@tanstack/react-query";
import { bookByIdQueryOpts } from "./book-query.ts";
import ky from "ky";

// todo:

//  useMutation
//   - ky.patch(`/api/books/${bookId}/like`);
//
//   onSuccess() {
//     queryClient.invalidateQueries({
//       queryKey: bookByIdQueryOpts(String(bookId)).queryKey,
//     });
//   },

export function useLikeMutation(bookId: number) {
  const queryClient = useQueryClient();

  // todo lmu
}
