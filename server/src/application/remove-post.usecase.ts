import { PostRepository } from "@domain/repositories/post.repository";

export class RemovePostUseCase {
  constructor(private readonly postRepository: PostRepository) {}

  async execute(postId: string) {
    return await this.postRepository.remove(postId);
  }
}
