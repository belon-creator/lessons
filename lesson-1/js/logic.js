// console.log(5 && 10 && 15 && 20);

// const number = 20;
// const isInRange = number > 10 && number < 30;

// console.log(`Число ${number} попадает в отрезок от 10 до 30?`, isInRange);

const number = 50;
const isInRange = number < 10 || number > 30;
console.log(`Число ${number} попадает в отрезок до 10 от 30?`, isInRange);

const isOnline = true;
const isFriend = true;
const isDnd = false;

const canOpenChat = isOnline && isFriend && !isDnd;
console.log('canOpenChat', canOpenChat);

const subscription = 'pro';
const canAccesContent = subscription === 'pro' || subscription === 'vip';
console.log('canAccesContent: ', canAccesContent);
