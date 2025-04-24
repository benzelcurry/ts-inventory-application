import pool from "./pool";

import { Item } from "../types/inventory.types";

export async function getAllItems(): Promise<Item[]> {
  try {
    const { rows } = await pool.query("SELECT * FROM items");
    return rows as Item[];
  } catch (err) {
    console.log("error occurred in queries.ts");
    console.error(err);
    throw err;
  }
}
