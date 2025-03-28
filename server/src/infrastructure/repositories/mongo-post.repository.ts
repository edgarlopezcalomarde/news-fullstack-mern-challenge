import { CreatePostDto } from "@domain/dto/create-post.dto";
import { Post } from "@domain/entities/post.entity";
import { PostRepository } from "@domain/repositories/post.repository";

export class MongoPostRepository implements PostRepository {
  constructor() {}
  findAll(): Promise<Post> {
    throw new Error("Method not implemented.");
  }
  save(createPost: CreatePostDto): Promise<Post> {
    throw new Error("Method not implemented.");
  }
}
