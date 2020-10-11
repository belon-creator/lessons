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
