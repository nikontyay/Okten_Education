// --створити масив з:
//     - з 5 числових значень

// let arr = [11,22,33,44,55];
// console.log(arr);

// - з 5 стічкових значень

// let arr = ['qwe', 'wer', 'ert', 'rty', 'tyu'];
// console.log(arr);

// - з 5 значень стрічкового, числового та булевого типу

// let arr = [11,22,33,44,55,'qwe', 'wer', 'ert', 'rty', 'tyu', true, false];
// console.log(arr);

// - та вивести його в консоль
//
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//
//


// let arr = [];
//
// arr[0] = 12;
// arr[1] = true;
// arr[2] = 'qwe';
// console.log(arr);



//
//
// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while

// let arr = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while (i < arr.length) {
//     document.write(`<div>${arr[i]}</div>`)
//     i++;
// }




//     2. перебрати його циклом for

// let arr = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i < arr.length; i++) {
//     document.write(`<div>${arr[i]}</div>`)
// }



//     3. перебрати циклом while та вивести  числа тільки з непарним індексом

// let arr = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while (i < arr.length) {
//     if(arr[i] % 2 === 1)
//     document.write(`<div>${arr[i]}</div>`);
//     i++;
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

// let arr = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i < arr.length; i++) {
//     const number = arr[i];
//     if(number % 2 === 1)
//     document.write(`<div>${number}</div>`)
// }



// 5. перебрати циклом while та вивести  числа тільки парні  значення

// let arr = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while (i < arr.length) {
//     if(arr[i] % 2 === 0)
//     document.write(`<div>${arr[i]}</div>`);
//     i++;
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення

// let arr = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i < arr.length; i++) {
//     let number = arr[i];
//     if (number % 2 === 0)
//         document.write(`<div>${number}</div>`)
// }



// 7. замінити кожне число кратне 3 на слово "okten"

let arr = [2,17,13,6,22,31,45,66,100,-18];
for (let i = 0; i < arr.length; i++) {
    let arrElement = arr[i];
    if (arrElement % 3 === 0)
        document.write(`<div>Okten</div>`)
}

// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
//
//
//
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор