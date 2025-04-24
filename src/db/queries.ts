import pool from "./pool";

import { Item } from "../types/inventory.types";

export async function getAllItems(): Promise<Item[]> {
  const { rows } = await pool.query("SELECT * FROM items");
  return rows as Item[];
}
