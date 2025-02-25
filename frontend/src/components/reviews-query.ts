import { queryOptions } from "@tanstack/react-query";
import ky from "ky";

import { GetReviewsResponseSchema } from "./review-types.ts";

export const reviewsForBookQueryOpts = (bookId: string) =>
  queryOptions({
    queryKey: ["books", bookId, "reviews"],
    async queryFn() {
      const data = await ky
        .get(`/api/books/${bookId}/reviews?slowdown=4800`)
        .json();
      return GetReviewsResponseSchema.parse(data);
    },
  });
