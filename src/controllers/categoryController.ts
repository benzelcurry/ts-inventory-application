import {
  getAllCategories,
  createCategory,
  deleteCategory,
  updateCategory,
} from "../db/queries";
import { Category } from "../types/inventory.types";

export async function getCategories(): Promise<Category[]> {
  return await getAllCategories();
}

export async function addCategory(category: string): Promise<void> {
  return await createCategory(category);
}

export async function modifyCategory(
  category: string,
  id: string
): Promise<void> {
  return await updateCategory(category, id);
}

export async function removeCategory(id: string): Promise<void> {
  return await deleteCategory(id);
}
