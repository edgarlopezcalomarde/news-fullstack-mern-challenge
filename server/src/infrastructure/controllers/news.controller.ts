import { ArchivePostUseCase } from "@application/archive-post.usecase";
import { CreatePostUseCase } from "@application/create-post.usecase";
import { FindAllPostUseCase } from "@application/find-all-post.usecase";
import { RemovePostUseCase } from "@application/remove-post.usecase";
import { Request, Response } from "express";

export class NewsController {
  constructor(
    private readonly findAllPostUseCase: FindAllPostUseCase,
    private readonly createPostUseCase: CreatePostUseCase,
    private readonly archivePostUseCase: ArchivePostUseCase,
    private readonly removePostUseCase: RemovePostUseCase
  ) {}

  getAll = async (req: Request, res: Response) => {
    const { type, order, field } = req.query;

    if (!type || typeof type !== "string") throw new Error("Not Found");
    if (field && typeof field !== "string") throw new Error("Not Found");
    if (!order || (order !== "asc" && order !== "desc")) {
      throw new Error("Not Found");
    }

    const data = await this.findAllPostUseCase.execute({ type, field, order });
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

  archive = async (req: Request, res: Response) => {
    const id = req.params["id"];

    if (!id) throw new Error("Not Found");
    const data = await this.archivePostUseCase.execute(id);
    res.json({
      data,
    });
  };

  remove = async (req: Request, res: Response) => {
    const id = req.params["id"];
    if (!id) throw new Error("Not Found");
    const data = await this.removePostUseCase.execute(id);
    res.json({
      data,
    });
  };
}
