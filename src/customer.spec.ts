import { Product } from './constants/product';
import { Customer } from './customer';
import { Store } from './store';

describe('purchase', () => {
  test('Purchase succeeds when enough inventory', () => {
    // given
    const store = new Store();
    store.addInventory(Product.SHAMPOO, 10);
    const customer = new Customer();

    // when
    const success: boolean = customer.purchase(store, Product.SHAMPOO, 5);

    // then
    expect(success).toBe(true);
    expect(store.getInventory(Product.SHAMPOO)).toBe(5); // 10개에서 5개 구매, 5개로 감소
  });

  test('Purchase fails when not enough inventory', () => {
    // given
    const store = new Store();
    store.addInventory(Product.SHAMPOO, 10);
    const customer = new Customer();

    // when
    const success: boolean = customer.purchase(store, Product.SHAMPOO, 15);

    // then
    expect(success).toBe(false);
    expect(store.getInventory(Product.SHAMPOO)).toBe(10); // 변화 없음
  });
});
