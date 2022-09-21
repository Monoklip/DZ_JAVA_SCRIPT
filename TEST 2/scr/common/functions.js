import { Name, Password} from './regexps.js';

function validinputName(value){
    if(value.match(Name)){
        return true;
    };
    return false;
};

function validinputPassword(value){
    if(value.match(Password)){
        return true;
    };
    return false;
};

function validate(fields){
    const filited = [...fields].filter(field => field.name);
    const result = filited.every(field => {
        switch(field.type){
            case 'text':
                return validinputName(field.value);
            case 'password':
                return validinputPassword(field.value);
            default:
                false;
        }
    });
    return result;
};

function registr(event){
    event.preventDefault();
};

function getCountTR(CountTR, CountTD, WidthOfTD, HeightOfTD, selectColorBorder, selectStyleBorder, WidthOfBorder){

    let result = [];

    const Table = document.createElement(`table`);
    Table.style.marginTop = `20px`;
    result.push(Table);

    for (let i = 1; i <= CountTR.value; i++) {

        const tr = document.createElement(`tr`);
        tr.style.display = `flex`;
        Table.append(tr);
    
        for(let j = 1; j <= CountTD.value; j++){
            const td = document.createElement(`td`);
            td.style.width = `${WidthOfTD.value}px`;
            td.style.height =`${HeightOfTD.value}px`;
            td.style.borderColor = `${selectColorBorder.value}`;
            td.style.borderStyle = `${selectStyleBorder.value}`;
            td.style.borderWidth = `${WidthOfBorder.value}px`;
            td.style.display = "flex";
            td.style.justifyContent = "center";
            td.style.alignItems = "center";
            tr.append(td);
            td.innerText = `TD`;
        }
    }
    return result;
};

function getList(Li, Type) {
    let result = [];

    for (let i = 1; i <= Li.value; i++) {
        const li = document.createElement(`li`);
        li.style.listStyleType = `${Type.value}`;
        li.style.marginTop = `10px`;
        li.innerText = `item`;
        li.append(i);
        result.push(li);
    }
    return result;
};

function getOlList(ol, Ol, Types, result) {
    for (let i = 1; i <= Ol.value; i++) {
        const li = document.createElement(`li`);
        ol.append(li);
        li.style.listStyleType = `${Types.value}`;
        li.style.marginTop = `10px`;
        li.innerText = `item`;
        li.append(i);
    }
    return result;
};

function validateName( Name, inputName, spanName ){
    if(!Name.test(inputName.value)){
        inputName.style.border = `1px solid red`;
        inputName.style.boxShadow = `0 0 5px 0 red`;
        spanName.style.color = `red`;
        spanName.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>`;
    }
    if(Name.test(inputName.value)){
        inputName.style.border = `1px solid green`;
        inputName.style.boxShadow = `0 0 5px 0 green`;
        spanName.style.color = `green`;
        spanName.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    }
};

function validatePassword( Password, inputPassword, spanPassword ){
    if(!Password.test(inputPassword.value)){
        inputPassword.style.border = `1px solid red`;
        inputPassword.style.boxShadow = `0 0 5px 0 red`;
        spanPassword.style.color = `red`;
        spanPassword.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>`;
    }
    if(Password.test(inputPassword.value)){
        inputPassword.style.border = `1px solid green`;
        inputPassword.style.boxShadow = `0 0 5px 0 green`;
        spanPassword.style.color = `green`;
        spanPassword.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    }
};

function loadFile(event, textMonitor) {
    const image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
    textMonitor.style.background = `url(${image.src})`;
    textMonitor.style.backgroundSize = `cover`;
};

export {
    validatePassword,
    validateName,
    getOlList,
    getList,
    getCountTR,
    registr,
    validate,
    loadFile,
};