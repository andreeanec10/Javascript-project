/*
    Task3 - spread operation
*/
// "Spread"operator permite extinderea unui iterabil(array, obiect) în locurile în care sunt așteptate 0+ argumente."

//sintaxa:
// var x = [...values];

let arr = [1,2,3];
let arr2 = [4,5];

//poate fi folosit pentru

// - expandare
// expandare = varsarea elementelor unui array in altul
// in loc de let arr3 = [arr,'c','d']; <=> [[1,2,3], 'c', 'd']
let arr3 = [...arr, 'c', 'd']
console.log("expandarea unui array: ");
console.log(arr3);

// - copiere valori
// in loc sa folosim let arr4 = arr; -> la orice modificare a lui arr4, arr va fi si el modificat
let arr4 = [...arr];
console.log("copierea unui array: ");
console.log(arr4);

// - concatenare
// in loc de arr5 = arr.concat(arr2);
let arr5 = [...arr, ...arr2];
console.log("concatenarea a 2 arrayuri: ");
console.log(arr5);

// - impreuna cu biblioteca Math
// in loc sa enumaram elementele in interiorul functiei
// ex: console.log(Math.min(1,2,3));
// putem folosi:
console.log("folosit cum Math");
console.log(Math.min(...arr));
//Nota: console.log(Math.min(arr)); => NaN


//Poate fi folosit si pentru obiecte
const user1 = {
    name: 'Jen',
    age: 22
};
console.log("copia unui obiect de tipul user");
const clonedUser = { ...user1 };
console.log(clonedUser);

const user2 = {
    name: "Andrew",
    location: "Philadelphia" 
};
console.log("merge intre 2 obiecte de tipul user");
const mergedUsers = {...user1, ...user2};
console.log(mergedUsers)
//Observatie: nu se ia de 2 ori atributul name