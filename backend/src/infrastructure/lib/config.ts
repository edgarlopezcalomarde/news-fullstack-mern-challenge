import "dotenv/config";

export const config = {
  PORT: process.env.PORT,
  MONGOOSE_URL: process.env.MONGOOSE_URL,
  FRONTEND_ORIGIN: process.env.FRONTEND_ORIGIN,
};
