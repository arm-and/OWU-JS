// - Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.
//
// 1) Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// a) отримує текст з параграфа з id "content"
// b) отримує текст з блоку з id "rules"
// c) замініть текст параграфа з id 'content' на будь-який інший
// d) замініть текст параграфа з id 'rules' на будь-який інший
// e) змініть кожному елементу колір фону на червоний
// f) змініть кожному елементу колір тексту на синій
// g) отримати весь список класів елемента з id=rules і вивести їх в console.log
// h) отримати всі елементи з класом fc_rules
// i) поміняти колір тексту у всіх елементів fc_rules на червоний.

// // a) отримує текст з параграфа з id "content".
// let content = document.getElementById('content');
// console.log(content);
// // b) отримує текст з блоку з id "rules"
// let rules = document.getElementById('rules');
// console.log(rules);
// // c) замініть текст параграфа з id 'content' на будь-який інший
// content.innerText = `Франція 1:1 Україна
// Україна 1:1 Фінляндія
// Україна 1:1 Казахстан`;
// // d) замініть текст параграфа з id 'rules' на будь-який інший
// rules.innerText = `Україна – Казахстан: перехвалені, переоцінені – катастрофа у відборі ЧС-2022, фіаско з 28 ударами і слабка втіха`
// // e) змініть кожному елементу колір фону на червоний
// let getEl = document.body.getElementsByTagName('*');
// for (const element of getEl) {
//     element.style.backgroundColor = 'red';
//     element.style.color = 'blue';
// }
// // f) змініть кожному елементу колір тексту на синій
// let ellUl = document.body.getElementsByTagName('ul');
// for (const element of ellUl) {
//     element.style.color = 'blue';
// }
// // g) отримати весь список класів елемента з id=rules і вивести їх в console.log
// let list = document.getElementById('rules');
// console.log(list);
// // // h) отримати всі елементи з класом fc_rules
// let fcRules = document.getElementsByClassName('fc_rules');
// console.log(fcRules);
// // i) поміняти колір тексту у всіх елементів fc_rules на червоний.
// for (const el of fcRules) {
//     el.style.color = 'red';
// }

// 2) За допомоги циклу проітерувати  масив users, записати кожного юзера в свій блок за допомоги document.createElement.
//     Вставити цей блок на сторінку
// 3) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//     Блок з адресою зробити окремим блоком, з блоками для кожної властивості

let users = [{
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

// for (const user of users) {
//     let userId = document.createElement('div');
//
//     userId.style.backgroundColor = 'cadetblue';
//     userId.style.border = 'solid chocolate 4px';
//     userId.style.margin = '5px auto';
//     userId.style.width = '40%';
//
//     userId.innerHTML = `
//     User name: ${user.name[0].toUpperCase()}${user.name.slice(1)}<br>
//     Age: ${user.age}<br>
//     Status: ${user.status}<br>
//     Address:<br>
//     Country: ${user.address.country}<br>
//     City: ${user.address.city}<br>
//     Street: ${user.address.street} - ${user.address.houseNumber}`;
//
//     document.body.appendChild(userId);
// }

// 3) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//     Блок з адресою зробити окремим блоком, з блоками для кожної властивості
// for (const user of users) {
//     let userId = document.createElement('div');
//
//     userId.style.backgroundColor = 'cadetblue';
//     userId.style.border = 'solid chocolate 4px';
//     userId.style.margin = '5px auto';
//     userId.style.width = '40%';
//
//     userId.innerHTML = `
//     User name: ${user.name[0].toUpperCase()}${user.name.slice(1)}<br>
//     Age: ${user.age}<br>
//     Status: ${user.status}<br>
//     Address:<br>
//     Country: ${user.address.country}<br>
//     City: ${user.address.city}<br>
//     Street: ${user.address.street} - ${user.address.houseNumber}`;
//
//     document.body.appendChild(userId);
//
//     let userAddress = userId;
//     userAddress.innerHTML = `
//     Address:<br>
//     Country: ${user.address.country}<br>
//     City: ${user.address.city}<br>
//     Street: ${user.address.street} - ${user.address.houseNumber}
//     `
// }
