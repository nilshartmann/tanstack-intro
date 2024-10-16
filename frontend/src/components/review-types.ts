import { z } from "zod";

export const ReviewSchema = z.object({
  id: z.number(),
  reviewer: z.string(),
  comment: z.string(),
});

export const GetReviewsResponseSchema = ReviewSchema.array();
