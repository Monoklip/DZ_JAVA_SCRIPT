const timer = document.querySelector('.times');
const dates = document.querySelector('.date');

setInterval(()=>{
    const date = new Date();
    const newMounth = date.getMonth()+1;
    const newDates = `${date.getDay() + '.' + newMounth + '.' + date.getFullYear() }`;
    dates.innerHTML = newDates;
},1000)

setInterval(()=>{
    const time = new Date();
    const newTime = `${time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds() }`;
    timer.innerHTML = newTime;
},1000)

const hourTimer = document.querySelector('.time-hour');
const minuteTimer = document.querySelector('.time-minute');
const secondTimer = document.querySelector('.time-second');
const milisecondTimer = document.querySelector('.time-milisecond');

const startBtnTimer = document.querySelector('.start');
const stopBtnTimer = document.querySelector('.stop');
const loopBtnTimer = document.querySelector('.loop');
const resetBtnTimer = document.querySelector('.reset');

let milisecond = 0;
let second = 0;
let minute = 0;
let hour = 0;
let interval;

startBtnTimer.addEventListener('click',()=>{
    clearInterval(interval,10);
    interval = setInterval(starTimer,10);
});

function starTimer(){
    milisecond++;
    if(milisecond <= 9){
        milisecondTimer.innerText = `0${milisecond}`;
    }
    if(milisecond > 9){
        milisecondTimer.innerText =`${milisecond}`;
    }
    if(milisecond > 99){
        second ++;
        secondTimer.innerText = `0${second}`;
        milisecond = 0;
        milisecondTimer.innerText =`${milisecond}`;
    }
    if(milisecond < 1){
        secondTimer.innerText = `00`;
    }
// =====================
    if(second <= 9){
        secondTimer.innerText = `0${second}`;
    }
    if(second > 9){
        secondTimer.innerText =`${second}`;
    }
    if(second > 59){
        minute ++;
        minuteTimer.innerText = `0${minute}`;
        second = 0;
        secondTimer.innerText =`${second}`;
    }
    if(second < 1){
        secondTimer.innerText = `00`;
    }
// =======================
    if(minute < 9){
        minuteTimer.innerText = `0${minute}`;
    }
    if(minute > 9){
        minuteTimer.innerText =`${minute}`;
    }
    if(minute > 59){
        hour++;
        hourTimer.innerText = `0${hour}`;
        minute = 0,
        minuteTimer.innerText =`${minute}`;
    }
    if(minute < 1){
        minuteTimer.innerText = `00`;
    }
// =======================
    if(hour < 9){
        hourTimer.innerText = `0${hour}`;
    }
    if(hour > 9){
        hourTimer.innerText =`${hour}`;
    }
    if(hour > 59){
        minute = 0,
        hourTimer.innerText =`${hour}`;
    }
    if(hour < 1){
        hourTimer.innerText = `00`;
    }
};

stopBtnTimer.addEventListener('click',()=>{
    clearInterval(interval);
});

resetBtnTimer.addEventListener('click',()=>{
    resetTimer(); 
    block.innerText = ` `;
});

function resetTimer(){
    clearInterval(interval);
    milisecond = 0;
    second = 0;
    minute = 0;
    hour = 0;
    
    secondTimer.textContent = `00`;
    minuteTimer.textContent = `00`;
    hourTimer.textContent = `00`;
    milisecondTimer.textContent = `00`;
};

const block = document.createElement('div');

loopBtnTimer.addEventListener('click',()=>{
    const result = document.querySelector('.right');
    block.innerHTML += `Результат:"${hour}:${minute}:${second}:${milisecond}"<br>`;
    result.append(block);
});

const btnPlus = document.querySelector(`.buttonplus`);
const btnMinus = document.querySelector(`.buttonminus`);
const monitor = document.querySelector('.monitor');

let n = 25;
let interval2;

btnPlus.addEventListener('click',()=>{
   n++;
   monitor.innerText = `${n}`;
});
btnMinus.addEventListener('click',()=>{
    n--;
    monitor.innerText = `${n}`;
});

const monMinute = document.querySelector('.monitorMinute');
const monSecond = document.querySelector('.monitorSecond');
const startBtnMon = document.querySelector('.startRight');
const stoptBtnMon = document.querySelector('.stopRight');
const resetBtnMon = document.querySelector('.resetRight');

startBtnMon.addEventListener('click',()=>{
    clearInterval(interval2,10);
    interval2 = setInterval(startMon,1000);
});

let sec = 0;

function startMon(){
    
    if (n >= 0 && sec >= 0 ){
        sec--;
        if(sec < 1){
            n--;
            monMinute.innerText = `0${n}`;
            sec = 59;
            monSecond.innerText =`0${sec}`;
        }
        if(sec <= 9){
            monSecond.innerText = `0${sec}`;
        }
        if(sec > 9){
            monSecond.innerText =`${sec}`;
        }
        
        // ============================

        if(n <= 9){
            monMinute.innerText = `0${n}`;
        }
        if(n > 9){
            monMinute.innerText =`${n}`;
        }
        if(n == 0 && sec <= 1){
            alert('Будильник');
        }
    }
};

stoptBtnMon.addEventListener('click',()=>{
    clearInterval(interval2);
});

resetBtnMon.addEventListener('click',()=>{
    clearInterval(interval2);
    sec = 0;
    n++;
    monMinute.innerText = `00`;
    monSecond.innerText = `00`;
});