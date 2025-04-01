import * as z from "zod";

export const postSchema = z.object({
  _id: z.string(),
  title: z.string(),
  description: z.string(),
  date: z.string(),
  content: z.string(),
  author: z.string(),
  archiveDate: z.date().nullable(),
  storageDate: z.date(),
});

export type Post = z.infer<typeof postSchema>;
