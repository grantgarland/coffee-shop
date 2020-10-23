require("source-map-support").install();

export type Menu = {
  [beverage in Beverage]: number;
};

export enum Beverage {
  AULAIT = "aulait",
  CAPPACCINO = "cappuccino",
  ESPRESSO = "espresso"
}

export interface Barista {
  makeBeverage: () => void;
}
export default class CoffeeShop {
  constructor() {
    this.openShop();
  }
  public SHOP_OPEN: boolean = false;
  public ticketQueue: Array<Beverage> = [];
  public beverageCounter: Array<Beverage> = [];
  public menu: Menu = {
    aulait: 4,
    cappuccino: 10,
    espresso: 15
  };
  public barista: Barista = {
    makeBeverage: () => {
      const customerBeverage = this.ticketQueue.shift();
      console.log(`BARISTA: making ${customerBeverage}`);
      setTimeout(() => {
        console.log(`BARISTA: completed ${customerBeverage}`);
        this.beverageCounter.push(customerBeverage);
      }, this.menu[customerBeverage]);
    }
  };

  public openShop = () => {
    while (this.SHOP_OPEN) {
      let customerOrders = [
        Beverage.AULAIT,
        Beverage.CAPPACCINO,
        Beverage.ESPRESSO
      ];
      // Barista begins shift
      if (this.ticketQueue.length) {
        this.barista.makeBeverage();
      }
      // Customers place beverage orders every 3 seconds
      setInterval(() => {
        // cycle through order menu
        const customerOrder = customerOrders[0];
        console.log(`ORDER: customer ordered ${customerOrder}`);

        this.ticketQueue.push(customerOrder);
        customerOrders.shift();
        customerOrders.push(customerOrder);
      }, 3000);
      // Drinks are picked up by customers
      setInterval(() => {
        console.log(`ORDER: customer picked up ${this.beverageCounter[0]}`);
        this.beverageCounter.length && this.beverageCounter.shift();
      }, 3000);
    }
  };
}
