
// Завдання 1

const exs_6_1 =() => {

    let n = prompt("Введіть число")

    let a = 1;
    let b = 1;
    sum = 0;

    console.log(a);
    console.log(b);

    for (let i = 3; i <= n; i++) {

        sum = a + b;

        a = b;

        b = sum;

        console.log(sum);
    }

}


// ======================================================

// Завдання 2


function exs_6_2_1() {

    let n = +prompt(" Кількість чисел прогресії");
    let b = +prompt("Знаменник");
    let sum = 0;
    let a = 1;

    for(let i = 1; i <= n; i++) {

        console.log(a);
        sum = a +sum;
        a = a*b;

    }
    console.log(`Сума: ${sum}`);    
}




function exs_6_2_2() {

    let n = +prompt(" Кількість чисел прогресії");
    let q = +prompt("Знаменник");
    let sum = 0;
    let b = 1;

     n = b * (1-q**n) / (1-q)

    console.log(n);

}





// ======================================================

// Завдання 3



const exs_6_3 = () => {

    let a = +prompt("Введіть число від");
    let b = +prompt("Введіть число до");    

    for (let i = a; i < b; i++) {

        for ( let n = 2; n < b; n++) {

            if(i % n === 0 ) {
                break;
            }

            else if (n == i - 1) {
                console.log(i);
            }
        }
    }
}

