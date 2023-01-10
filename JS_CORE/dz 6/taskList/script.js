const btn = document.querySelector(".btn");
const inputField = document.querySelector(".text");
const list = document.querySelector(".down");

let listItems = [];

const removeElement = item => {
    if(listItems.length > 1) {
        listItems = listItems.filter(elem => elem !== item);
        updateList();
    }
    else {
        alert('Останній таск зі списку Ви не можете видалити');
    }
};

const updateList = () => {
    list.innerHTML = '';
    listItems.forEach(item => {
        list.append(item);
    });
};

const addItem = () => {
    const value = inputField.value;

    if(value.trim() != ''){
        const item = document.createElement('ol');
        const removeBtn = document.createElement('input');
        removeBtn.type = `checkbox`;
        removeBtn.style.marginRight = `20px`;

        removeBtn.addEventListener('click', () => removeElement(item));

        item.innerHTML += value;
        item.prepend(removeBtn);
        listItems.push(item);
        inputField.value = '';
        updateList();
    }
    else {
        alert('Пусте поле не можна добавити');
    }
};

btn.addEventListener('click', addItem);

inputField.addEventListener('keypress', event => {
    if(event.keyCode == 13) {
        addItem();
    }
});