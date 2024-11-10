import { z } from "zod";

export type IBookDetails = {
  id: number;
  title: string;
  author: string;
  summary: string;
  likes: number;
};

// todo: IBookDetails als Zod-Typ
//   bokd
