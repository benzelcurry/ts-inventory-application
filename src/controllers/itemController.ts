import { getAllItems } from "../db/queries";
import { Item } from "../types/inventory.types";

export async function getItems(): Promise<Item[]> {
  return await getAllItems();
}
