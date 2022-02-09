/*
    Task6 - promise & callback
*/

// promise = un 'proxy' pentru o valoare care nu este cunoscuta la momentul apelului
//         = folosit la actiunile asincrone
//         = poate avea succes sau sa returneze o eroare
//  	   = folosit mai mult la metodele asincrone
/*
Starile unei promisiuni:
    + pending: stare initiala
    + fulfiled <=> s-a executat cu succes
    + rejected <=> operatia a esuat

promise
    .then(callback_fun, reject_handler(optional daca se foloseste si un bloc catch)) -> nu este recomandat sa tratam erorile in acest bloc
    .catch()
    .finally() -> returneaza o noua promisiune dupa ce cea initiala este terminata

ordinea promisiunilor pe stiva de apeluri(din interior spre exterior):
    (promise 4, ( promise 3, (promise 2, (promise 1))))

*/

// callback = functie pasata unei alte functii ca argument
//          = folosit mai mult la functiile asincrone
