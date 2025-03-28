import { CreatePostDto } from "../dto/create-post.dto";
import { Post } from "../entities/post.entity";

export interface PostRepository {
  findAll(): Promise<Post>;
  save(createPost: CreatePostDto): Promise<Post>;
}
