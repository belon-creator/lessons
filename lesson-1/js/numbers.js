const value = '555';
const number = Number(value);
console.log(typeof number);

const blockWidth = '300px';
const width = Number.parseInt(blockWidth);
console.log(width);

// const blockWidth = '300.5px';
// const width = Number.parseFloat(blockWidth);
// console.log(width);

let userNumber = prompt('Enter number');
userNumber = Number(userNumber);

let power = prompt('Enter power');
power = Number(power);

console.log(userNumber);
console.log(power);

const result = Math.pow(userNumber, power);
console.log(result);

// ==============================================================

const valueA = '8';
console.log(Number(valueA));
console.log(typeof Number(valueA));
