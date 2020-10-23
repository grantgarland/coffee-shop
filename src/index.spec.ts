import CoffeeShop, { Barista, Beverage, Menu } from "./index";

jest.useFakeTimers();
describe("Coffee Shop", () => {
  let shop: CoffeeShop;
  beforeEach(() => {
    shop = new CoffeeShop();
  });
  it("should exist", () => {
    expect(shop).toBeDefined();
  });

  it("should have a Menu, Barista, and Counter", () => {
    expect(shop.menu).toBeDefined();
    expect(shop.barista).toBeDefined();
    expect(shop.beverageCounter).toBeDefined();
  });

  it("should add customer orders to queue", () => {
    const shopQueue = shop.ticketQueue;
    expect(shopQueue).toHaveLength(0);

    const order = Beverage.AULAIT;
    shopQueue.push(order);
    expect(shopQueue).toHaveLength(1);
    expect(shopQueue.pop()).toBe(Beverage.AULAIT);
  });

  it("should open for business", () => {
    const shopQueue = shop.ticketQueue;
    expect(shopQueue).toHaveLength(0);

    const order = Beverage.AULAIT;
    shopQueue.push(order);
    expect(shopQueue).toHaveLength(1);
    expect(shopQueue.pop()).toBe(Beverage.AULAIT);
  });

  describe("Menu", () => {
    let menu: Menu;
    beforeEach(() => {
      menu = shop.menu;
    });
    it("should contain 3 beverages", () => {
      expect(Object.keys(menu).length).toBe(3);
    });

    it("aulait should take 4 seconds to make", () => {
      expect(menu.aulait).toBe(4);
    });

    it("cappucinno should take 10 seconds to make", () => {
      expect(menu.cappuccino).toBe(10);
    });

    it("espresso should take 15 seconds to make", () => {
      expect(menu.espresso).toBe(15);
    });
  });

  describe("Barista", () => {
    let barista: Barista;
    let shopQueue: Array<Beverage>;
    let order: Beverage;

    beforeEach(() => {
      barista = shop.barista;
      shopQueue = shop.ticketQueue;
      order = Beverage.AULAIT;
      shopQueue.push(order);
    });

    it("should make beverages from the ticketQueue", () => {
      expect(shopQueue).toHaveLength(1);
      barista.makeBeverage();

      jest.runAllTimers();
      expect(setTimeout).toHaveBeenCalledTimes(1);
      expect(shopQueue).toHaveLength(0);
    });
  });
});
