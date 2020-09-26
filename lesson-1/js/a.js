const age = 30;
const FIRST_NAME = 'Alex';
const hobby = 'shipmodeling';
const isIt = true;

console.log(age);
console.log(FIRST_NAME);
console.log(hobby);
console.log(isIt);

console.log(typeof hobby);

console.log('before');
alert('Hello');
alert(`My name is ${FIRST_NAME}, I'm ${age} old, my hobby is ${hobby}`);
console.log('after');

// ===========================================================

const text = 'javascript';
const testMethod = text.length;
console.log(`word ${text} has ${testMethod} symbols `);

const capitalLetters = text.toUpperCase();
console.log(capitalLetters);
