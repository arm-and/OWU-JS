//1. - створити масив та вивести його в консоль:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль.

// let numArray = [11, 58, 0.5, 6, 100];
// let strArray = ['ask', 'birds', 'road', 'owu', 'cool'];
// let mixArray = [2, true, '777', 'string', 'false'];
// let emptyArray = [];
//
// emptyArray[0] = 5;
// emptyArray[1] = false;
// emptyArray[2] = 50;
// emptyArray[3] = 'job';
// emptyArray[4] = 22;
//
// console.log(numArray);
// console.log(strArray);
// console.log(mixArray);
// console.log(emptyArray);

//2. За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині.

// for (let i = 0; i < 10; i++) {
//     document.write('<div><p>Lorem ipsum dolor sit amet.</p></div>')
// };

//3. За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i = 0; i < 10; i++) {
//     document.write(`<div>Lorem ipsum dolor ${i}</div>`)
// };

//4. За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let i=0;
//
// while(i<20){
//     document.write('<h1>Lorem ipsum dolor.</h1>');
//     i++;
// };

//5. За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let i=0;
//
// while(i<20){
//     document.write(`<h1> ${i} Lorem ipsum dolor. </h1>`);
//     i++;
// };

//6. Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let numArray = [7, 8, 33, 16, 77, 0.5, 99, 100, 101, 505];
//
// for (let i = 0; i < numArray.length; i++) {
//     console.log(numArray[i]);
// }

//7. Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let strArray = ['dfd', 'dsjcvd', 'ndcvndjk', 'sjsks', 'odkwso', 'owx,', ',xx,', 'hefeh', 'scm,dm', 'mmmxms'];
//
// for (let i = 0; i < strArray.length; i++) {
//     console.log(strArray[i]);
// }

//8. Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let mixArray = [2, true, '777', 'string', 'false', false,8,'ts','java','php' ];
// for (let i = 0; i < mixArray.length; i++) {
//     console.log(mixArray[i]);
// };

//9. Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи.

// let mixArray = [8, true, '777', 'string', 'false', false,false,'ts','java','php' ];
// for (let i = 0; i < mixArray.length; i++) {
//     if(typeof mixArray[i] === 'boolean'){
//         console.log(mixArray[i]);
//     }
// }

//10. Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи.

// let mixArray = [8, true, '777', 'string', 'false', false, false, 'ts', 'java', 10];
// for (let i = 0; i < mixArray.length; i++) {
//     if (typeof mixArray[i] === 'number') {
//         console.log(mixArray[i]);
//     }
// };

//11. Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи.

// let mixArray = [8, true, '777', 'string', 'false', false, false, 'ts', 'java', 10];
// for (let i = 0; i < mixArray.length; i++) {
//     if (typeof mixArray[i] === 'string') {
//         console.log(mixArray[i]);
//     }
// };

//12. Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let emptyArray = [];
//
// emptyArray[0] = 777;
// emptyArray[1] = 'bmw';
// emptyArray[2] = true;
// emptyArray[3] = 2;
// emptyArray[4] = false;
// emptyArray[5] = 'audi';
// emptyArray[6] = 100;
// emptyArray[7] = 200;
// emptyArray[8] = 'cvb';
// emptyArray[9] = 322;
//
// for (let i = 0; i < emptyArray.length; i++) {
//     console.log(emptyArray[i]);
// }

//13. Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
//     document.write(i+'<br>');
// }

//14. Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 1; i <= 100; i++) {
//     console.log(i);
//     document.write(i);
// }

//15. Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i = 1; i <= 100; i+=2) {
//     console.log(i);
//     document.write(i);
// }

//16. Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i = 1; i <= 100; i++) {
//     if(i % 2 === 0){
//         console.log(i);
//         document.write(i);
//         }
//     }

//17. Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 1) {
//         console.log(i);
//         document.write(i);
//     }
// }

//18. Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)

// for (let h = 0; h <= 2; h++) {
//     for (let m = 0; m <=59; m++) {
//         console.log(`${h}:${m}`);
//         if(h===2 && m===0){
//             break;
//         }
//     }
// }

//19. Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)


// for (let h = 0; h <= 2; h++) {
//     for (let m = 0; m < 60; m++) {
//         for (let s = 0; s < 60; s++) {
//             console.log(`${h}:${m}:${s}`);
//             if (h == 2 && m == 20) {
//                 break;
//             }
//         }
//         if (h == 2 && m == 20) {
//             break;
//         }
//     }
// }

//20. Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

// let abcArr = [ 'a', 'b', 'c'];
// let emptyArr = [];
// for (let i = 0; i < abcArr.length; i++) {
//     emptyArr += abcArr[i];
// }
// console.log(emptyArr);

//21. Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

// let abcArr = ['a', 'b', 'c'];
// let emptyArr = [];
// let i =0;
// while (i < abcArr.length) {
//     emptyArr += abcArr[i];
//     i++;
// }
// console.log(emptyArr);

//22. Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

// let abcArr = ['a', 'b', 'c'];
// let emptyArr = [];
// for(let abc of abcArr ) {
//     emptyArr += abc;
//     abc++;
// }
// console.log(emptyArr);

//23. Дано масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.

// let arr = ['a', 'b', 'c'];
//
// for (let i = 1; i <= 3 ; i++) {
//     arr.push(i);
// }
// console.log(arr);

//24. Дано масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
//
// let arr = [1, 2, 3];
// let  newArr = [];
//
// for (let i = arr.length - 1; i >= 0; i--){
//     newArr.push(arr[i]);
// }
// console.log(newArr);

//25. Дано масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.

// let arr = [1, 2, 3];
//
// for (let i = 4; i <= 6; i++) {
//     arr.push(i);
// }
// console.log(arr);

//26. Дано масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.

// let arr = [1, 2, 3];
//
// for (let i = 6; i >= 4; i--) {
//     arr.unshift(i)
// }
// console.log(arr);

//27. Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
//
// let arr = ['js', 'css', 'jq'];
// console.log(arr);
//
// let arr1 = arr.shift();
// document.write(arr1);

//28. Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
//
// let arr = ['js', 'css', 'jq'];
// console.log(arr);
//
// let arr3 = arr.pop();
// document.write(arr3);

//29. Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].
// Метод slice() повертає дрібну копію частини масиву у новий масив, починаючи з begin і до end (не включаючи end), де begin та end є індексами елементів масиву. Початковий масив не змінюється.
// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.slice(3)
// console.log(newArr);

// 30. Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].

// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.slice(0, 2)
// console.log(newArr);

//31. Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].
//
// let arr = [1, 2, 3, 4, 5];
// arr.splice(1, 2);
// console.log(arr);

//32. Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
//
// let arr = [1, 2, 3, 4, 5];
// console.log(arr);
// arr.splice(3, 0, 'a', 'b', 'c');
// console.log(arr);

//33. Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

// let arr = [1, 2, 3, 4, 5];
// arr.splice(1,0,'a','b');
// arr.splice(6,0,'c');
// arr.splice(8,0,'e');
// console.log(arr);

//34. Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let el of arr) {
//     if (el % 2 === 0) {
//         console.log(el);
//     }
// }

//35. Взяти масив з 10 чисел або створити його. Створити 2й порожній масив.За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newArr = [];

for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
}
console.log(newArr);
