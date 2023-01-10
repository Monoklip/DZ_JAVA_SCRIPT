let firstName =/^[A-Z]{1}[a-z]{1,20}/;
let lastName =/^[A-Z]{1}[a-z]{1,20}/;
let email =/[\w\.-]@[a-z]/;
let password =/\w{8,20}/;

const {form} = document.forms;

const btn = document.querySelector('.btn');

const checkCheckbox = type =>['checkbox'].includes(type);

function validFirstName(value){
    if(value.match(firstName)){
        return true;
    };
    return false;
};

function validLastName(value){
    if(value.match(lastName)){
        return true;
    };
    return false;
};

function validEmail(value){
    if(value.match(email)){
        return true;
    };
    return false;
};

function validPassword(value){
    if(value.match(password)){
        return true;
    };
    return false;
};

function validCheckbox(value) {
    return value;
};

function validate(fields){
    const filited = [...fields].filter(field => field.name);
    const check = filited.every(field => {
        switch(field.type){
            case 'text':
                return validFirstName(field.value);
            case 'email':
                return validEmail(field.value);
            case 'password':
                return validPassword(field.value);
            case 'checkbox':
                return validCheckbox(field.checked);
            default:
                false;
        }
    });
    return check;
};

function registr(event){
    event.preventDefault();
    const formFields = form.elements;
    const values = {};

    for(const field of formFields) {
        const { name, value, checked, type } = field;

        if(name) {
            values[name] = checkCheckbox(type) ? checked : value;
        }
    };
    console.log('values:', values);
};

form.addEventListener('submit', registr);

for(const field of form.elements) {
    field.addEventListener('change', () => {
        btn.disabled = !validate(form.elements);
    });
};

const header = document.querySelector('header');
const okno = document.getElementById(`okno`);

btn.addEventListener('click',()=>{
    header.style.display = `none`;
    okno.style.display = `block`;
});

const alertButton = document.querySelector('.alert-button');
const inFirstName = document.querySelector('.first-name');
const inLastName = document.querySelector('.last-name');
const inEmail = document.querySelector('.email');
const inPassword = document.querySelector('.password');
const inFCheckbox = document.querySelector('.checkbox');

alertButton.addEventListener('click',()=>{
    header.style.display = `block`;
    okno.style.display = `none`;

    inFirstName.value = ``;
    inLastName.value = ``;
    inEmail.value = ``;
    inPassword.value = ``;
    inFCheckbox.checked = ``;

    inFirstName.style.borderColor = `black`;
    inFirstName.style.boxShadow = `none`;
    span.innerHTML = ``;
    inLastName.style.borderColor = `black`;
    inLastName.style.boxShadow = `none`;
    span2.innerHTML = ``;
    inEmail.style.borderColor = `black`;
    inEmail.style.boxShadow = `none`;
    span3.innerHTML = ``;
    inPassword.style.borderColor = `black`;
    inPassword.style.boxShadow = `none`;
    span4.innerHTML = ``;

    btn.disabled = true;
});

const span = document.querySelector('.span');
const span2 = document.querySelector('.span2');
const span3 = document.querySelector('.span3');
const span4 = document.querySelector('.span4');

function validateFirstName(){
    if(!firstName.test(inFirstName.value)){
        inFirstName.style.boxShadow = `0 0 10px 0 red`;
        inFirstName.style.borderColor = `red`;
        span.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>`;
        span.style.color = `red`;
    }
    if(firstName.test(inFirstName.value)){
        inFirstName.style.boxShadow =  `0 0 10px 0 green`;
        inFirstName.style.borderColor = `green`;
        span.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
        span.style.color = `green`;
    }
}
function validateLastName(){
    if(!lastName.test(inLastName.value)){
        inLastName.style.boxShadow = `0 0 10px 0 red`;
        inLastName.style.borderColor = `red`;
        span2.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>`;
        span2.style.color = `red`;
    }
    if(lastName.test(inLastName.value)){
        inLastName.style.boxShadow = `0 0 10px 0 green`;
        inLastName.style.borderColor = `green`;
        span2.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
        span2.style.color = `green`;
    }
}
function validateEmail(){
    if(!email.test(inEmail.value)){
        inEmail.style.boxShadow = `0 0 10px 0 red`;
        inEmail.style.borderColor = `red`;
        span3.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>`;
        span3.style.color = `red`;
    }
    if(email.test(inEmail.value)){
        inEmail.style.boxShadow = `0 0 10px 0 green`;
        inEmail.style.borderColor = `green`;
        span3.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
        span3.style.color = `green`;
    }
}
function validatePassword() {
    if(!password.test(inPassword.value)){
        inPassword.style.boxShadow = `0 0 10px 0 red`;
        inPassword.style.borderColor = `red`;
        span4.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>`;
        span4.style.color = `red`;
    }
    if(password.test(inPassword.value)){
        inPassword.style.boxShadow = `0 0 10px 0 green`;
        inPassword.style.borderColor = `green`;
        span4.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
        span4.style.color = `green`;
    }
};