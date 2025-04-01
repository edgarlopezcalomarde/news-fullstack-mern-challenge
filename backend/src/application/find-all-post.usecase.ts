import { FindAllDto } from "@domain/dto/find-all.dto";
import { PostRepository } from "@domain/repositories/post.repository";

export class FindAllPostUseCase {
  constructor(private readonly postRepository: PostRepository) {}

  async execute(query: FindAllDto) {
    return await this.postRepository.findAll(query);
  }
}
