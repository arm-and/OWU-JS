// 1) створити функцію яка приймає масив та виводить його
//
// let isArr = [1, 2, 2, 4, 5];
//
// function showArr(arr) {
//     console.log(arr)
// }
//
// showArr(isArr);

// 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.
//
// function randomNum(length) {
//     let emptyArr = [];
//     for (let i = 0; i < length; i++) {
//         emptyArr.push(Math.floor(Math.random() * 5))
//     }
//     return emptyArr;
// }
//
// const randomArr = randomNum(10)
// showArr(randomArr);

// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function num(a, b, c) {
//     let min;
//     return (a < b && a < c) ? min = a
//         : (b < a && b < c) ? min = b
//             : (c < b && c < a) ? min = c
//                 : min;
// }
//
// let minNumber = num(8, 22, 100);
// console.log('Найменше число', minNumber);

// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function numMax(a, b, c) {
//     let max;
//     return (a > b && a > c) ? max = a
//         : (b > a && b > c) ? max = b
//             : (c > b && c > a) ? max = c
//                 : max;
// }
// let maxNumber = numMax(8, 22, 100);
// console.log('Набільше число', maxNumber);

// 5) створити функцію яка повертає найбільше число з масиву

// function getMaxNum(any = []) {
//     let max = any[0];
//     for (let i = 0; i < any.length; i++) {
//         if (any[i] > max) {
//             max = any[i];
//         }
//     }
//     console.log(max);
//     return max;
//
// }
//
// getMaxNum([8, 38, 55, 8000, 2, 1990, 2020]);
// 6) створити функцію яка повертає найменьше число з масиву

// function getMinNum(any = []) {
//     let min = any[0];
//     for (let i = 0; i < any.length; i++) {
//         if (any[i] < min) {
//             min = any[i];
//         }
//     }
//     console.log(min);
//     return min;
//
// }
//
// getMinNum([8, 38, 55, 8000, 2, 1990, 2020]);

// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.

// let isArray = [8, 38, 55, 8000, 2, 1990, 2020];
//
// function sumNumbers(elements) {
//     let sumNum = 0;
//     for (const el of elements) {
//         sumNum += el;
//     }
//
//     return sumNum;
// }
//
// console.log(sumNumbers(isArray));

// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// function medArr(elements) {
//     let dil = 0;
//     for (const el of elements) {
//         dil+=el;
//     }
//     return dil/elements.length;
// }
//
// console.log(medArr(isArray));

// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
//
// const allUsers = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];

// function getKey() {
//    const arr = [];
//    for (let user of allUsers) {
//        for (let key in user) {
//            arr.push(key);
//        }
//    }
//    return arr;
// }
//
// let arr = getKey()
// console.log(arr)

// // 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів

// function getKey() {
//    const arr = [];
//    for (let user of allUsers) {
//        for (let key in user) {
//            arr.push(user[key]);
//        }
//    }
//    return arr;
// }
//
// let arr = getKey()
// console.log(arr)

// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]

// function sum(a, b){
//     let result = [];
//     for (let i = 0; i < a.length; i++) {
//         result.push(a[i]+b[i]);
//     }
//     return result;
// };
// let resultAB = sum([1,2,3,4],[2,3,4,5]);
// console.log(resultAB);

// 12) створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// function returnMinMax(numbersArray) {
//     let minValue = numbersArray[0];
//     let maxValue = numbersArray[0];
//
//     for (let i = 0; i < numbersArray.length; i++) {
//         if (numbersArray[i] > maxValue) {
//             maxValue = numbersArray[i];
//         }
//
//         if (numbersArray[i] < minValue) {
//             minValue = numbersArray[i];
//         }
//     }
//
//     console.log(maxValue);
//     return minValue;
// }
//
// console.log(returnMinMax([3, 8, 20, 25, 77, 10, 777]));

// 13) Взяти задачі з завдання 10 та 9 та обєднати їх в одну динамічну функцію.
//     Що б я міг сам вибрати повернути мені масив ключів чи масив значень.

//14) Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// EXAMPLE:
// foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
// foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
// foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

// function foo(arr, i) {
//     if (i < arr.length) {
//         let num1 = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = num1;
//     }
//     return arr;
// };
//
// console.log(foo([9, 8, 0, 4], 0));
// console.log(foo([9, 8, 0, 4], 1));
// console.log(foo([9, 8, 0, 4], 2));

//15) Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
//     Двожина масиву від 2 до 100

// EXAMPLE:
//     [1,0,6,0,3] => [1,6,3,0,0]
//     [0,1,2,3,4] => [1,2,3,4,0]
//     [0,0,1,0]   => [1,0,0,0]

// function foo(array) {
//     let arr1 = [];
//     let arr2 = [];
//     for (const item of array) {
//         (item === 0) ? arr1.push(item) : arr2.push(item)
//     }
//     return arr2.concat(arr1);
// }
//
// console.log(foo([1, 0, 6, 0, 3]));
// console.log(foo([0, 1, 2, 3, 4]));
// console.log(foo([0, 0, 1, 0]));

//16) Дано список імен.
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд

// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// Результат:
// let n1 = 'Harry Potter';
// let n2 = 'Ron Whisley';
// let n3 = 'Hermione Granger';
//
// let n1 = '    Harry       Potter      ';
// let n2 = '    Ron       Whisley      ';
// let n3 = '    Hermione       Granger      ';
//
// function outputText(string) {
//     string = string.trim()
//     string = string.replaceAll(/\s+/g, ' ');
//     console.log(string);
// }
//
// outputText(n1);
// outputText(n2);
// outputText(n3);
