import { Router, Request, Response } from "express";

import { getItems } from "../controllers/itemController";

const itemRouter = Router();

// Returns list of all items in database
itemRouter.get("/items", async (req: Request, res: Response) => {
  try {
    const items = await getItems();
    res.status(200).json(items);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default itemRouter;
