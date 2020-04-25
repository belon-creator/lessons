// ========================================
/* Создание */
// ========================================
// const arr1 = [];
// const arr2 = [1, 2, 3, 4, 5, 'qweqwe'];
// const arr3 = Array(1, 2, 3, 4, 5);
// const arr4 = Array(10);

// console.log(arr1);
// console.log(arr2);
// console.log(arr3);
// console.log(arr4);
// console.log(arr2[5]);

// ========================================
/* Массивы */
// ========================================

// const arr = ['qwejm', 'asdjk', 'zxcvl', 'zaq'];

// const arr1 = arr;
// console.log(arr);

// arr[2] = 'azsxdcfv';
// console.log(arr1);
// console.log(arr);

// for (let i = 0; i < arr.length; i += 1) {
//   console.log(arr[i]);
// }
// console.log('=================================');
// for (let i = arr.length - 1; i >= 0; i -= 1) {
//   console.log(arr[i]);
// }

// ========================================
/* Цикл for...of */
// ========================================
// const arr = ['Bobby', 'John', 'Chris', 'Admin'];

// for (const name of arr) {
//   if (name === 'John') {
//     // break;
//     continue;
//   }
//   console.log(name);
// }

// ========================================
/* Массивы - Многомерные массивы */
// ========================================
// const arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// // console.log(arr);
// for (let i = 0; i < arr.length; i += 1) {
//   console.log(arr[i]);
//   const innerArray = arr[i];

//   for (let j = 0; j < innerArray.length; j += 1) {
//     console.log(innerArray[j]);
//   }
// }

// ========================================
/* Массивы - Проверка множественных условий с includes() */
// ========================================
const privilegedRoles = ['Admin', 'Director', 'supervisor'];
const userRole = 'user';

if (privilegedRoles.includes(userRole)) {
  console.log('Show extra panel');
} else {
  console.log('simple panel');
}

// ========================================
/* Min, Max */
// ========================================
const arr = [4, 1, 8, 2, 5, -400, 100];
let min = arr[0]; // 4
let max = arr[0]; // 4

// eslint-disable-next-line
for (const num of arr) {
  if (num < min) {
    min = num;
  }
  if (num > max) {
    max = num;
  }
}

console.log('Minimum:', min);
console.log('Maximum:', max);
console.log(arr.sort((a, b) => a - b));

// ========================================
/* https://learn.javascript.ru/array#tasks */
// ========================================

const styles = ['Джаз', 'Блюз'];
console.log(styles);

styles.push('Рок-н-ролл');
console.log(styles);

styles.splice(1, 1, 'Классика');
console.log(styles);

console.log(styles.shift());
console.log(styles);

styles.splice(0, 0, 'Рэп', 'Регги');
console.log(styles);

// ========================================
/* поиск*/
// ========================================

const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
const nameToFind = 'Poly';
let message = 'There is no such friend';

for (const friend of friends) {
  if (nameToFind === friend) {
    message = 'Your friend is here';
  }
}

console.log(message);

// ========================================
/* slugs*/
// ========================================

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

const slugs = [];

for (const article of articles) {
  const slug = slugify(article);
  slugs.push(slug);
}

console.log(slugs);

// ========================================
/* add tag to string*/
// ========================================

const posts = ['post-1', 'post-2', 'post-3', 'post-4'];
const tag = '#jqueryrules';

const postsWithTag = [];

for (const post of posts) {
  postsWithTag.push(`${post}${tag}`);
}

console.log(postsWithTag);

// const addTag = function (tag, ...args) {
//   const postsWithTag = [];

//   for (const arg of args) {
//     postsWithTag.push(`${arg}${tag}`);
//   }
// };
