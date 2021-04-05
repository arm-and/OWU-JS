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
// let min;
// function num(a, b, c) {
//     return (a < b && a < c) ? min = a
//         : (b < a && b < c) ? min = b
//             : (c < b && c < a) ? min = c
//                 : min;
// }
//
// let minNumber = num(8, 22, 100);
// console.log('Найменше число', minNumber);

// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// let max;
// function numMax(a, b, c) {
//     return (a > b && a > c) ? max = a
//         : (b > a && b > c) ? max = b
//             : (c > b && c > a) ? max = c
//                 : max;
// }
//
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

// let sumArr = [8, 38, 55, 8000, 2, 1990, 2020];
// let sumNum = 0;
//
// function sumNumber (sumArray) {
//     for (let i = 0; i < sumArray.length; i++) {
//         sumNum += sumArray[i];
//     }
//     return sumNum;
// }
// sumNumber(sumArr);
// console.log(sumNum);
// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let medNum = 0;
// function mediumNum (sumArray) {
//     medNum = sumNum / sumArray.length;
//     return medNum;
// }
// mediumNum(sumArr);
// console.log(medNum);

// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів

const allUsers = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];

// function getKeys() {
//     for (let i = 0; i < allUsers.length; i++) {
//         console.log(Object.keys(allUsers[i]));
//     }
// }
// getKeys();

// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів

function getValues() {
    for (let i = 0; i < allUsers.length; i++){
        let userValue = allUsers[i];
        console.log(Object.values(userValue));
    }
}

getValues();
