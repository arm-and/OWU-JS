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
    const users = [
        {name: 'vasya', age: 31, isMarried: false},
        {name: 'petya', age: 30, isMarried: true},
        {name: 'kolya', age: 29, isMarried: true},
        {name: 'olya', age: 28, isMarried: false},
        {name: 'max', age: 30, isMarried: true},
        {name: 'anya', age: 31, isMarried: false},
        {name: 'oleg', age: 28, isMarried: false},
        {name: 'andrey', age: 29, isMarried: true},
        {name: 'masha', age: 30, isMarried: true},
        {name: 'olya', age: 31, isMarried: false},
        {name: 'max', age: 31, isMarried: true}
    ];
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
// let hasFlat = users.reduce((acc,value)=>{
//    if(value.isMarried === true){
//       value.has_flat = true;
//       acc.push(value);
//    }
//    return acc;
// },[]);
// console.log(hasFlat);
