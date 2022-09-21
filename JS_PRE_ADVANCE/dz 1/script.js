function CoffeeMake(name, price, milliliters) {
    this.name = name;
    this.price = price;
    this.milliliters = milliliters;
}

CoffeeMake.prototype.on = function() {
    console.log(`Мені подобається пити ${this.name}, яке коштує ${this.price} грн і має ${this.milliliters} мілілітрів. Я купив ${this.nameCoffemaker} кавоварку за ${this.cost} грн і ${this. guarantee} гарантії`);
}

CoffeeMake.prototype.off = function() {
    console.log(`А я не люблю пити ${this.name} і ${this.price} грн це задорого,а ${this.milliliters} мілілітрів це мало для ${this.nameCoffemaker} кавомашини за ${this.cost}грн з ${this.guarantee} гарантії`);
}

function CoffeMasine( name, price, milliliters, nameCoffemaker, cost, guarantee) {
    CoffeeMake.call(this, name, price, milliliters);
    this.nameCoffemaker = nameCoffemaker;
    this.cost = cost;
    this.guarantee = guarantee;
}

CoffeMasine.prototype = Object.create(CoffeeMake.prototype);
// CoffeMasine.prototype.constructor = CoffeMasine;

const kapelna = new CoffeMasine('Americano', 30, 200, 'Kapelna', 1000, '10 years');
const rizhkova = new CoffeMasine('Latte', 25, 150, 'Rizhkova', 5000, '3 years');
const cavoMashine = new CoffeMasine('Capuchino', 40, 250, 'CavoMasine', 15000, '10 years');

console.log(kapelna);
console.log(rizhkova);
console.log(cavoMashine);

kapelna.on();
rizhkova.off();