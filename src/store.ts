import { Product } from './constants/product';
import { IStore } from './store.interface';

export class Store implements IStore {
  private inventory: Map<Product, number> = new Map();

  addInventory(product: Product, quantity: number): void {
    const currentQuantity = this.inventory.get(product) || 0;
    this.inventory.set(product, currentQuantity + quantity);
  }

  getInventory(product: Product): number {
    return this.inventory.get(product) || 0;
  }

  hasEnoughInventory(product: Product, quantity: number): boolean {
    const currentQuantity = this.inventory.get(product) || 0;
    return currentQuantity >= quantity;
  }

  removeInventory(product: Product, quantity: number): void {
    const currentQuantity = this.inventory.get(product) || 0;
    this.inventory.set(product, currentQuantity - quantity);
  }
}
