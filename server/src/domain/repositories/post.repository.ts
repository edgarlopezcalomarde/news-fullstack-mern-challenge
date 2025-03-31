import { FindAllDto } from "@domain/dto/find-all.dto";
import { CreatePostDto } from "../dto/create-post.dto";
import { Post } from "../entities/post.entity";

export interface PostRepository {
  findAll(query: FindAllDto): Promise<Array<Post>>;
  save(createPost: CreatePostDto): Promise<Post>;
  archive(postId: string): Promise<Post>;
}
