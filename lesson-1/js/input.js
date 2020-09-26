const shouldRenew = confirm('Extend subscription');
console.log(shouldRenew);

let userInput = prompt('Enter 10 number');
userInput = Number(userInput);
console.log(typeof userInput);
console.log(userInput === 10);

// ===================================

const superValue = 'qwerty';
const userInput = prompt('Enter Your password');
const normalizedInput = userInput.toLowerCase();

console.log(superValue === normalizedInput);
