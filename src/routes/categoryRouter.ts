import { Router, Request, Response } from "express";

import { getItems } from "../controllers/itemController";
import { getCategories } from "../controllers/categoryController";

const categoryRouter = Router();

// Returns list of all items in database
categoryRouter.get("/categories", async (req: Request, res: Response) => {
  try {
    const categories = await getCategories();
    const items = await getItems();
    res.render("categories", { categories, items });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default categoryRouter;
