import { getAllItems, createItem, updateItem } from "../db/queries";
import { Item } from "../types/inventory.types";

export async function getItems(): Promise<Item[]> {
  return await getAllItems();
}

export async function addItem(
  item: string,
  category_id: string
): Promise<void> {
  return await createItem(item, category_id);
}

export async function modifyItem(
  item: string,
  category_id: string,
  id: string
): Promise<void> {
  return await updateItem(item, category_id, id);
}
