
function exs_5_1() {

    let number = +prompt("Введіть число:");

    switch (number) {
        case 3:
        case 4:
        case 5:    
            alert("Весна");
            break;
        case 6:
        case 7:
        case 8:
            alert("Літо");
            break;
        case 9:
        case 10:
        case 11:
            alert("Осінь");
            break;
        case 12:
        case 1:
        case 2:
            alert("Зима");
            break;
        default:
            alert('Введіть чилсо від 1 до 12.')
            break;
    }
}


// ==============================================================



function exs_5_2() {
    let n = prompt("Введіть число");

    for (let i = 2; i < n ; i++) {
        if( n % i == 0) {
           alert("Це не просте число")
           break;
        }
        else if (i == n - 1) {
            alert("Молодець, це просте число");
        }
    }
}





// ==============================================================


function exs_5_3() {

    function maxNumber() {

        let max = arguments[0];
        for(let i = 0; i < arguments.length; i++) {
            if(i == 0) {
                max = +prompt('Введіть число');
            }
            let a = +prompt('Введіть наступне число')
            if(a > max) {
                max = a;
            }
        }
        console.log(max);
    }

    maxNumber(1,2,3);

}