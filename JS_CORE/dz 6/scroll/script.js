const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const h3 = document.querySelector('h3');
const button = document.querySelector('button');
const right = document.querySelector('.right');

const offsetHeight = document.body.offsetHeight;
const clientHeight = document.documentElement.clientHeight;

window.addEventListener('scroll', event => {

    const currentScroll = window.scrollY;

    const visibleHeight = offsetHeight - clientHeight;

    const percentage = Math.round(currentScroll / visibleHeight * 100);

    console.log(`% ${percentage}`);
    console.log(`scroll ${currentScroll}`);

    const fixedH1 = 30 + percentage;
    const fexedH2 = percentage *2;
    const fixedH3 = percentage*2 - 40;
    const fixedH4 = 145 - percentage;

    if(currentScroll > 50){
        h1.style.fontSize = `${fixedH1}px`;
        h1.style.transition = `0.1s`;
    };

    if(percentage > 20 && percentage < 60){
        h3.style.marginLeft = `${fexedH2}px`;
        button.style.marginLeft = `${fexedH2}px`;
        button.style.width = `${percentage}%`;
    };

    if(percentage > 60){
        right.style.paddingRight = `${fixedH3}px`;
    };

    if(percentage > 85){
        h2.style.fontSize = `${fixedH4}px`;
    };

});

h1.addEventListener('mousemove',()=>{
    h1.style.color = 'brown';
});
h1.addEventListener('mouseleave',()=>{
    h1.style.color = 'black';
});
h1.addEventListener('click',()=>{
    window.scrollBy(0, 800);
});


h2.addEventListener('mousemove',()=>{
    h2.style.color = 'brown';
});
h2.addEventListener('mouseleave',()=>{
    h2.style.color = 'black';
});
h2.addEventListener('click',()=>{
    window.scrollTo(0, 0);
});