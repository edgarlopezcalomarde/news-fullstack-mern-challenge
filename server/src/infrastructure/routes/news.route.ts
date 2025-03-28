import { Request, Response, Router } from "express";
import { NewsController } from "src/infrastructure/controllers/news.controller";
import { tryCatch } from "src/infrastructure/middleware/try.middleware";

const newsRouter = Router();
const { getAll, save } = new NewsController();
newsRouter.route("/new").post(tryCatch(save)).get(tryCatch(getAll));

export default newsRouter;
