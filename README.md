## To run the Shop:
Change the following value in `index.ts from `false` to `true`

```js
public SHOP_OPEN: boolean = false;
``` 


The Coffee Shop

In this exercise you’ll be recreating the functionality of a coffee shop.

The Menu
Here are three menu items with their corresponding creation times:
Cafe Au Lait - 4 seconds
Cappuccino - 10 seconds
Expresso - 15 seconds

When you select an item on the menu, it immediately gets added to the ticketing system.

Multiple items can be tapped and queued up for the barista to do.

The Barista
The barista will start working on the next ticket if he’s not already working on another task.

There is only one barista for this particular coffee shop

The Coffee Counter
When the barista is done preparing the item, it gets put on the coffee counter and waits for a person to pick it up.

Drinks are picked up every 3 seconds on average.
