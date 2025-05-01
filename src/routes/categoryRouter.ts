import { Router, Request, Response } from "express";

import { getItems } from "../controllers/itemController";
import {
  addCategory,
  getCategories,
  modifyCategory,
  removeCategory,
} from "../controllers/categoryController";

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

// Deletes a category from the table
categoryRouter.post(
  "/categories/delete",
  async (req: Request, res: Response) => {
    try {
      // This would typically be locked behind authentication, but this is just for demonstrative purposes
      if (req.body.password != "ADMINDELETE") {
        res.status(400).json("Invalid Password Provided");
      } else {
        await removeCategory(req.body.id);
        res.status(200).json("Category Successfully Deleted");
      }
    } catch (err) {
      console.error(err);
      res.status(500).json("Internal Server Error");
    }
  }
);

// Updates a category
categoryRouter.post(
  "/categories/update",
  async (req: Request, res: Response) => {
    try {
      await modifyCategory(req.body.category, req.body.id);
      res.status(200).json("Category Modified Successfully");
    } catch (err) {
      console.error(err);
      res.status(500).json("Internal Server Error");
    }
  }
);

// Adds a new category to the table
categoryRouter.post("/categories", async (req: Request, res: Response) => {
  try {
    await addCategory(req.body.category);
    res.status(200).json("Category Added Successfully");
  } catch (err) {
    console.error(err);
    res.status(500).json("Internal Server Error");
  }
});

export default categoryRouter;
