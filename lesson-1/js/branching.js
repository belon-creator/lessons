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

// ============================================================

let cost;
const subscription = 'premium';

// if (subscription === 'free') {
//   cost = 0;
// } else if (subscription === 'pro') {
//   cost = 100;
// } else if (subscription === 'premium') {
//   cost = 500;
// } else {
//   console.log('invalid subscription');
// }

switch (subscription) {
  case 'free':
    cost = 0;
    break;

  case 'pro':
    cost = 100;
    break;

  case 'premium':
    cost = 500;
    break;

  default:
    console.log('invalid subscription');
}

console.log(cost);

// ===

const stars = 5;
let price = 0;

switch (stars) {
  case 1: {
    price = 20;
    break;
  }

  case 2:
  case 3: {
    price = 50;
    break;
  }

  case 4: {
    price = 70;
    break;
  }

  case 5: {
    price = 100;
    break;
  }
  default:
    console.log('there is no such type');
}
console.log(`Your hotel room costs ${price} $`);

// ========================================

const age = 20;
const type = age >= 18 ? 'adult' : 'child';
console.log(type);
