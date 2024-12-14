import { Product } from '../constants/product';
import { Customer } from './customer';
import { Store } from './store';
import { IStore } from './store.interface';

describe('예제 2.1) 고전스타일 단위테스트 - purchase', () => {
  test('2.1) Purchase succeeds when enough inventory', () => {
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

  test('2.1) Purchase fails when not enough inventory', () => {
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

describe('예제 2.2) 런던스타일(mocking 사용) 단위테스트 - purchase', () => {
  let mockStore: jest.Mocked<IStore>;

  beforeEach(() => {
    mockStore = {
      hasEnoughInventory: jest.fn(),
      removeInventory: jest.fn(),
      getInventory: jest.fn(),
    };
  });

  test('2.2) Purchase succeeds when enough inventory', () => {
    // given
    mockStore.hasEnoughInventory.mockReturnValue(true);
    const customer = new Customer();

    // when
    const success = customer.purchase(mockStore, Product.SHAMPOO, 5);

    // then
    expect(success).toBe(true);
    expect(mockStore.hasEnoughInventory).toHaveBeenCalledWith(
      Product.SHAMPOO,
      5,
    );
    expect(mockStore.removeInventory).toHaveBeenCalledWith(Product.SHAMPOO, 5);
    expect(mockStore.removeInventory).toHaveBeenCalledTimes(1);
  });

  test('2.2) Purchase fails when not enough inventory', () => {
    // given
    mockStore.hasEnoughInventory.mockReturnValue(false);
    const customer = new Customer();

    // when
    const success = customer.purchase(mockStore, Product.SHAMPOO, 5);

    // then
    expect(success).toBe(false);
    expect(mockStore.hasEnoughInventory).toHaveBeenCalledWith(
      Product.SHAMPOO,
      5,
    );
    expect(mockStore.removeInventory).not.toHaveBeenCalled();
  });
});
