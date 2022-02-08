/*
    Task4 - obiecte: iteratori si deep copy
*/

/*
    Iterator = orice obiect care implementeaza protocolul Iterator, avand metoda next() care returneaza un obiect
    cu 2 proprietati: valoare si boooleanul done
        -> range-ul poate fi de la 0 la Infinity
*/
//ex:
function makeRangeIterator(start = 0, end = Infinity, step = 1) {
    let nextIndex = start;
    let iterationCount = 0;

    const rangeIterator = {
       next: function() {
           let result;
           if (nextIndex < end) {
               result = { value: nextIndex, done: false }
               nextIndex += step;
               iterationCount++;
               return result;
           }
           return { value: iterationCount, done: true }
       }
    };
    return rangeIterator;
}

const it = makeRangeIterator(1, 10, 2);

let result = it.next();
while (!result.done) {
 console.log(result.value); // 1 3 5 7 9
 result = it.next();
}

console.log("Iterated over sequence of size: ", result.value); // [5 numbers returned, that took interval in between: 0 to 10]


/*
    Deep copy = se creaza o copie, fara ca viitoarele modificari ale sursei sa afecteze copia sau vice versa
*/
//convertim obiectul in json si apoi din json in obiect(in cazul obiectelor serializabile)
//ex: 
let ingredients_list = ["noodles",{"list":["eggs","flour","water"]}];
let ingredients_list_deepcopy = JSON.parse(JSON.stringify(ingredients_list));

// Change the value of the 'list' property in ingredients_list_copy.
ingredients_list_deepcopy[1].list = ["rice flour","water"]
// The 'list' property does not change in ingredients_list.
console.log(ingredients_list[1].list);
// Array(3) [ "eggs", "flour", "water" ]