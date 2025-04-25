import { Router, Request, Response } from "express";

import { getItems, addItem } from "../controllers/itemController";
import { getCategories } from "../controllers/categoryController";

const itemRouter = Router();

// Returns list of all items in database
itemRouter.get("/items", async (req: Request, res: Response) => {
  try {
    const items = await getItems();
    const categories = await getCategories();
    res.render("items", { items, categories });
    // res.status(200).json(items);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Adds a new item to the items table
itemRouter.post("/items", async (req: Request, res: Response) => {
  try {
    await addItem(req.body.item, req.body.category);
    res.status(200).json("Item added successfully.");
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default itemRouter;
