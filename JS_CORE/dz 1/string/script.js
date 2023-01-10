

function exs_1_1() {

    let text = prompt("Введіть текст на перевірку кількості пробілів");

    let probil = text.split(' ');

    alert(`Ви ввели пробілів: ${probil.length - 1}`);
    
}


// ==============================================================


function exs_2_1() {

    let email = prompt("Введіть email");

    if(email.endsWith("@")) {
        alert(`Символ "@" не може завершувати email`);
    }
    else if(email.startsWith("@")) {
        alert(`Email не може починатись з символа "@"`);
    } 
    else if (email.indexOf("@") < 1) {
        alert(`Символ "@" відсутній`);
    }

}


// ==============================================================


function exs_3_1() {

    let text = prompt("Введіть текст для перевірки кількості слів 'html'");

    let textHtml = text.split('html');

    console.log(`Кількість введених слів 'html':${textHtml.length - 1}`);

}


// =============================================================


function exs_4_1() {

    let url = prompt("Введіть URL-адрес");

    if (url.startsWith("https://")) {
        alert(url.slice(8));
    }
    else if (url.startsWith("http://")) {
        alert(url.slice(7));
    }
    else { 
        alert(url);
    }

}

