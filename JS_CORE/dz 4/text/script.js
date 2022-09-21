
const actionRed = document.querySelector('.red');
const actionGreen = document.querySelector('.green');
const actionBlue = document.querySelector('.blue');
const actionYellow = document.querySelector('.yellow');
const actionGrey = document.querySelector('.grey');
const actionOrange = document.querySelector('.orange');

actionRed.style.fontSize = '30px';
actionRed.addEventListener('click', ()=>{
    actionRed.style.color = 'red';
});
actionGreen.style.fontSize = '30px';
actionGreen.addEventListener('click', ()=>{
    actionGreen.style.color = 'green';
});
actionBlue.style.fontSize = '30px';
actionBlue.addEventListener('click', ()=>{
    actionBlue.style.color = 'blue';
});
actionYellow.style.fontSize = '30px';
actionYellow.addEventListener('click', ()=>{
    actionYellow.style.color = 'yellow';
});
actionGrey.style.fontSize = '30px';
actionGrey.addEventListener('click', ()=>{
    actionGrey.style.color = 'grey';
});
actionOrange.style.fontSize = '30px';
actionOrange.addEventListener('click', ()=>{
    actionOrange.style.color = 'orange';
});




// let colorLi = document.querySelectorAll('li');

// colorLi.forEach(color=>{
//     color.addEventListener('click',()=>{
//         color.style.color = color.innerText;
//     })
// });

