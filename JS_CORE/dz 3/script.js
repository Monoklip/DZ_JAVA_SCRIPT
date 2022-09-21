const child = document.querySelectorAll("a");
const btnN1 = () => {
    const btn1 = prompt("Виберіть колір сторінки");
    document.body.style.background = btn1;
};
const btnN2 = () => {
    const btn2 = prompt("Виберіть вид шрифта сторінки");
    document.body.style.fontFamily = btn2;
};
const h1 = document.querySelector("h1");
const btnN3 = () => {
    const btn3 = prompt("Виберіть положення заголовка h1");
    h1.style.textAlign = btn3;
};
const p = document.querySelector("p");
const btnN4 = () => {
    const btn4 = prompt("Колір параграфа зсилок");
    p.style.background = btn4;
};
const btnN5 = () => {
    const btn5 = prompt("Виберіть положення заголовка h1");

    for (var i = 0; i < child.length; i++) {
        child[i].style.color = btn5;
    }
};
const btnN6 = () => {
    const btn6 = prompt('Виберіть колір тексту "Мої улюблені сайти"');
    p.style.color = btn6;
};
const btnN7 = () => {
    const btn7 = prompt('Виберіть розмір шрифта тексту "Мої улюблені сайти"');

    for (var i = 0; i < child.length; i++) {
        child[i].style.fontSize = btn7;
    }
    p.style.fontSize = btn7;
};
const btnN8 = () => {
    const btn8 = prompt("Виберіть тип шрифта");
    for (var i = 0; i < child.length; i++) {
        child[i].style.fontWeight = btn8;
    }
    p.style.fontWeight = btn8;
};
const btnN9 = () => {
    const btn9 = prompt("Виберіть стиль списку завданнь");
    const li = document.querySelectorAll("li");

    for (var i = 0; i < li.length; i++) {
        li[i].style.listStyleType = btn9;
    }
};
const btnN10 = () => {
    const link1 = prompt("Введіть свій улюблений сайт №1");
    const link2 = prompt("Введіть свій улюблений сайт №2");
    const link3 = prompt("Введіть свій улюблений сайт №3");

    const a1 = document.querySelector(".a1");
    const a2 = document.querySelector(".a2");
    const a3 = document.querySelector(".a3");

    a1.href = link1;
    a1.innerText = link1;
    a1.target = "_blank";

    a2.innerText = link2;
    a2.href = link2;
    a2.target = "_blank";

    a3.innerText = link3;
    a3.href = link3;
    a3.target = "_blank";
};
const btnN11 = () => {
    const btn11 = prompt("Введіть колір кнопок");
    const btn = document.querySelectorAll(".btn");

    for (var i = 0; i < btn.length; i++) {
        btn[i].style.background = btn11;
    }
};
