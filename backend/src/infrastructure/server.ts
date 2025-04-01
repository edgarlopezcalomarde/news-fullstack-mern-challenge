import postRouter from "@presenter/routes/post.route";
import { errorMiddleware } from "@presenter/middleware/error.middleware";
import { config } from "@infrastructure/lib/config";

import express from "express";
import helmet from "helmet";
import compress from "compression";
import cors from "cors";

export function setupExpress(app: express.Application) {
  app.use(express.json());
  app.use(helmet.xssFilter());
  app.use(helmet.noSniff());
  app.use(helmet.hidePoweredBy());
  app.use(helmet.frameguard({ action: "deny" }));
  app.use(compress());
  app.use(
    cors({
      origin: config.FRONTEND_ORIGIN,
    })
  );

  app.use("/api", postRouter);
  app.use(errorMiddleware);
}
