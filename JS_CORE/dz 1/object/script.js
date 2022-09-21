
const exs_1_1 = () => {
    
    let person = {
        firstName : 'Ivan',
        secondName : 'Ivanov',
    };

    person.showData =()=> {
        console.log(person.firstName, person.secondName)
    };

    person.showData();
    
    let newPerson = {
        firstName : 'Ivan',
        secondName : 'Ivanov',
    };

    newPerson.firstName = 'Petro';
    newPerson.secondName = 'Petriv';

    newPerson.showData =()=>{
        console.log(newPerson.firstName, newPerson.secondName)
    };

    newPerson.showData();

}



// =============================================================

const exs_1_2 = () => {

    let MyMath = {
        a:5,
        b:2,
    };
   
    MyMath.sum = function () { 
        console.log(MyMath.a + MyMath.b);
    }
    MyMath.multiplication = function () {
        console.log(MyMath.a * MyMath.b);
    }
    MyMath.division = function () {
        console.log(MyMath.a / MyMath.b);
    }
    MyMath.subtraction = function () {
        console.log(MyMath.a - MyMath.b);
    }
    
    MyMath.sum();
    MyMath.multiplication();
    MyMath.division();
    MyMath.subtraction();
    
}