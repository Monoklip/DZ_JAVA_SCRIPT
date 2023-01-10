const Balance = document.querySelector('.balance');
const Beer = document.querySelector('.beer');
const Wine = document.querySelector('.wine');
const Pepsi = document.querySelector('.pepsi');

let balance = 1000;
let beer = 100;
let wine = 50;
let pepsi = 80;

let priceBeer = 20;
let priceWine = 100;
let pricepepsi = 30;

let sum = 0;

Balance.textContent = `${balance} грн`;
Beer.textContent = `${beer} шт`;
Wine.textContent = `${wine} шт`;
Pepsi.textContent = `${pepsi} шт`;

const inputAll = document.querySelector('.inputAll');
const radioBeer = document.getElementById('beer');
const radioWine = document.getElementById('wine');
const radioPepsi = document.getElementById('pepsi');
const btnAdd = document.querySelector('.btn-add');
const monitorBuy = document.querySelector('.monitorBuy');

btnAdd.addEventListener('click',()=>{

    if(inputAll.value.trim() != ''){

        if(radioBeer.checked){
            beerbalance();
        }

        if(radioWine.checked){
            winebalance();
        }

        if(radioPepsi.checked){
            pepsibalance();
        }
    }
    if(inputAll.value == `` ){
        boxAlert.style.display = `block`;
        textAlert.textContent = `Вибачте, але ви не ввели "кількість" напою!`;
    }
    else if(!radioBeer.checked && !radioWine.checked && !radioPepsi.checked) {
        boxAlert.style.display = `block`;
        textAlert.textContent = `Вибачте, але ви не вибрали "вид" напою!`;
    }

    inputAll.value = ``;
});

const btnBuy = document.querySelector('.btn-buy');
const monitor = document.querySelector('.monitor');
const alertBtn = document.querySelector('.btn-close-alert');
const boxAlert = document.querySelector('.alert');
const textAlert = document.querySelector('.alert-text');

btnBuy.addEventListener('click',()=>{
    monitor.innerHTML = ``;
    monitor.innerHTML += `${monitorBuy.innerHTML}`;
    monitor.innerHTML += `<br>`;
    monitor.innerHTML += `Всього: ${sum} грн`;
    Balance.textContent = `${balance} грн`;
    Beer.textContent = `${beer} шт`;
    Wine.textContent = `${wine} шт`;
    Pepsi.textContent = `${pepsi} шт`;
    monitorBuy.textContent = ``;
    sum = 0;
});

function beerbalance(){

    if(radioBeer.checked && beer >= inputAll.value){
        monitorBuy.innerHTML += `Пиво: ${inputAll.value} шт.`;
        monitorBuy.innerHTML += `<br>`;
        beer -= inputAll.value;
        balance += inputAll.value * priceBeer;
        sum += inputAll.value * priceBeer;
    }
    else{
        boxAlert.style.display = `block`;
        textAlert.textContent = `Вибачте, але на складі залишилось Пива ${beer} штук.`;
    };
};

function winebalance(){

    if(radioWine.checked && wine >= inputAll.value){
        monitorBuy.innerHTML += `Вино: ${inputAll.value} шт.`;
        monitorBuy.innerHTML += `<br>`;
        wine -= inputAll.value;
        balance += inputAll.value * priceWine;
        sum += inputAll.value * priceWine;
    }
    else{
        boxAlert.style.display = `block`;
        textAlert.textContent = `Вибачте, але на складі залишилось Вина ${wine} штук.`;
    }
};

function pepsibalance(){

    if(radioPepsi.checked && pepsi >= inputAll.value){
        monitorBuy.innerHTML += `Пепсі: ${inputAll.value} шт.`;
        monitorBuy.innerHTML += `<br>`;
        pepsi -= inputAll.value;
        balance += inputAll.value * pricepepsi;
        sum += inputAll.value * pricepepsi;
    }
    else{
        boxAlert.style.display = `block`;
        textAlert.textContent = `Вибачте, але на складі залишилось Пепсі ${pepsi} штук.`;
    }
};

alertBtn.addEventListener('click', ()=>{
    boxAlert.style.display = `none`;
    textAlert.textContent = ``;
});