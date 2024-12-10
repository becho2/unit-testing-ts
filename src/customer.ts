import { Product } from './constants/product';
import { Store } from './store';

export class Customer {
  purchase(store: Store, product: Product, quantity: number): boolean {
    const inventory = store.getInventory(product);

    if (inventory < quantity) {
      return false;
    }

    store.removeInventory(product, quantity);

    return true;
  }
}
