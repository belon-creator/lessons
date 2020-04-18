// let balance = 150000;
// const payment = 2000;

// console.log(`общая стоимость заказа ${payment} грн`);

// if (balance >= payment) {
//   balance = balance - payment;
//   console.log('ok');
//   console.log(`остаток ${balance}`);
// } else {
//   console.log('not enough money');
// }

const totalExpenses = 20000;
const payment = 100;
let discount = 0;

if (totalExpenses >= 100 && totalExpenses < 1000) {
  discount = 0.02;
  console.log('minimal discount 2%');
} else if (totalExpenses >= 1000 && totalExpenses < 5000) {
  discount = 0.05;
  console.log('middle discount 5%');
} else if (totalExpenses >= 5000) {
  discount = 0.1;
  console.log('max discount 10%');
} else {
  console.log('you have not discount');
}

const finalAmmount = payment - payment * discount;
console.log(finalAmmount);
console.log(
  `draw up your order, total ${finalAmmount} with ${discount * 100}% discount`
);
