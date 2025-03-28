import express, { Request, Response } from "express";
import helmet from "helmet";
import compress from "compression";
import cors from "cors";
import newsRouter from "./routes/news";

const app = express();

app.use(express.json());
app.use(helmet.xssFilter());
app.use(helmet.noSniff());
app.use(helmet.hidePoweredBy());
app.use(helmet.frameguard({ action: "deny" }));
app.use(compress());
app.use(cors());

app.use("/api", newsRouter);

export default app;
