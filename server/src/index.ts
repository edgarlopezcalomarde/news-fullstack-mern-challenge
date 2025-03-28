import app from "./app";
import { config } from "./lib/config";

try {
  app.listen(config.PORT, () => {
    console.log(`Server running at http://localhost:${config.PORT}`);
  });
} catch (err) {
  console.log(err);
  process.exit(1);
}

process.on("uncaughtException", (e) => {
  console.log(e);
  process.exit(0);
});
