import dotenv from "dotenv";
import express from "express";
import path from "path";
import * as routes from "./routes";

dotenv.config();

const host: string = <string>(process.env.HOST) || <string>(process.env.LOCAL_TEST_HOST);
const port: string = <string>(process.env.PORT) || <string>(process.env.LOCAL_TEST_PORT);

const app: express.Application = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
routes.register(app);

app.listen(port, () => {
    console.log(`server started at ${host}:${port}`);
});
