import { useQueryClient } from "@tanstack/react-query";

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

  // todo ...
}
