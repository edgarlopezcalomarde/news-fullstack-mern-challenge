import { Request, Response } from "express";

export class NewsController {
  getAll = async (req: Request, res: Response) => {
    res.json({
      data: [],
    });
  };
  save = async (req: Request, res: Response) => {
    res.json({
      data: [],
    });
  };
}
