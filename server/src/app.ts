import express from "express";
import helmet from "helmet";
import compress from "compression";
import cors from "cors";
import newsRouter from "@infrastructure/routes/news.route";
import { errorMiddleware } from "@infrastructure/middleware/error.middleware";

const app = express();

app.use(express.json());
app.use(helmet.xssFilter());
app.use(helmet.noSniff());
app.use(helmet.hidePoweredBy());
app.use(helmet.frameguard({ action: "deny" }));
app.use(compress());
app.use(cors());

app.use("/api", newsRouter);
app.use(errorMiddleware);

export default app;
