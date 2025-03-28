import * as z from "zod";
import { postSchema } from "../entities/post.entity";

export const createPostSchema = postSchema.omit({ _id: true });

export type CreatePostDto = z.infer<typeof postSchema>;
