import { Response, Request, NextFunction } from "express";

export type Controller = (req: Request, res: Response) => Promise<void>;

export const tryCatch =
  (controller: Controller) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await controller(req, res);
    } catch (error) {
      return next(error);
    }
  };
