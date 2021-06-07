// const number = 2;
// const number = new Number('2')
// const number = new Number(37);
// const number = 90000000;
// const number = 9e7; // 9 * 10000000;
// const number = 0.0004; 
// const number = 1e-4; // 1 / 10000
// const number = 1 / 10000; // 1 / 10000
// const number = 1e350;
// const number = 1e-400;
// const number2 = 200 ** 200
// const number = 200n ** 200n

// console.log(number)
// console.log(number2)

// let number = 22.323232322
// console.log(Math.floor(number)) // to <
// console.log(Math.round(number)) // to nearest
// console.log(Math.ceil(number)) // to >
// console.log(Math.trunc(number)) // remove all numbers after .
// console.log(number) 

// const number = 0.1;
// const number2 = 0.2;
// const number3 = 0.3;
// const sum = +(number + number2).toFixed(1);
// const sum = +(number * 10 + number2 * 10) / 10;
// console.log(sum);
// console.log(number3 === sum);

// console.log(255..toString(16).repeat(3))
// const number  = 12.53232; 
// const inf = Number.POSITIVE_INFINITY;
// const inf2 = Number.NEGATIVE_INFINITY;
// console.log(inf === inf);
// console.log(inf2 === inf2);
// console.log((inf - inf) === 0);
// console.log((-inf2 - -inf2) === 0);
// const nan1 = NaN;
// console.log(nan1 === nan1);
// console.log(isNaN(nan1))
// console.log(Object.is(nan1, NaN));
// console.log(Object.is(nan1, NaN));
// console.log(0 === -0);
// console.log(Object.is(0, -0));

// const value = prompt('Enter value');

// console.log(parseInt(value))
// console.log(parseFloat(value))

// const value = prompt('Enter value');

// console.log(isFinite(value))

// console.log(Math.random())
// const randomizer = (min, max) => min + Math.random() * (max - min);
// const randomizer = (min, max) => {
    // return Math.round(min - 0.5 + Math.random() * (max - min + 1))
    // return Math.floor(min + Math.random() * (max + 1 - min))
// };
// console.log(randomizer(1, 3))

// Число 1 до 1.4932132131123312
// Число 2 до 2.4932132131123312
// Число 3 до 2.9999999999999999

// let i = 0.2
// while (i < 11){
//     i+=0.2
//     console.log('infinity loop');
//     if(i > 9.8 && i < 10.2){
//         break
//     }
// }

const fun = r => Math.PI * r ** 2;
console.log(fun(7))
