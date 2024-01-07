
let carSize = ["s","m","l","xl"];
let carFuel = ["gas","disel"];

function refil(carFuel,carSize){

console.log('заправка для' + " " + carSize +  " " + 'авто, тип палива' + " " + carFuel);
}

refil(carFuel[1],carSize[1]);

//or

refil("disel","s");

// but then these arrays are not needed here. JS is very strange,I don`t understand how it can take string without any information about them.
//let carSize = ["s","m","l","xl"];
//let carFuel = ["gas","disel"];