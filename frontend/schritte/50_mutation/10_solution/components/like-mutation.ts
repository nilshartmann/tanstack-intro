import { useMutation, useQueryClient } from "@tanstack/react-query";
import ky from "ky";

import { bookByIdQueryOpts } from "./book-query.ts";

export function useLikeMutation(bookId: number) {
  const queryClient = useQueryClient();

  return useMutation({
    async mutationFn() {
      return ky.patch(`/api/books/${bookId}/like`);
    },
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: bookByIdQueryOpts(String(bookId)).queryKey,
      });
    },
  });
}
