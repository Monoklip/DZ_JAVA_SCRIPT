let exs_3_1 = () => {

    const arrCopy =  [1,2,3];

    const arr1 = arrCopy;

    const arr2 = arrCopy.concat([10,20]);

    console.log(arr1);
    console.log(arr2);

}


//=============================================================

let exs_3_2 =() => {

    function arrToString(arr) {
        return console.log(arr.join().split(','));
    }
    const arr1 = arrToString([1,2,3])
    const arr2 = arrToString([10,200,3333]) 
}


// =============================================================

const exs_3_3 = ()=> {

    function getLength(arr){

        const newArr = arr.map(lengths => lengths.length);
    
        return console.log(newArr);
    }

    const arr1 = getLength(['Ivan','Pavlo','Ira']);
    const arr2 = getLength(['Oleksiy','Andriana']);

}

// =============================================================

const exs_3_4 = () => {

    names = ["html","css","html","js","css","html","html"]; 

    let unique = [...new Set(names)];

    console.log(names);
    console.log(unique);           // Знайшов в інтернеті

}