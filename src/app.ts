import express from "express";
import dotenv from "dotenv";

import itemRouter from "./routes/itemRouter";

dotenv.config();

const app = express();

app.use(itemRouter);

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.listen(PORT, () => {
  console.log(`Express listening on port ${PORT}.`);
});
