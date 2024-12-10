import { Product } from './constants/product';

export class Store {
  private store: { product: Product; quantity: number }[];
  constructor() {
    this.store = [];
  }

  addInventory(product: Product, quantity: number) {
    const inventory = this.store.find((item) => item.product === product);
    if (inventory) {
      inventory.quantity += quantity;
    } else {
      this.store.push({ product, quantity });
    }
  }

  getInventory(product: Product): number {
    const inventory = this.store.find((item) => item.product === product);
    return inventory ? inventory.quantity : 0;
  }

  removeInventory(product: Product, quantity: number) {
    const inventory = this.store.find((item) => item.product === product);
    if (inventory) {
      inventory.quantity -= quantity;
    }
  }
}
