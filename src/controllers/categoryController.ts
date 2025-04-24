import { getAllCategories } from "../db/queries";
import { Category } from "../types/inventory.types";

export async function getCategories(): Promise<Category[]> {
  return await getAllCategories();
}
