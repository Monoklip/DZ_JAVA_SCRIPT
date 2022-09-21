const nameUser = document.querySelector('.name');
const password = document.querySelector('.password');
const email = document.querySelector('.email');
const btn = document.querySelector('.btn');
const form1 = document.getElementById('form');
const form2 = document.querySelector('.form2');

const listInfo = document.querySelector('.list-info');
const OL = document.querySelector('.OL');

btn.addEventListener('click',()=>{

    if(nameUser.value != '' && password.value != '' && email.value != ''){

        const li = document.createElement('li');
        li.className = `li`;
        OL.append(li);

        const box = document.createElement('div');
        box.className = `box`;
        listInfo.append(box);

        const menuLogin = document.createElement('div');
        menuLogin.className = `menuLogin`;
        menuLogin.innerText = nameUser.value;

        const menuPassword = document.createElement('div');
        menuPassword.className = `menuPassword`;
        menuPassword.innerText = password.value;

        const menuEmail = document.createElement('div');
        menuEmail.className = `menuEmail`;
        menuEmail.innerText = email.value;

        const menuBtnEdit = document.createElement('div');
        menuBtnEdit.className = `menuBtnEdit`;

        const menuBtnDelete = document.createElement('div');
        menuBtnDelete.className = `menuBtnDelete`;

        const btnEdit = document.createElement('button');
        btnEdit.className = `btnEdit`;
        btnEdit.innerText = `Edit`;
    
        const btnDelete = document.createElement('button');
        btnDelete.className = `btnDelete`;
        btnDelete.innerText = `Delete`;

        menuBtnDelete.append(btnDelete);
        menuBtnEdit.append(btnEdit)
        box.append(menuLogin);
        box.append(menuPassword);
        box.append(menuEmail);
        box.append(menuBtnEdit);
        box.append(menuBtnDelete);

        nameUser.value = ``;
        password.value = ``;
        email.value = ``;

        // =========================================

        btnDelete.addEventListener('click',()=>{
            li.remove();
            box.remove();
        });

        btnEdit.addEventListener('click',()=>{

            const idName = document.getElementById('name');
            const idPassword = document.getElementById('password');
            const idEmail = document.getElementById('email');
            const idBtn = document.getElementById('btn');

            form1.style.display = `none`;
            form2.style.display = `block`;

            idName.value = menuLogin.innerText;
            idPassword.value = menuPassword.innerText;
            idEmail.value = menuEmail.innerText;

            idBtn.addEventListener('click',()=>{

                if(idName.value != '' && idPassword.value != '' && idEmail.value != ''){
                    
                    menuLogin.innerText = idName.value;
                    menuPassword.innerText = idPassword.value;
                    menuEmail.innerText = idEmail.value;
                    form1.style.display = `block`;
                    form2.style.display = `none`;
                }
                else{
                    alert('Не всі поля заповненні');
                }
            });
        });
    }
});