import { z } from "zod";

// export type IBookDetails = {
//   id: number;
//   title: string;
//   author: string;
//   summary: string;
//   likes: number;
// };

// todo: IBookDetails als Zod-Typ
//   bokd
export const TBookDetails = z.object({
  id: z.number(),
  title: z.string(),
  author: z.string(),
  summary: z.string(),
  likes: z.number(),
});

export type IBookDetails = z.infer<typeof TBookDetails>;
