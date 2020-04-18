const randomNumber = Math.floor(Math.random() * 1000) + 1;
console.log(randomNumber);

let userNumber;

do {
  userNumber = prompt('Enter number');

  if (randomNumber > Number(userNumber)) {
    console.log('More');
  } else if (randomNumber < Number(userNumber)) {
    console.log('Less');
  }

  if (userNumber === 'exit') {
    console.log('Exit');
    break;
  }
} while (Number(randomNumber) !== Number(userNumber));

console.log('good!');
