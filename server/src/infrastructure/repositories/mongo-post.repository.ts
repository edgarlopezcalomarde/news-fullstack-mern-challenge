import { CreatePostDto } from "@domain/dto/create-post.dto";
import { Post } from "@domain/entities/post.entity";
import { PostRepository } from "@domain/repositories/post.repository";
import { PostModel } from "@infrastructure/db/schemas/post.model";

export class MongoPostRepository implements PostRepository {
  constructor() {}

  async findAll(): Promise<Array<Post>> {
    const posts = await PostModel.find();
    return posts;
  }

  async save(createPost: CreatePostDto): Promise<Post> {
    const post = await PostModel.create({
      ...createPost,
    });

    await post.save();
    return post;
  }
}
