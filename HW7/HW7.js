// // - Створити довільний елемент с id = text. використовуючи JavaScript, зробіть так, щоб при кліку на кнопку зникавл елемент с id="text".
//
// const getText = document.getElementById('text');
// const getBtn = document.getElementById('btn');
// getBtn.onclick = ev => {
//     getText.hidden = true
// };
//
// //     - Створіть кнопку, при кліку на яку, вона буде приховувати сама себе.
//
// const getBtn2 = document.getElementById('btn2');
// getBtn2.onclick = ev => {
//     getBtn2.hidden = true;
// };
// // - Створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// //   При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи менше він ніж 18, та повідомити про це користувача
//
// const adult = document.getElementById('adult');
// const old = document.getElementById('old');
// old.onclick = event => {
//     (adult.value < 18) ? alert('You are not an adult') : alert('You are big boy');
// };
//
// // - Створіть меню, яке розгортається/згортається при клику
// const menuBtn = document.getElementById('menu-btn');
// const menu = document.getElementById('menu');
// let flag = true;
// menuBtn.onclick = ev => {
//     menu.style.display = flag ? 'none' : 'block';
//     flag = !flag;
// }
//
// // - Створіть список коментарів , приклад об'єкту коментаря - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// // Вивести список коментарів в документ, кожний в своєму блоці.
// //     Додайте кожному коментарю по кнопці для згортання його body.
//
// const comments = [
//     {
//         postId: 1,
//         id: 1,
//         name: "id labore ex et quam laborum",
//         email: "Eliseo@gardner.biz",
//         body: "laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium"
//     },
//     {
//         postId: 1,
//         id: 2,
//         name: "quo vero reiciendis velit similique earum",
//         email: "Jayne_Kuhic@sydney.com",
//         body: "est natus enim nihil est dolore omnis voluptatem numquam et omnis occaecati quod ullam at voluptatem error expedita pariatur nihil sint nostrum voluptatem reiciendis et"
//     },
//     {
//         postId: 1,
//         id: 3,
//         name: "odio adipisci rerum aut animi",
//         email: "Nikita@garfield.biz",
//         body: "quia molestiae reprehenderit quasi aspernatur aut expedita occaecati aliquam eveniet laudantium omnis quibusdam delectus saepe quia accusamus maiores nam est cum et ducimus et vero voluptates excepturi deleniti ratione"
//     },
//     {
//         postId: 1,
//         id: 4,
//         name: "alias odio sit",
//         email: "Lew@alysha.tv",
//         body: "non et atque occaecati deserunt quas accusantium unde odit nobis qui voluptatem quia voluptas consequuntur itaque dolor et qui rerum deleniti ut occaecati"
//     },
//     {
//         postId: 1,
//         id: 5,
//         name: "vero eaque aliquid doloribus et culpa",
//         email: "Hayden@althea.biz",
//         body: "harum non quasi et ratione tempore iure ex voluptates in ratione harum architecto fugit inventore cupiditate voluptates magni quo et"
//     }
// ];
// const com = document.getElementById('com');
// comments.forEach(item =>{
//     const p = document.createElement('p');
//     const h1 = document.createElement('h1');
//     const div = document.createElement('div');
//     const btn3 = document.createElement('button');
//     p.innerHTML = item.body;
//     h1.innerHTML = item.email;
//     btn3.innerText = 'Hide';
//     btn3.onclick = () => {
//         p.hidden = !p.hidden;
//     }
//
//     com.appendChild(div);
//     div.appendChild(h1);
//     div.appendChild(p);
//     div.appendChild(btn3);
// });
//
//
// // - Створити 2 форми  по 2 інпути в кожній. створити кнопку при кліку на яку зчитується та виводиться на консоль інформація з цих 2х форм. Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)
// // Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//
// document.getElementById('button4').onclick = () => {
//     console.log(
//         document.forms.form1.input1.value,
//         document.forms.form1.input2.value,
//         document.forms.form2.input3.value,
//         document.forms.form2.input4.value
//     );
// }
//
// // - Створити функцію, яка генерує таблицю.
// //     Перший аргумент визначає кількість строк.
// //     Другий параметр визначає кількість ячейок в кожній строці.
// //     Третій параметр визначає елемент в який потрібно таблицю додати.
// //
// // function createTable(tr, td, items){
// //     let table = document.createElement('table');
// //     for (let i = 0; i < tr; i++){
// //         let tr = document.createElement('tr');
// //         for(let ii = 0; ii < td; ii++){
// //             let td = document.createElement('td');
// //             td.innerHTML = `A${i} : B${ii}`;
// //             tr.appendChild(td);
// //         }
// //         table.appendChild(tr);
// //     }
// //     items.appendChild(table);
// // }
// // createTable(5, 5, document.body);
// //
// // - Напишіть «Карусель» – стрічку зображень, яку можна гортати вліво-вправо нажаттям на стрілочки.
//
// let images = ['https://i.7fon.org/1000/r1562302.jpg', 'https://i.7fon.org/1000/m603880.jpg', 'https://i.7fon.org/1000/z149309.jpg', 'https://i.7fon.org/1000/z149275.jpg', 'https://i.7fon.org/1000/z149315.jpg'];
// let div = document.createElement('div');
// let btnRight = document.createElement('button');
// let btnLeft = document.createElement('button');
// let img = document.createElement('img');
// btnLeft.classList.add('arrow-left');
// btnRight.classList.add('arrow-right');
// btnLeft.innerText = '<-left';
// btnRight.innerText = 'right->';
// div.classList.add('image');
// div.appendChild(btnLeft);
// div.appendChild(img);
// div.appendChild(btnRight);
//
// let index = 0;
// img.setAttribute('src',images[index]);
//
// btnRight.onclick = ()=>{
//     if(index>=images.length-1){
//         index = 0;
//         img.setAttribute('src',images[index]);
//     }else{
//         img.setAttribute('src',`${images[index+1]}`);
//         index++;
//     }
// };
//
// btnLeft.onclick = ()=>{
//     if(index<=0){
//         index = images.length-1;
//         img.setAttribute('src',images[index]);
//     }else{
//         img.setAttribute('src',`${images[index-1]}`);
//         index--;
//     }
// };
//
// document.body.appendChild(div);
