import { CreatePostUseCase } from "@application/create-post.usecase";
import { FindAllPostUseCase } from "@application/find-all-post.usecase";
import { Request, Response } from "express";

export class NewsController {
  constructor(
    private readonly findAllPostUseCase: FindAllPostUseCase,
    private readonly createPostUseCase: CreatePostUseCase
  ) {}

  getAll = async (req: Request, res: Response) => {
    const data = await this.findAllPostUseCase.execute();
    res.json({
      data,
    });
  };
  save = async (req: Request, res: Response) => {
    const data = await this.createPostUseCase.execute(req.body);
    res.json({
      data,
    });
  };
}
