import pool from "./pool";

import { Item, Category } from "../types/inventory.types";

// Fetch all items
export async function getAllItems(): Promise<Item[]> {
  const { rows } = await pool.query("SELECT * FROM items");
  return rows as Item[];
}

// Fetch all categories
export async function getAllCategories(): Promise<Category[]> {
  const { rows } = await pool.query("SELECT * FROM categories");
  return rows as Category[];
}
