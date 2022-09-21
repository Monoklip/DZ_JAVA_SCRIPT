
const box1 = document.querySelector('.box1');

box1.addEventListener('click',()=>{
    let url = prompt('');
    box1.style.background = `url(${url})`;
    box1.style.backgroundSize = `100% 100%`;
});

const box2 = document.querySelector('.box2');

box2.addEventListener('click',()=>{
    let url = prompt('');
    box2.style.background = `url(${url})`;
    box2.style.backgroundSize = `100% 100%`;
});

const box3 = document.querySelector('.box3');

box3.addEventListener('click',()=>{
    let url = prompt('');
    box3.style.background = `url(${url})`;
    box3.style.backgroundSize = `100% 100%`;
});