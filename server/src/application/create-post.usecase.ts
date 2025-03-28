import { CreatePostDto } from "@domain/dto/create-post.dto";
import { PostRepository } from "@domain/repositories/post.repository";

export class CreatePostUseCase {
  constructor(private readonly postRepository: PostRepository) {}

  async execute(createPostDto: CreatePostDto) {
    return await this.postRepository.save(createPostDto);
  }
}
