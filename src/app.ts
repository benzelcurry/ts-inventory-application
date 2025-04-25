import express from "express";
import dotenv from "dotenv";

import itemRouter from "./routes/itemRouter";
import categoryRouter from "./routes/categoryRouter";

import path from "path";

dotenv.config();

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(itemRouter);
app.use(categoryRouter);

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.listen(PORT, () => {
  console.log(`Express listening on port ${PORT}.`);
});
