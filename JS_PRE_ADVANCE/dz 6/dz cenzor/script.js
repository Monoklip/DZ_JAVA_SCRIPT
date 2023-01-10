const addText = document.querySelector('.text-push');
const addBtn = document.querySelector('.addBtn');
const resetBtn = document.querySelector('.resetBtn');
const inputText = document.querySelector('.inuputText');
const cenzorBtn = document.querySelector('.cenzorBtn');
const textarea = document.querySelector('textarea');

const worldBan = [];

addBtn.addEventListener('click', ()=>{
    worldBan.push(inputText.value.trim());
    addText.textContent = worldBan;
    inputText.value = ``;
});

resetBtn.addEventListener('click', ()=>{
    worldBan = [];
    addText.textContent = ``;
});

cenzorBtn.addEventListener('click', ()=>{

    const text = [];

    text.push(textarea.value);
    const ban = text.toString().split(' ');
    console.log(worldBan);
    console.log(ban);

    for(let i = 0; i < worldBan.length; i++){

        for(let j = 0; j < ban.length; j++){

            if(ban[j] === worldBan[i]){
                ban[j] = `${'*'.repeat(ban[j].length)}`;
            }
        }
    }

    textarea.value = ban.join(' ');
});