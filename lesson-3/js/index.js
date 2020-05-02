'use strict';

// ========================================
/* Создание объекта */
// ========================================

// const human = {
//   name: 'Alex',
//   age: 30,
// };

// console.log(human);

// ========================================
/* Доступ к свойствам */
// ========================================

// const human = {
//   name: 'Alex',
//   age: 30,
// };

// console.log(human);

// human.age = 31;
// console.log(human);

// ========================================

// function createHuman(name, age) {
//   return {
//     name,
//     age,
//   };
// }

// console.log(createHuman('qwe', 20));

// ========================================

const menu = {
  widh: 200,
  height: 300,
  title: 'Menu',
};
console.log(menu);

multiplyNumeric(menu);
console.log(menu);

function multiplyNumeric(obj) {
  const keys = Object.keys(obj);

  keys.forEach((key) => {
    obj[key] = typeof obj[key] === 'number' ? obj[key] * 2 : obj[key];
  });
}

// ========================================

// const Countries = {
//   CHINA: 100,
//   CHILI: 250,
//   AUSTRALIA: 170,
//   INDIA: 80,
//   YAMAICA: 120,
// };

// const key = prompt('Enter your country');
// console.log(key);
// console.log(Countries[key.toUpperCase()]);
// alert(
//   `Доставка в ${key} будет стоить ${Countries[key.toUpperCase()]} кредитов`
// );

// ========================================

function sayHello(human) {
  const { name, age } = human;

  console.log(`Hello my name is ${name} i ${age} old`);
}

const human = {
  name: 'qwe',
  age: 20,
};

sayHello(human);

// =========================================

const feedback = {
  good: 5,
  neutral: 10,
  bad: 3,
};

// Object.keys()
// const keys = Object.keys(feedback);
// console.log(keys.length);

// let totalFeedback = 0;

// for (const key of keys) {
//   console.log(key);
//   console.log(feedback[key]);

//   totalFeedback += feedback[key];
// }

// console.log('Total: ', totalFeedback);

// --------------------

// Object.values()
const values = Object.values(feedback);
console.log(values);

let totalFeedback = 0;

for (const value of values) {
  console.log(value);

  totalFeedback += value;
}

console.log('Total: ', totalFeedback);

// ========================================

const friends = [
  { name: 'Mango', online: false },
  { name: 'Kiwi', online: true },
  { name: 'Poly', online: true },
  { name: 'Ajax', online: false },
];

console.table(friends);

const findFriendByName = function (allFriends, name) {
  for (const friend of friends) {
    console.log(friend);

    if (friend.name === name) {
      return 'find';
    }
  }
  return 'not find';
};

console.log(findFriendByName(friends, 'Poly'));
console.log(findFriendByName(friends, 'Chelsy'));

//

const getAllNames = function (allFriends) {
  const names = [];

  for (const friend of allFriends) {
    names.push(friend.name);
  }
  return names;
};
console.log(getAllNames(friends));

//

const getOnlineFriends = function (allFriends) {
  const names = [];

  for (const friend of allFriends) {
    console.log(friend);

    if (friend.online) {
      names.push(friend.name);
    }
  }
  return names;
};
console.log(getOnlineFriends(friends));

const getOfflineFriends = function (allFriends) {
  const names = [];

  for (const friend of allFriends) {
    console.log(friend);

    if (!friend.online) {
      names.push(friend.name);
    }
  }
  return names;
};
console.log(getOfflineFriends(friends));

// =========================================

console.log('================CART=======================');

//  { name: '🍎', price: 50 }
//   { name: '🍇', price: 70 }
//   { name: '🍋', price: 60 }
//   { name: '🍓', price: 110 }

const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    for (const item of this.items) {
      console.log(item);
      if (item.name === product.name) {
        console.log('уже выбрано, добавляем кол-во');
        item.quantity += 1;
        return;
      }
    }
    console.log('новый продукт, добавлен в корзину');
    product.quantity = 1;
    this.items.push(product);
  },
  remove(productName) {
    for (let i = 0; i < this.items.length; i += 1) {
      const item = this.items[i];
      if (productName === item.name) {
        console.log('удаляем');
        console.log('индекс для удаления: ', i);
        this.items.splice(i, 1);
      }
    }
  },
  clear() {
    this.items = [];
  },
  countTotalPrice() {
    let total = 0;
    for (const item of this.items) {
      total += item.price * item.quantity;
    }
    return total;
  },
  increaseQuantity(productName) {
    for (const item of this.items) {
      if (item.name === productName) {
        item.quantity += 1;
      }
    }
  },
  decreaseQuantity(productName) {
    for (const item of this.items) {
      if (item.name === productName) {
        if (item.quantity - 1 === 0) {
          this.remove(productName);
          return;
        }
        item.quantity -= 1;
      }
    }
  },
};

console.table(cart.getItems());
cart.add({ name: '🍎', price: 50 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍋', price: 60 });
console.table(cart.getItems());

cart.increaseQuantity('🍎');
console.table(cart.getItems());

cart.decreaseQuantity('🍋');
console.table(cart.getItems());

console.log('Total: ', cart.countTotalPrice());
