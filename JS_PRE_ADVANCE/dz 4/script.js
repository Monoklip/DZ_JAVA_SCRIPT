const firstName = document.querySelector('.firstNameInput');
const lastName = document.querySelector('.lastNameInput');
const email = document.querySelector('.emailInput');
const password = document.querySelector('.passwordInput');
const btnSingUp = document.querySelector('.btnSingUp');
const error = document.querySelector('.error');
const error2 = document.querySelector('.error2');
const btnSingIn2 = document.querySelector('.btnSingIn2');
const containerSingUp = document.querySelector('.containerSingUp');
const containerSingIn = document.querySelector('.containerSingIn');
const emailInput2 = document.querySelector('.emailInput2');
const passwordInput2 = document.querySelector('.passwordInput2');

let firstNameRegex = /^[A-Z]{1}[a-z]{1,20}/;
let lastNameRegex = /^[A-Z]{1}[a-z]{1,20}/;
let emailRegex = /[\w\.-]@[a-z]/;
let passwordRegex = /\w{4,20}/;

const user = [];
const provirka = [];

btnSingUp.addEventListener('click',()=>{

    if(firstName.value.match(firstNameRegex) && lastName.value.match(lastNameRegex) && email.value.match(emailRegex)  && password.value.match(passwordRegex)){
        
        JSON.parse(localStorage.getItem('Users'));

        const pro = provirka.some(elem => elem === email.value);

        if(pro == false){
            user.push({firstname: firstName.value, lastname: lastName.value, email: email.value, password: password.value});
            localStorage.setItem('Users', JSON.stringify(user));
            provirka.push(email.value);
            firstName.value = ``;
            lastName.value = ``;
            email.value = ``;
            password.value = ``;
        }
        else{
            alert('Користувач під таким E-mail вже зареєстрований');
        }
    }
    else{
        alert('Неправильно введені дані')
    }
});

document.querySelector('.btnSingIn').addEventListener('click',()=>{
    containerSingUp.style.display = `none`;
    containerSingIn.style.display = `block`;
});

document.querySelector('.btnSingUp2').addEventListener('click',()=>{
    containerSingUp.style.display = `block`;
    containerSingIn.style.display = `none`;
});

btnSingIn2.addEventListener('click',()=>{

    const containerUser = document.querySelector('.containerUser');
    const nameUserMonitor = document.querySelector('.nameUserMonitor');
    const emailUserMonitor = document.querySelector('.emailUserMonitor');

    if(emailInput2.value != '' && passwordInput2.value != ''){

        const person = JSON.parse(localStorage.getItem('Users'));

        for(let i = 0; i < person.length; i++){

            if(emailInput2.value === person[i].email && passwordInput2.value === person[i].password){

                containerSingIn.style.display = `none`;
                error2.style.visibility = `hidden`;
                containerUser.style.display = `block`;
                nameUserMonitor.textContent = `${person[i].firstname} ${person[i].lastname}`;
                emailUserMonitor.textContent = `${person[i].email}`;
                break;
            }
            else{
                error2.style.visibility = `visible`;
                error2.textContent = `Incorrect email or password`;
            }
        };
    }
    else{
        alert('Заповніть всі поля');
    };

    document.querySelector('.btnUserClose').addEventListener('click', ()=>{
        containerUser.style.display = `none`;
        containerSingIn.style.display = `block`;

        emailInput2.value = ``;
        passwordInput2.value = ``;
    });
});
