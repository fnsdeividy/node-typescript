import express from "express";
import { categoriesRoute } from "./routes/categories.routes";
import { specificationsRouter } from "./routes/specifications.routes";

const app = express();

app.use(express.json());

app.use("/categories", categoriesRoute);
app.use("/specifications", specificationsRouter);

app.listen(3333, () => console.log("listen on port: 3333"));
