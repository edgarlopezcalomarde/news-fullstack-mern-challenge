import { CreatePostUseCase } from "@application/create-post.usecase";
import { FindAllPostUseCase } from "@application/find-all-post.usecase";
import { createPostSchema } from "@domain/dto/create-post.dto";
import { NewsController } from "@infrastructure/controllers/news.controller";
import { bodyValidator } from "@infrastructure/middleware/body-validator.middleware";

import { tryCatch } from "@infrastructure/middleware/try.middleware";
import { MongoPostRepository } from "@infrastructure/repositories/mongo-post.repository";
import { Router } from "express";

const newsRouter = Router();
const postRepository = new MongoPostRepository();
const findAllPostUseCase = new FindAllPostUseCase(postRepository);
const createPostUseCase = new CreatePostUseCase(postRepository);
const { getAll, save } = new NewsController(
  findAllPostUseCase,
  createPostUseCase
);

newsRouter
  .route("/new")
  .post(bodyValidator(createPostSchema), tryCatch(save))
  .get(tryCatch(getAll));

export default newsRouter;
