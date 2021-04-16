// // 1) Створити масив з 20 чисел та:
// //     a) відсортувати його від меншого до більшого.
//
// let array20 = [9, 3, 8, 55, 4, 77, 18, 66, 2.5, 33, 21, 2020, 444, 325, 5, 11, 1, 13, 20, 2];
// let sortArray = array20.sort((a, b) => a - b);
// console.log(sortArray);
//
// // b) відсортувати його від більшого до меншого.
//
// let array20 = [9, 3, 8, 55, 4, 77, 18, 66, 2.5, 33, 21, 2020, 444, 325, 5, 11, 1, 13, 20, 2];
// let sortArray = array20.sort((a, b) => b - a);
// console.log(sortArray);
//
// // c) Відфілтрувати числа які є кратними 3.
//
// let array20 = [9, 3, 8, 55, 4, 77, 18, 66, 2.5, 33, 21, 2020, 444, 325, 5, 11, 1, 13, 20, 2];
// let filterArr = array20.filter(value => (value % 3 === 0));
// console.log(filterArr);
//
// // d) Відфілтрувати числа які є більшими за 10.
//
// let array20 = [9, 3, 8, 55, 4, 77, 18, 66, 2.5, 33, 21, 2020, 444, 325, 5, 11, 1, 13, 20, 2];
// let filterMore10 = array20.filter(value => (value > 10));
// console.log(filterMore10);
//
// // e) Проітерувати його forEach та вивести кожен елмент за допомогою document.write
//
// let array20 = [9, 3, 8, 55, 4, 77, 18, 66, 2.5, 33, 21, 2020, 444, 325, 5, 11, 1, 13, 20, 2];
// array20.forEach((value, index, array) => document.write(`${value} - ${index} - ${array}`));
//
// // // f) За допомогою map збільшити кожен елемент в масиві в три рази.
//
// let array20 = [9, 3, 8, 55, 4, 77, 18, 66, 2.5, 33, 21, 2020, 444, 325, 5, 11, 1, 13, 20, 2];
// let multiplyBy3 = array20.map(value =>value*3)
// console.log(multiplyBy3)
//
// // g) Порахувати загальну суму всіх елментів у масиві (reduce)
//
// let array20 = [9, 3, 8, 55, 4, 77, 18, 66, 2.5, 33, 21, 2020, 444, 325, 5, 11, 1, 13, 20, 2];
// let sum = array20.reduce(((previousValue,currentValue) => (previousValue+currentValue)))
// console.log(sum);
//
// 2) Створити масив з 20 стрічок та:
//     a) Відсортувати його в алфавітному порядку
//
// let strArr20 = [ 'owu','abc','gray','green','blue','ufc','wbo','javaScript','red','apple','python','hello','bye'];
//
// // b) Відсортувати в зворотньому порядку
//
// let sortAbc = console.log(strArr20.sort()); //зворотньо sort().reverse();
//
// // c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)
//
// let filterMore4 = strArr20.filter (value => value.length > 4);
// console.log(filterMore4);
//
// // d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'
//
// console.log(strArr20.map(value => `Sam says: ${value}` ));
//
// // 3) Все робити тільки за допомогою методів масивів!
//     Дано масив :
// const users = [
//     {name: 'vasya', age: 31, isMarried: false},
//     {name: 'petya', age: 30, isMarried: true},
//     {name: 'kolya', age: 29, isMarried: true},
//     {name: 'olya', age: 28, isMarried: false},
//     {name: 'max', age: 30, isMarried: true},
//     {name: 'anya', age: 31, isMarried: false},
//     {name: 'oleg', age: 28, isMarried: false},
//     {name: 'andrey', age: 29, isMarried: true},
//     {name: 'masha', age: 30, isMarried: true},
//     {name: 'olya', age: 31, isMarried: false},
//     {name: 'max', age: 31, isMarried: true}
// ];
// // a) відсортувати його за  віком (зростання , а потім окремо спадання)
//
// let sortUsers = users.sort((a, b) => a.age - b.age);
// console.log(sortUsers);
// let usersJSON = JSON.stringify(users);
// let newUsers = JSON.parse(usersJSON);
// let sortUsers1 = newUsers.sort((a, b) => b.age - a.age);
// console.log(sortUsers1);
//
// // b) відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
//
// let sortU1 = users.sort((a, b) => a.name.length - b.name.length);
// console.log(sortU1);
//
// let usersJSON = JSON.stringify(users)
// let newUsers = JSON.parse(usersJSON)
//
// let sortUs2 = newUsers.sort((a, b) => b.name.length - a.name.length);
// console.log(sortUs2);
//
// c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення),
// та зберегти це в новий масив (первинний масив залишиться без змін)
//
// users.map((item, index)=> item.id = index + 1)
// console.log(users);
//
// // d) відсортувати його за індентифікатором
//
// let usersJSONid = JSON.stringify(users)
// let usersID = JSON.parse(usersJSONid)
// console.log(usersID.sort((a, b) => b.id - a.id));
//
// // e) Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce)
//
// let hasFlat = users.reduce((acc, value) => {
//     if (value.isMarried === true) {
//         value.has_flat = true;
//         acc.push(value);
//     }
//     return acc;
// }, []);
// console.log(hasFlat);

// ==============================================================================================================
// ==============================================================================================================

const cars = [
    {
        producer: "subaru",
        model: "wrx",
        year: 2010,
        color: "blue",
        type: "sedan",
        engine: "ej204x",
        volume: 2,
        power: 400
    },
    {
        producer: "subaru",
        model: "legacy",
        year: 2007,
        color: "silver",
        type: "sedan",
        engine: "ez30",
        volume: 3,
        power: 250
    },
    {
        producer: "subaru",
        model: "tribeca",
        year: 2011,
        color: "white",
        type: "jeep",
        engine: "ej20",
        volume: 2,
        power: 300
    },
    {
        producer: "subaru",
        model: "leone",
        year: 1998,
        color: "yellow",
        type: "sedan",
        engine: "ez20x",
        volume: 2,
        power: 140
    },
    {
        producer: "subaru",
        model: "impreza",
        year: 2014,
        color: "red",
        type: "sedan",
        engine: "ej204x",
        volume: 2,
        power: 200
    },
    {
        producer: "subaru",
        model: "outback",
        year: 2014,
        color: "red",
        type: "hachback",
        engine: "ej204",
        volume: 2,
        power: 165
    }, {
        producer: "bmw",
        model: "115",
        year: 2013,
        color: "red",
        type: "hachback",
        engine: "f15",
        volume: 1.5,
        power: 120
    }, {
        producer: "bmw",
        model: "315",
        year: 2010,
        color: "white",
        type: "sedan",
        engine: "f15",
        volume: 1.5,
        power: 120
    },
    {producer: "bmw", model: "650", year: 2009, color: "black", type: "coupe", engine: "f60", volume: 6, power: 350},
    {producer: "bmw", model: "320", year: 2012, color: "red", type: "sedan", engine: "f20", volume: 2, power: 180},
    {
        producer: "mercedes",
        model: "e200",
        year: 1990,
        color: "silver",
        type: "sedan",
        engine: "eng200",
        volume: 2,
        power: 180
    },
    {
        producer: "mercedes",
        model: "e63",
        year: 2017,
        color: "yellow",
        type: "sedan",
        engine: "amg63",
        volume: 3,
        power: 400
    },
    {
        producer: "mercedes",
        model: "c250",
        year: 2017,
        color: "red",
        type: "sedan",
        engine: "eng25",
        volume: 2.5,
        power: 230
    }
];

// Відфільтрувати масив за наступними крітеріями :
// - двигун більше 3х літрів
// - двигун = 2л
// - виробник мерс
// - двигун більше 3х літрів + виробник мерседес
// - двигун більше 3х літрів + виробник субару
// - сили більше ніж 300
// - сили більше ніж 300 + виробник субару
// - мотор серіі ej
// - сили більше ніж 300 + виробник субару + мотор серіі ej
// - двигун меньше 3х літрів + виробник мерседес
// - двигун більше 2л + сили більше 250
// - сили більше 250  + виробник BMW

//1)- двигун більше 3х літрів
//
// const filterEngine = cars.filter(car => car.volume > 3);
// console.log(filterEngine);

// // АБО
//
// const filterEngine1 = cars.reduce((acc,value) =>{
//     if(value.volume > 3){
//       acc.push(value);
//    }
//    return acc;
// },[]);
// console.log(filterEngine1)
//
//
//2) двигун = 2л
//
// const vol2 = cars.filter(value => value.volume === 2);
// console.log(vol2);

//3) - виробник мерс
//
// const findMerc = cars.filter(car => car.producer === 'mercedes');
// console.log(findMerc);
//
// //4) - двигун більше 3х літрів + виробник мерседес
//
//
// const findMerc1 = cars.reduce((acc,value) =>{
//     if(value.volume >= 2 && value.producer === 'mercedes'){
//       acc.push(value);
//    }
//    return acc;
// },[]);
// console.log(findMerc1);
//
//5) - двигун більше 3х літрів + виробник субару
//
// const findSubaru = cars.reduce((acc,value) =>{
//     if(value.volume > 3 && value.producer === 'subaru'){
//       acc.push(value);
//    }
//    return acc;
// },[]);
// console.log(findSubaru);// не було в масиві такої тачки,але умова виконана))
//
//6) - сили більше ніж 300
//
// const bigPower = cars.filter(value => value.power >= 300);
// console.log(bigPower);
//
//7) - сили більше ніж 300 + виробник субару
//
// const findSubaru1 = cars.reduce((acc,value) =>{
//     if(value.power > 300 && value.producer === 'subaru'){
//       acc.push(value);
//    }
//    return acc;
// },[]);
// console.log(findSubaru1);
//
//8) - мотор серіі ej
//
// const engineEj = cars.filter(value => value.engine.startsWith('ej'));
// console.log(engineEj);

//9) - сили більше ніж 300 + виробник субару + мотор серіі ej
//
// const findSubaru2 = cars.reduce((acc,value) =>{
//     if(value.power > 300 && value.producer === 'subaru' && value.engine.startsWith('ej')){
//       acc.push(value);
//    }
//    return acc;
// },[]);
// console.log(findSubaru2);
//
//10) - двигун меньше 3х літрів + виробник мерседес

// const findMerc3 = cars.reduce((acc,value) =>{
//     if(value.volume < 3 && value.producer === 'mercedes'){
//       acc.push(value);
//    }
//    return acc;
// },[]);
// console.log(findMerc3);

//11) - двигун більше 2л + сили більше 250
//
// const findPow = cars.reduce((acc, value) => {
//     if (value.volume > 2 && value.power > 250) {
//         acc.push(value);
//     }
//     return acc;
// }, []);
// console.log(findPow);

//12) - сили більше 250  + виробник BMW
//
// const findBMW = cars.reduce((acc, value) => {
//     if (value.power >= 250 && value.producer === 'bmw') {
//         acc.push(value);
//     }
//     return acc;
// }, []);
// console.log(findBMW);

//- взяти наступний масив:

const usersWithAddress = [
    {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
    {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
    {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
    {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
    {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
    {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
    {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
    {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
    {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
    {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
    {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
];

// -- Відсортувати їх по ID
//
// const sort1 = usersWithAddress.sort((a, b) => {
//     return a.id - b.id
// });
// console.log(sort1);
//
// -- Відсортувати їх по ID в зворотньому порядку
//
// const sort2 = usersWithAddress.sort((a,b)=>{
//    return b.id -a.id;
// });
// console.log(sort2);
//
// -- Відсортувати по віку
//
// const sort3 = usersWithAddress.sort((a,b)=>{
//    return a.age -b.age;
// });
// console.log(sort3);
//
// -- Відсортувати по віку в зворотньому порядку
//
// const sort4 = usersWithAddress.sort((a,b)=>{
//     return b.age -a.age;
// });
// console.log(sort4);

// -- Відсорутвати по імені
//
// const sortNames = usersWithAddress.sort((a,b)=>{
//     return a.name === b.name ? 0 : a.name < b.name ? -1 : 1
// });
// console.log(sortNames);

// -- Відсорутвати по назві вулиці
//
// const sortNames = usersWithAddress.sort((a,b)=>{
//    if (a.address.street > b.address.street){
//       return 1;
//    }
//    return -1;
// });
// console.log(sortNames);
//
// -- Відсорутвати по номеру будинку
//
// const houseNum =usersWithAddress.sort((a,b)=>{
//    return a.address.number - b.address.number;
// });
// console.log(houseNum);
//
// -- Залигити тільки тих, хто молодший ніж 30 (filter)

// const younger30 = [];
// usersWithAddress.filter(value => {
//     if (value.age < 30) {
//         younger30.push(value);
//     }
// });
// console.log(younger30);

// -- Залишити тільки одружених
//
// const justMarried = [];
// usersWithAddress.filter(value => {
//     if (value.isMarried === true) {
//         justMarried.push(value);
//     }
// });

// -- Залишити тільки одружених, які молодші за 30
//
// const justMarried30 = usersWithAddress.reduce((accumulator, value) => {
//     if (value.isMarried === true && value.age < 30) {
//         accumulator.push(value);
//     }
//     return accumulator;
// }, []);
// console.log(justMarried30);

// -- Залишити лише тих, в кого парні номери будинків.
//
// const houseNum2 = usersWithAddress.reduce((acc, value) => {
//     if (value.address.number % 2 === 0) {
//         acc.push(value);
//     }
//     return acc;
// }, []);
// console.log(houseNum2);
//
// -- Порахувати загальний вік всіх людей. (reduce)
//
// const totalAge = usersWithAddress.reduce((total,user)=>{
//    return total +user.age;
// },0);
// console.log(totalAge);
//
// -- Ті, хто одружений і старший за 30 має отримати обєкти child і попасти в новий масив (reduce)
//
// const oldMarried = usersWithAddress.reduce((acc,user)=>{
//    if(user.isMarried === true && user.age > 30){
//       user.child = `My name is ${user.name} too`;
//      acc.push(user)
//    } return acc;
// },[])
// console.log(oldMarried);
