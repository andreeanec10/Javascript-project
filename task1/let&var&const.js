/*
    Task2 - var, let, const
*/

// let
// - este variabila vizibila in interiorul unui bloc
{
    let x = 20; // = 20
    {
        let x = 'Ana'; //Ana
        console.log(x);
    }
    console.log(x);
}
// - nu pot fi redefinite in interiorul aceluiasi bloc variabilele
{
    let a = 10;
    //let a = 12; // da eroarea: Cannot redeclare block-scoped variable 'a'.ts(2451)
    console.log(a);
}
// - nu stie sa caute o variabila in program(hoisting)
    //daca a fost apelata o metoda cu o variabila inainte de a o declara, returneaza eroare
    // console.log(b);
    // let b;


//var
// - este variabila vizibila in interiorul functiilor
function greet() {
    // variable a can be used here
    var a = 'hello';
    console.log(a);
}
var a = 'hi';
greet();
console.log("the \'a\' from the outside of the function is " + a);
// - pot fi redefinite in interiorul aceluiasi bloc orice variabila
{
    var a = 10;
    var a = 12;
    console.log(a);
}
// - nu stie sa caute o variabila in program(hoisting)
    //daca a fost apelata o metoda cu o variabila inainte de a o declara, returneaza undefine
    console.log(b); //undefine
    var b = 6;



//const (similar cu let)
// - variabilele vizibile doar in interiorul blocurilor
{
    const x = 20; // = 20
    {
        const x = 'Ana'; //Ana
        console.log(x);
    }
    console.log(x);
}
// - nu poate fi redeclarat sau modificata valoarea
{
    const x = 20;
    //x = 'Ana'; //eroare

    console.log(x);
}
// - nu poate fi declarata o variabila fara a fi initializata
//const x;
//x = 'Ana'; //eroare

// const defineste o referinta constanta catre o valoare
// nu putem modifica valoarea unei variabile const, dar putem modifica elementele
// unui const array, dar nu putem sa il redefinim(la fel se aplica si atributelor unui obiect)
