import { StatusCodes } from "http-status-codes";
import { NextFunction, Response, Request } from "express";
import * as z from "zod";
import { APP_ERROR } from "@infrastructure/lib/const";

export function bodyValidator(schema: z.ZodObject<any, any>) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errorMessages = error.errors.map((issue: any) => ({
          message: `${issue.path.join(".")} -> ${issue.message}`,
        }));
        res.status(StatusCodes.BAD_REQUEST).json({
          error: APP_ERROR.BAD_REQUEST,
          details: errorMessages,
        });
      } else {
        res
          .status(StatusCodes.INTERNAL_SERVER_ERROR)
          .json({ error: APP_ERROR.INTERNAL_SERVER_ERROR });
      }
    }
  };
}
