// // Видалення значень об'єктів
// const myCity = {
//     city: 'New York',
//     popular: true,
//     country: 'USA'
// }
//
// delete myCity.country;
// console.log(myCity);
//

// // Додати значення об'єкту
// myCity.some = 'hi';
// // or
// myCity['something'] = 'hello'
// console.log(myCity);
//
// // Якщо значення змінної, буду являтись ключем якойсь іншої змінної (тільки квадратні дужки, точка не підійде)
// const countryPropertyName = 'country';
// myCity[countryPropertyName] = 'USA';
// console.log(myCity);

// // Короткий формат запису
// const name = 'Danylo';
// const postsQty = 23;
//
// const userProfile = {
//     name,
//     postsQty,
//     hasSignedAgreement: false
// }
// console.log(userProfile);

//window(or 'globalThis') - глобальний об'єкт веб браузера

//метод - це властивість(ключ) об'єкта, значення якого є функція
// const myCity = {
//     city: 'New York',
//     cityGreeting: function () {
//         console.log('Greetings!!!')
//     }
// }
//
// myCity.cityGreeting() // виклик метода

//JSON (JAVASCRIPT OBJECT NOTATION) - формат обміну даними у вигляді стрічки (стрінги) 
// Формат JSON (двійні лапки замість одинарних) - {"userId":1,"id":1,"title":"Test title","status":{"completed":false}}
// let user = {
//     userId: 1,
//     id: 1,
//     title: 'Test title',
//     status: {
//         completed: false,
//     },
// }
//
// let userStringify = JSON.stringify(user);
// console.log(userStringify);
// let userParse = JSON.parse(userStringify);
// console.log(userParse);

// Мутація об'єктів - Копіювання об'єктів
// const person1 = {
//     name: 'Bob',
//     age: 25
// }
//
// const person2 = person1;
//
// person2.age = 26;
// person2.isAdult = true;
//
// console.log(person1.age) // також стало 26
// console.log(person1.isAdult); // також змінило значення person1 (copy by reference - копіювання за посиланням, тому так і відбувається)

// Мутація об'єктів - Як запобігти мутацію об'єктів
//Варіант 1 - Оригінальний об'єкт не змінюється, але якщо у цього об'єкта є властивості, значення яких є об'єкт,
// то все одно посилання на них зберігаються і значення будуть оригінального об'єкта будуть змінюватись
// const person1 = {
//     name: 'Bob',
//     age: 25
// }
//
// const person2 = Object.assign({}, person1)
// person2.age = 26;
//
// console.log(person2.age); // 26
// console.log(person1.age); // 25 (цей об'єкт не змінився)
//
//Варіант 2 - оператор spread - '...' - Оригінальний об'єкт не змінюється, але якщо у цього об'єкта є властивості, значення яких є об'єкт,
// то все одно посилання на них зберігаються і значення будуть оригінального об'єкта будуть змінюватись
// const person3 = {
//     name: 'Bob',
//     age: 25
// }
// const  person4 = {...person3};
// person4.name = 'Kokos';
// console.log(person4.name);
// console.log(person3.name);
//
//Варіант 3 - повністю запобігти мутацію (посилання на вкладенні об'єкти не зберігаються)
// const person5 = {
//     name: 'Alice',
//     age: 27,
//     status: {
//         completed: true
//     }
// }
//
// const person6 = JSON.parse(JSON.stringify(person5));
// person6.status.completed = false;
//
// console.log(person6.status.completed); // false
// console.log(person5.status.completed); // true

// Функція - це об'єкт; console.dir(Функція) - відобразить тіло функції
// function myFn(a, b) {
//     let c;
//     a = a + 1;
//     c = a + b;
//     return c
// }
// console.log(myFn(10, 20));

// Створення функції, яка мутує оригінальний об'єкт (не рекомендується, але є випадки коли це необхідно)
// const personOne = {
//     name: 'Bob',
//     age: 21
// }
// function increasePersonAge(somePerson) {
//     somePerson.age += 1
//     return somePerson
// }
//
// console.log(increasePersonAge(personOne));

// Створення копії об'єкта всередині функції, щоб не мутувати оригінальний об'єкт
// const personOne = {
//     name: 'Bob',
//     age: 21
// }
//
// function increasePersonAge(somePerson) {
//     const someUpdatedPerson = Object.assign({}, somePerson)
//     someUpdatedPerson.age += 1
//     return someUpdatedPerson
// }
//
// const personTwo = increasePersonAge(personOne);
// console.log(personTwo);
// console.log(personOne);

// Callback функція - коли аргументом однієї функції є інша функція (одна функція викликає іншу функцію)
// Зміст callback функції, що вона викликається всередині іншої функції
// function printMyName() {
//     console.log('Danylo')
// }
//
// setTimeout(printMyName,1000);

// Правила функцій:
// 1. Називати функції виходячи з результату функції (щоб назва була логічна)
// 2. Одна функція повинна виконувати одну дію
// 3. Не рекомендується змінювати зовнішні щодо функції змінні (яка мутує оригінальний об'єкт) - але є випадки коли це необхідно
// Якщо нема return - то функція поверне undefined

// Глобальні та локальні області видимості (локальні мають пріоритет)
// Якщо в Глобальній області видимості та Локальній області видимості "Один" будуть створені змінні "b", 
// то при роботі в Локальній області "Один" ми будемо працювати зі змінною, яка створена в Локальній області видимості "Один". 
// Якщо в Локальній області видимості "Два" не була створена змінна "b", 
// то при роботі з нею в Локальній області видимості "Два", ми будемо брати значення змінної "b" з Глобальної області видимості.
// let a; //глобальна змінна
// let b; //глобальна змінна
//
// function myFn() {
//     let b //локальна змінна
//     a = true;
//     b = 10;
//     console.log(b);
// }
//
// myFn();
//
// console.log(a); // true
// console.log(b); // undefined

// Ланцюг областей видимості
// let a = 5;
//
// function myFn () {
//     let a = 8
//     function innerFn () {
//         console.log(a);
//     }
//     innerFn();
// }
//
// myFn();
//
// console.log(a);

// Якщо не визначити змінну всередині функції, а просто присвоїти значення, то така змінна буде визначена 
// автоматично в глобальній області видимості (не рекомендується)
// function myFn () {
//     a = true
//     console.log(a);
// }
// myFn();
// console.log(a);

// Правила по використанню змінних:
// 1. Всі змінні присвоювати перед їх використанням
// 2. Намагатися використовувати const всюди, де це можливо
// 3. Всередині функції не змінювати змінні з зовнішніх областей видимості

//'use strict' (строгий режим) - забороняє використання невизначених змінних (якщо є бажання, можна додати перед використанням)
// 'use strict'
//
// function myFn () {
//     a = true;
//     console.log(a);
// }
// myFn();