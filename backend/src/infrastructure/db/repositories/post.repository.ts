import { CreatePostDto } from "@domain/dto/create-post.dto";
import { FindAllDto } from "@domain/dto/find-all.dto";
import { Post } from "@domain/entities/post.entity";
import { PostRepository } from "@domain/repositories/post.repository";
import { PostModel } from "@infrastructure/db/model/post.model";

export class MongoPostRepository implements PostRepository {
  constructor() {}

  async findAll({ type, field, order }: FindAllDto): Promise<Array<Post>> {
    let query = PostModel.where({
      archiveDate: {
        $exists: type === "archived",
      },
    });

    if (field && order) {
      query = query.sort({ [field]: order });
    }

    const posts = await query;
    return posts;
  }

  async save(createPost: CreatePostDto): Promise<Post> {
    const post = await PostModel.create({
      ...createPost,
      storageDate: new Date(),
    });

    await post.save();
    return post;
  }

  async archive(postId: string): Promise<Post> {
    const post = await PostModel.findById(postId);
    if (!post) throw new Error("Not Found");

    post.archiveDate = new Date();
    post.save();
    return post;
  }

  async remove(postId: string): Promise<boolean> {
    await PostModel.deleteOne({ _id: postId });
    return true;
  }
}
