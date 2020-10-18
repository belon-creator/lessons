const add = function (a, b) {
  console.log('a: ', a);
  console.log('b: ', b);

  const result = a + b;

  return result;
};

const r1 = add(3, 5);
console.log(r1);

const r2 = add(8, 88);
console.log(r2);

const r3 = add(777, 7);
console.log(r3);

// =====================================

const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
const numbers = [1, 2, 3, 4, 5];

const logItems = function (items) {
  for (const item of items) {
    console.log(item);
  }
};

logItems(friends);
logItems(numbers);

// ============================================

const friendsArr = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
const nameToFind1 = 'Poly';

// const findFriend = function (allFriends, name) {
//   console.log('allFriends ', allFriends);
//   console.log('name ', name);

//   for (const friend of allFriends) {
//     if (name === friend) {
//       return 'find this friend';
//     }
//   }
//   return 'not find';
// };

// const res1 = findFriend(friendsArr, 'Poly');
// console.log(res1);

// const res2 = findFriend(friendsArr, 'Chelsy');
// console.log(res2);

const findFriend = function (allFriends, name) {
  const isInFriends = allFriends.includes(name);

  return isInFriends ? 'find this friend' : 'not find';
};

const res1 = findFriend(friendsArr, 'Poly');
console.log(res1);

const res2 = findFriend(friendsArr, 'Chelsy');
console.log(res2);

// =============================================

const slugify = function (string) {
  const words = string.toLowerCase().split(' ');
  const slug = words.join('-');

  return slug;
};

const articles = [
  'Top 10 benefits of React framework',
  'Data Protection and protecting your users in light of GDPR',
  'How to Find Unique and Memorable Name for Your Product',
  'Build Mean Stack Application',
  '11 fruitful resources to improve Javascript knowledge',
];
console.log(articles);

const slugs = [];

for (const article of articles) {
  const slug = slugify(article);
  slugs.push(slug);
}

console.log(slugs);

// ==================================================

const cards = ['card-1', 'card-2', 'card-3', 'card-4', 'card-5'];
console.log(cards);

const removeCard = function (allCards, cardToRemove) {
  const index = allCards.indexOf(cardToRemove);

  if (index === -1) {
    console.log('there is no such card');
    return;
  }
  allCards.splice(index, 1);
};

removeCard(cards, 'card-32');
console.log(cards);

removeCard(cards, 'card-5');
console.log(cards);

const addCard = function (allCards, cardToInsert, index) {
  allCards.splice(index, 0, cardToInsert);
};

addCard(cards, 'card-100', 2);
console.log(cards);

// ========================================

const arr1 = [67, -3, 45, 3, 78, 90, 2];
const arr2 = [67, 79, 45, 3, 2];

const findSmallestNumber = function (items) {
  let smallestNumber = items[0];

  for (let i = 1; i < items.length; i += 1) {
    if (items[i] < smallestNumber) {
      smallestNumber = items[i];
    }
  }
  return smallestNumber;
};

console.log(findSmallestNumber(arr1));
console.log(findSmallestNumber(arr2));

// ======================================

const addArgs = function (...args) {
  console.log(args);
  let total = 0;

  for (const arg of args) {
    total += arg;
  }
  return total;
};

console.log(addArgs(1, 2, 3));
console.log(addArgs(1, 2, 3, 4, 5, 6, 7, 8));

// ============================

const posts = ['post-1', 'post-2', 'post-3', 'post-4'];
const tag = '#jqueryrules';

const addTag = function (tag, ...args) {
  const postWithTag = [];

  for (const arg of args) {
    postWithTag.push(`${arg}${tag}`);
  }
  return postWithTag;
};

console.log(addTag('#jqueryrules', 'post-1', 'post-2'));
console.log(addTag('#react', 'post-1', 'post-2', 'post-3'));
console.log(addTag('#redux', 'post-1', 'post-2', 'post-3', 'post-4'));
