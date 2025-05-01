import { Router, Request, Response } from "express";

import { getItems } from "../controllers/itemController";
import { addCategory, getCategories } from "../controllers/categoryController";

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

// Adds a new category to the table
categoryRouter.post("/categories", async (req: Request, res: Response) => {
  try {
    await addCategory(req.body.category);
    res.status(200).json("Category Added Successfully");
  } catch (err) {
    console.error(err);
    res.status(500).json("Internal Server Error");
  }
})

export default categoryRouter;
