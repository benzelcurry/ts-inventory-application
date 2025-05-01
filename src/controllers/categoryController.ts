import { getAllCategories, createCategory } from "../db/queries";
import { Category } from "../types/inventory.types";

export async function getCategories(): Promise<Category[]> {
  return await getAllCategories();
}

export async function addCategory(category: string): Promise<void> {
  return await createCategory(category);
}
