import pool from "./pool";

import { Item, Category } from "../types/inventory.types";

// ITEMS QUERIES
// -----------------------------------------------

// Fetch all items
export async function getAllItems(): Promise<Item[]> {
  const { rows } = await pool.query("SELECT * FROM items");
  return rows as Item[];
}

// Create a new item
export async function createItem(
  item: string,
  category_id: string
): Promise<void> {
  await pool.query("INSERT INTO items (item, category_id) VALUES ($1, $2)", [
    item,
    category_id,
  ]);
}

// CATEGORIES
// -----------------------------------------------

// Fetch all categories
export async function getAllCategories(): Promise<Category[]> {
  const { rows } = await pool.query("SELECT * FROM categories");
  return rows as Category[];
}
