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

const Countries = {
  CHINA: 100,
  CHILI: 250,
  AUSTRALIA: 170,
  INDIA: 80,
  YAMAICA: 120,
};

const key = prompt('Enter your country');
console.log(key);
console.log(Countries[key.toUpperCase()]);
alert(
  `Доставка в ${key} будет стоить ${Countries[key.toUpperCase()]} кредитов`
);

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
