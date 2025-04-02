import { ArchivePostUseCase } from "@application/archive-post.usecase";
import { CreatePostUseCase } from "@application/create-post.usecase";
import { FindAllPostUseCase } from "@application/find-all-post.usecase";
import { RemovePostUseCase } from "@application/remove-post.usecase";
import { MongoPostRepository } from "@infrastructure/db/repositories/post.repository";
import { PostController } from "@presenter/controllers/post.controller";
import { tryCatch } from "@presenter/middleware/try.middleware";
import { Router } from "express";

const postRouter = Router();
const postRepository = new MongoPostRepository();
const findAllPostUseCase = new FindAllPostUseCase(postRepository);
const createPostUseCase = new CreatePostUseCase(postRepository);
const archivePostUseCase = new ArchivePostUseCase(postRepository);
const removePostUseCase = new RemovePostUseCase(postRepository);

const { getAll, create, archive, remove } = new PostController(
  findAllPostUseCase,
  createPostUseCase,
  archivePostUseCase,
  removePostUseCase
);

postRouter.patch("/post/archive/:id", tryCatch(archive));
postRouter.delete("/post/:id", tryCatch(remove));
postRouter.get("/post", tryCatch(getAll));
postRouter.post("/post", tryCatch(create));

export default postRouter;
