'use strict';

// task1

const name = 'Генератор защитного поля';
let price = 1000;

console.log(`Выбран ${name}, цена за штуку ${price} кредитов`);

price = 2000;

console.log(`Выбран ${name}, цена за штуку ${price} кредитов`);

// task2

const total = 100;
const ordered = 50;

if (ordered > total) {
  console.log('На складе недостаточно твоаров!');
} else {
  console.log('Заказ оформлен, с вами свяжется менеджер');
}

// task3

const ADMIN_PASSWORD = 'jqueryismyjam';
let message = prompt('Enter Your password');

if (message === null) {
  message = 'Отменено пользователем!';
} else if (message === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}
alert(message);

// task4

const credits = 23500;
const pricePerDroid = 3000;
const userInput = prompt('сколько дроидов вы хотите купить?');
const totalPrice = Number(userInput) * pricePerDroid;

if (userInput === null) {
  console.log('Отменено пользователем!');
} else if (totalPrice > credits) {
  console.log('Недостаточно средств на счету!');
} else totalPrice <= credits;
console.log(
  `Вы купили ${userInput} дроидов, на счету осталось ${
    credits - totalPrice
  } кредитов.`
);

// task5

let deliveryCountry = prompt('enter Your country');
deliveryCountry.toLowerCase();
let priceForDelivery;

switch (deliveryCountry) {
  case 'китай':
    priceForDelivery = 100;
    console.log(
      `Доставка в ${deliveryCountry} будет стоить ${priceForDelivery} кредитов`
    );
    break;

  case 'чили':
    priceForDelivery = 250;
    console.log(
      `Доставка в ${deliveryCountry} будет стоить ${priceForDelivery} кредитов`
    );
    break;

  case 'австралия':
    priceForDelivery = 170;
    console.log(
      `Доставка в ${deliveryCountry} будет стоить ${priceForDelivery} кредитов`
    );
    break;

  case 'индия':
    priceForDelivery = 180;
    console.log(
      `Доставка в ${deliveryCountry} будет стоить ${priceForDelivery} кредитов`
    );
    break;

  case 'ямайка':
    priceForDelivery = 120;
    console.log(
      `Доставка в ${deliveryCountry} будет стоить ${priceForDelivery} кредитов`
    );
    break;

  default:
    console.log('В вашей стране доставка не доступна');
    break;
}

// task6

let totalCount = 0;

do {
  let inputUser = prompt('enter Your number');
  if (inputUser === null) {
    break;
  }

  inputUser = Number(inputUser);

  totalCount += inputUser;
} while (true);

console.log(`total count of numbers is ${totalCount}`);
