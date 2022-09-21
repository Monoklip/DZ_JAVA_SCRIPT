
const dz1 = () =>{

    class Worker {
        constructor(name, surname, rate, days){
            this.name = name;
            this.surname = surname;
            this.rate = rate;
            this.days = days
        }
        getSalary(){
            return this.rate * this.days;
        }
    }

    const worker = new Worker('Ivan', 'Ivanov', 10, 31);
    console.log(worker.name);
    console.log(worker.surname);
    console.log(worker.rate);
    console.log(worker.days);
    console.log(worker.getSalary());
}


// =======================================================


const dz2 = () => {

    class MyString {
        constructor(name){
            this.name = name;
        }
        reverse(name){
            return name.split('').reverse().join('');
        }
        ucFirst(name){
            return name[0].toUpperCase() + name.slice(1);
        }
        ucWords(name){
           return name.split(' ').map(elem => elem[0].toUpperCase() + elem.slice(1));
        }
    }
    
    const str = new MyString();
    
    console.log(str.reverse('IVAN'));
    console.log(str.ucFirst('arsenal'));
    console.log(str.ucWords('arsenal arsenal arsenal juve milan'));
}


// =======================================================


const dz3 = () =>{

    class CoffeeMake {
        constructor( name, price, milliliters){
            this.name = name;
            this.price = price;
            this.milliliters = milliliters;
        }
        on(){
            console.log(`Мені подобається пити ${this.name}, яке коштує ${this.price} грн і має ${this.milliliters} мілілітрів. Я купив ${this.nameCoffemaker} кавоварку за ${this.cost} грн і ${this. guarantee} гарантії`);
        }
        off(){
            console.log(`А я не люблю пити ${this.name} і ${this.price} грн це задорого,а ${this.milliliters} мілілітрів це мало для ${this.nameCoffemaker} кавомашини за ${this.cost}грн з ${this.guarantee} гарантії`);
        }
    }

    class CoffeMasine extends CoffeeMake {
        constructor( name, price, milliliters, nameCoffemaker, cost, guarantee){
            super( name, price, milliliters);
            this.nameCoffemaker = nameCoffemaker;
            this.cost = cost;
            this.guarantee = guarantee;
        }
    }

    const user = new CoffeeMake('Amerikano', 25, 200, 'Kapelna');
    console.log(user);

    const kapelna = new CoffeMasine('Americano', 30, 200, 'Kapelna', 1000, '10 years');
    const rizhkova = new CoffeMasine('Latte', 25, 150, 'Rizhkova', 5000, '3 years');
    const cavoMashine = new CoffeMasine('Capuchino', 40, 250, 'CavoMasine', 15000, '10 years');

    kapelna.on();
    cavoMashine.off();
}