import type { Express } from "express";
import express from "express";
import path from "path";
import * as routes from "./routes/index.cjs";

const host: string = process.env["HOST"] ?? "http://localhost";
const port: string = process.env["PORT"] ?? "8080";

const app: Express = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
routes.register(app);

app.listen(port, () => {
  console.log(`server started at ${host}:${port}`);
});
