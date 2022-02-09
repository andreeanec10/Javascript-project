/*
    Task5 - arrays: accesor, iteration, mutator methods
*/
//array = obiect high-level de tip lista

//accessor => creeaza o noua copie modificata a originalului, fara afectarea acestuia

// concat() -> concatenare array-uri
// join() -> creeaza un string cu elemetele concatenate ale array-ului
// slice(start, end(optional)) -> copiaza o bucata din array
// indexOf()
// lastIndexOf()

//iteration
//forEach(callback_fun_used_for_each_elem)
//map()
//filter(boolean_fun) -> creeaza un nou array cu elemetele care trec conditia din functie
//reduce() sau reduceRight()
    //reduce() ia elementele de la stanga la dreapta
    //exemplu de utilizare la calcularea sumei elementelor unei matrice
//every() -> verifica daca toate elementele din array satisfac conditiile din functie
//some() -> verifica daca unele elementele din array satisfac conditiile din functie
//indexOf() -> cauta prima aparitie a unui element in array si returneaza indexul
//lastIndexOf() -> cauta ultima aparitie a unui element in array si returneaza indexul
//find() -> returneaza primul element care satisface conditia precizata in functie
//findIndex() -> returneaza indexul primului element care satisface conditia precizata in functie
//entries() -> creeaza un fel de dictionar cheie-valoare
//keys() -> returneaza un array cu cheile array-ului(indexii)
//from() -> returneaza un array din ce este trimis ca parametru


//mutator methods -> change the array objects
var myArray = ["Harry", "Tom", "Jerry", "Mike"]; 
//Unshift()
console.log("Unshift method == add elem at the begining of the array");
myArray.unshift('Alex')
console.log(myArray);
//Shift()
console.log("Shift method == remove first elem from array");
myArray.shift()
console.log(myArray);
//Push()
console.log("Add element");
myArray.push('Adam')
console.log(myArray);
//Pop()
console.log("Remove element from last position");
myArray.pop()
console.log(myArray);
//Reverse()
console.log("Reverse method:");
console.log(myArray.reverse());
//Sort()
console.log("Sort method:");
console.log(myArray.sort());
//Splice()
// semnatura: array.splice(index_location, no_of_values_to_be_deleted, new_items_to_add(optional));
console.log("Remove element from position 1");
myArray.splice(1, 1)
console.log(myArray);
