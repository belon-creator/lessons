const firstName = 'Mango';
const lastName = 'Qweqwe';
const room = 75;
const type = 'VIP';
const message = `Guest ${firstName} ${lastName} is book ${room} room is ${type}`;

console.log(message);

const superValue = 'qwerty';
const userInput = prompt('Enter your password');
console.log('userInput before: ', userInput);

const normalisedInput = userInput.toLowerCase();
console.log('userInput after: ', userInput);
console.log('normalisedInput: ', normalisedInput);

console.log(superValue === normalisedInput);
