const actionBox = document.querySelector('div');
const text1 = document.querySelector('.text1');
const text2 = document.querySelector('.text2');
const text3 = document.querySelector('.text3');

Object.assign(actionBox.style,{height:'400px',width:'400px',background:'red',border:'10px double black',});
Object.assign(text1.style,{color:'white',margin:'20px 70px',});
Object.assign(text2.style,{color:'black',margin:'20px 50px',display:'none',});
Object.assign(text3.style,{color:'yellow',margin:'20px 60px',display:'none',});

actionBox.addEventListener('mousemove', ()=>{
    actionBox.style.background = 'yellow';
    text1.style.display = 'none';
    text2.style.display = 'block';
    text3.style.display = 'none';
    actionBox.style.border = '10px double blue';
});
actionBox.addEventListener('mouseleave', ()=>{
    actionBox.style.background = 'red';
    text1.style.display = 'block';
    text2.style.display = 'none';
    actionBox.style.border = '10px double black';
});
actionBox.addEventListener('mousedown', ()=>{
    actionBox.style.background = 'green';
    text2.style.display = 'none';
    text3.style.display = 'block';
    actionBox.style.border = '10px double purple';
});
actionBox.addEventListener('mouseup', ()=>{
    actionBox.style.background = 'yellow';
    text2.style.display = 'block';
    text3.style.display = 'none';
    actionBox.style.border = '10px double blue';
});