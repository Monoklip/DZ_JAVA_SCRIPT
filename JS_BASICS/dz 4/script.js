


// dz.4  Завдання-1


function exs4_1() {

    let parol = 'logos';
    let i = 5;
    let answer;
    while(i > 0 && parol!=answer) {
        i--;
        answer = prompt ('Введіть пароль')
        if(parol == answer) {
            i = 0;
            alert('Запрошуємо на сайт!')
        }
        else if (i > 0) {
            alert(`Пароль невірний,залишилось спроб: ${i}`)
        }
        else  {
            alert('Будь ласка спробуйте пізніше')
        }
        console.log(i);
    }

}






// // dz.4  Завдання-2 частина-1


function exs4_2_1() {

    let f = prompt("Введіть число");

    let j = 1;
    let i = 1;
    while(i < f) {

        i++;
        j = j * i;

    }

    console.log(j);
    
    alert(j);
}




// dz.4  Завдання-2 частина-2


function exs4_2_2() {

    let i = 1000;

    while(i < 9999) {

        console.log(i);

        i+=3;
    }

}



// dz.4  Завдання-2 частина-3

function exs4_2_3() {

    let i = 1;
    let j = 1;

    while (j <= 55) {

        console.log(i);

        j++;

        i+=2;
    }

}



// dz.4  Завдання-2 частина-4

function exs4_2_4() {

    let i = 90;

    while(i >= 0) {

        console.log(i);

        i-=5;
    }

}


// dz.4  Завдання-2 частина-5

function exs4_2_5() {

    let i = 2;
    let j = 1;

    while(j <= 20) {

        console.log(i);

        j++;

        i*=2;
    }

}



// dz.4  Завдання-2 частина-6


function exs4_2_6() {

    let a = 2;

    while(a < 10000) {

        console.log(a);

        a = 2*a - 1;
    }

}



// dz.4  Завдання-2 частина-7


function exs4_2_7() {

    let i = -166;
    while(i < 100) {

        if (i > -100 && (i < -9 || i > 9)) {

            console.log(i);
        }

        i = 2*i + 200;
    }
}



// dz.4  Завдання-2 частина-8



function exs4_2_8() {

    let a = prompt("Число");
    let b = prompt("Степінь")
  
    let n = a;
    
    let i = 1;

    while(i < b) { 
        i++ ;
        n *= a;
    }
    alert(n);
}
