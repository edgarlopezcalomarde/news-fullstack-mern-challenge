import { postSchema } from "@domain/entities/post.entity";
import { z } from "zod";
import { createPostSchema } from "./create-post.dto";

export const updatePostSchema = createPostSchema.partial();

export type UpdatePostDto = z.infer<typeof postSchema>;
