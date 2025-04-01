import { PostRepository } from "@domain/repositories/post.repository";

export class ArchivePostUseCase {
  constructor(private readonly postRepository: PostRepository) {}

  async execute(postId: string) {
    return await this.postRepository.archive(postId);
  }
}
