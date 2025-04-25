import { getAllItems, createItem } from "../db/queries";
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
