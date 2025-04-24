import { Router, Request, Response } from "express";

const itemRouter = Router();

// Returns list of all items in database
itemRouter.get("/items", async (req: Request, res: Response) => {
  try {
    // add code from controller for fetching all usernames
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
