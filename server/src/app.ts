import express, { Request, Response } from "express";
import helmet from "helmet";
import compress from "compression";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(helmet.xssFilter());
app.use(helmet.noSniff());
app.use(helmet.hidePoweredBy());
app.use(helmet.frameguard({ action: "deny" }));
app.use(compress());
app.use(cors());

app.get("/", (_req: Request, res: Response) => {
  res.json({
    message: "Test1",
  });
});

export default app;
