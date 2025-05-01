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

// Update an item
export async function updateItem(
  name: string,
  category_id: string,
  id: string
): Promise<void> {
  await pool.query(
    "UPDATE items SET item = ($1), category_id = ($2) WHERE id = ($3)",
    [name, category_id, id]
  );
}

// CATEGORIES
// -----------------------------------------------

// Fetch all categories
export async function getAllCategories(): Promise<Category[]> {
  const { rows } = await pool.query("SELECT * FROM categories");
  return rows as Category[];
}

// Add a category
export async function createCategory(category: string): Promise<void> {
  await pool.query("INSERT INTO categories (category) VALUES ($1)", [category]);
}
