import { Post } from "../entities/post.entity";

export type CreatePostDto = Omit<Post, "_id">;
