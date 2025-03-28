import { APP_ERROR } from "@lib/const";
import { NextFunction, Request, Response } from "express";

export function errorMiddleware(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log(err.stack);
  res.status(500).json({ message: APP_ERROR.INTERNAL_SERVER_ERROR });
}
