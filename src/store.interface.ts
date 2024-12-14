import { Product } from './constants/product';

export interface IStore {
  hasEnoughInventory(product: Product, quantity: number): boolean;
  removeInventory(product: Product, quantity: number): void;
  getInventory(product: Product): number;
}
