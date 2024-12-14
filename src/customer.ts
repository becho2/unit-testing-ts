import { Product } from './constants/product';
import { IStore } from './store.interface';

export class Customer {
  purchase(store: IStore, product: Product, quantity: number): boolean {
    if (store.hasEnoughInventory(product, quantity)) {
      store.removeInventory(product, quantity);
      return true;
    }
    return false;
  }
}
