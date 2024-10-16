import { z } from "zod";

export const BookAbstract = z.object({
  id: z.number(),
  title: z.string(),
  likes: z.number(),
});

export type IBookAbstract = z.infer<typeof BookAbstract>;
export const GetBooksQueryResult = BookAbstract.array();
