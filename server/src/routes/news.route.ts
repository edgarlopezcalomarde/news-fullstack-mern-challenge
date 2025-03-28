import { Request, Response, Router } from "express";

const newsRouter = Router();
newsRouter
  .route("/new")
  .post((req: Request, res: Response) => {
    res.json({
      message: "Saved correctly!",
    });
  })
  .get((req: Request, res: Response, next) => {
    res.json({
      message: "News",
    });
  });

export default newsRouter;
