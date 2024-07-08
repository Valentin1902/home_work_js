// ### Задача: Управління інвентарем магазину

// Умову задачі:

// У вас є об'єкт `storeInventory`, який представляє інвентар магазину. Кожен товар має назву, кількість та ціну. Вам потрібно написати функцію, яка додає новий товар до інвентарю, якщо його ще немає, або оновлює кількість, якщо товар вже є в інвентарі. Також функція повинна розраховувати загальну вартість всіх товарів в інвентарі.

// Ось код, але в ньому є помилка. Знайдіть її та виправте.

// ### Код з помилкою

```javascript
let storeInventory = {
  items: [
    { name: 'Apple', quantity: 10, price: 2 },
    { name: 'Banana', quantity: 5, price: 1 },
  ],
  totalValue: 0,
};

function addItem(inventory, newItem) {
  let itemExists = false;

  for (let item of inventory.items) {
    if (item.name = newItem.name) {
      item.quantity += newItem.quantity;
      itemExists = true;
      break;
    }
  }

  if (itemExists) {
    inventory.items.push(newItem);
  }

  calculateTotalValue(inventory);
}

function calculateTotalValue(inventory) {
  inventory.totalValue = 0;
  for (const item of inventory.items) {
    inventory.totalValue += item * item.price;
  }
}

// Додавання нового товару
addItem(storeInventory, { name: 'Orange', quantity: 8, price: 1.5 });

// Оновлення кількості існуючого товару
addItem(storeInventory, { name: 'Apple', quantity: 5, price: 2 });

console.log(storeInventory);
```;

// ### Ваша задача

// 1. Знайти помилку в коді.
// 2. Виправити її.
