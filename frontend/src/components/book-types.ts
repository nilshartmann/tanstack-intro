import { z } from "zod";

// export type IBookDetails = {
//   id: number;
//   title: string;
//   author: string;
//   summary: string;
//   likes: number;
// };
export const TBookDetails = z.object({
  id: z.number(),
  title: z.string().max(1000),
  author: z.string(),
  summary: z.string(),
  likes: z.number().min(0),
});

export type IBookDetails = z.infer<typeof TBookDetails>;
