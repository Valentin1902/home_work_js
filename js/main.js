let storeInventory = {
  items: [
    { name: "Apple", quantity: 10, price: 2 },
    { name: "Banana", quantity: 5, price: 1 },
  ],
  totalValue: 0,
};

function addItem(inventory, newItem) {
  let itemExists = false;

  for (let item of inventory.items) {
    if (item.name === newItem.name) {
      // Змінив =, на ===, тому що потрбіна cувора рівність, щоб товар з назвою яка вже є, додавалась до кількості
      item.quantity += newItem.quantity;
      itemExists = true;
      break;
    }
  }
  // додав !, без нього буде додаватись товар, якщо вже існує
  if (!itemExists) {
    inventory.items.push(newItem);
  }

  calculateTotalValue(inventory);
}

function calculateTotalValue(inventory) {
  inventory.totalValue = 0;
  for (const item of inventory.items) {
    inventory.totalValue += item.quantity * item.price;
    // змінив item, на item.quantity, тому що, треба щоб кількість множилась на ціну
  }
}

addItem(storeInventory, { name: "Orange", quantity: 8, price: 1.5 });
addItem(storeInventory, { name: "Apple", quantity: 5, price: 2 });

console.log(storeInventory);
