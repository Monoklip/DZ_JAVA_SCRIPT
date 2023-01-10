const exs16_1 = () => {
    let arr = [5, 6, 7, 8, 9];
    let sum = 0;

    arr.forEach(function(e) {
        sum += e;
    });

    console.log(sum);
};

// ==========================================

const exs16_2 = () => {
    let arr = [5, 6, 7, 8, 9];

    const result = arr.map(function (item) {
        return item * item;
    });

    console.log(result);
};

// ==========================================

const exs16_3 = () => {
    let arr = [
        { name: "Ivan", country: "Ukraine" },
        { name: "Petro", country: "Ukraine" },
        { name: "Miguel", country: "Cuba" },
    ];

    let result = arr.every(ukraine);

    function ukraine(el, index) {
        if (index === 0) {
            return true;
        } else {
            return el.country === "Ukraine";
        }
    };

    console.log(result);
};

// ==========================================

const exs16_4 = () => {
    let arr = [
        { name: "Ivan", country: "Ukraine" },
        { name: "Petro", country: "Ukraine" },
        { name: "Miguel", country: "Cuba" },
    ];

    let result = arr.some(ukraine);

    function ukraine(el, index) {
        if (index === 0) {
        } else {
            return el.country === "Cuba";
        }
    };

    console.log(result);
};

// ==========================================

const exs16_5 = () => {
    let arr = [1, "string", [3, 4], 5, [6, 7]];

    const result = arr.filter(fil);

    function fil(elem) {
        return Array.isArray(elem);
    };

    console.log(result);
};

// ==========================================

const exs16_6_1 = () => {
    let arr = [1, 2, 5, 0, 4, 5, 6];

    let answer = 0;

    arr.reduce(function (sum, elem) {
        if (elem == 0) {
            answer = sum;
        } else {
            return sum + elem;
        }
    });

    console.log(answer);
};

// ==========================================

const exs16_6_2 = () => {
    let arr = [1, 2, 3, 0, 4, 5, 6];

    let num = 1;

    arr.reduce(function (sum, elem) {
        if (sum > 10) {
            console.log(num);
            return;
        } else {
            num++;
            return sum + elem;
        }
    });
};

// ==========================================

const exs16_7 = () => {
    let arr = [1, -2, 3, 0, 4, -5, 6, -11];

    function func(elem) {
        return elem > 0;
    };

    const newArr = arr.filter(func);

    const result = newArr.map(function (elem) {
        return Math.sqrt(elem);
    });

    console.log(result);
};
