import { PostRepository } from "@domain/repositories/post.repository";

export class FindAllPostUseCase {
  constructor(private readonly postRepository: PostRepository) {}

  async execute() {
    return await this.postRepository.findAll();
  }
}
