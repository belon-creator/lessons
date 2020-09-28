'use strict';

// // ====== for =================

// console.log('before');

// for (let i = 0; i <= 10; i += 1) {
//   console.log(`count is ${i}`);
// }
// console.log('after');

// // =================

// let userInput = prompt('enter Your number');
// userInput = Number(userInput);
// let total = 0;

// for (let i = 0; i <= userInput; i += 1) {
//   total += i;
// }
// console.log(`total = ${total}`);

// // ========= while ============

// const number = 5;
// let totalCount = 0;
// let i = 0;

// while (i <= number) {
//   totalCount += i;
//   i += 1;
// }
// console.log(`total in while = ${totalCount}`);

// // ============= do while ================

// let inputOfUser;

// do {
//   inputOfUser = prompt('enter 8');

//   if (inputOfUser === null) {
//     break;
//   }
//   inputOfUser = Number(inputOfUser);
// } while (inputOfUser !== 8);

// ==============

let total = 0;

while (true) {
  let input = prompt('enter your number');

  if (input === null) {
    console.log('cancelled by user');
    break;
  }

  input = Number(input);
  const notANumber = Number.isNaN(input);

  if (notANumber) {
    console.log('you entered not a nuber, pass');
    continue;
  }

  total += input;
}

console.log(`total = ${total}`);
