/*
    Task8 - closures
*/

// daca avem o variabila intr-o functie, o putem folosi si in interiorul unei inner functii
//ex:
function init() {
    var name = 'Mozilla'; // name is a local variable created by init
    function displayName() { // displayName() is the inner function, a closure
      alert(name); // use variable declared in the parent function
    }
    displayName();
  }
  init();

//o inner functie poate fi folosita si dupa treminarea functiei de care apartine
//ex:
function makeFunc() {
    var name = 'Mozilla'; // variabila mai este inca vizibila la executia functiei myFunc()
    function displayName() {
      alert(name);
    }
    return displayName;
  }
  
  var myFunc = makeFunc();
  myFunc();

// functiile similare ca la racket/haskell
function makeAdder(x) { // = function factory
    return function(y) {
      return x + y;
    };
  }
  
  var add5 = makeAdder(5); // = closure, 5 = lexical environment
  var add10 = makeAdder(10); // = closure
  
  console.log(add5(2));  // 7
  console.log(add10(2)); // 12

//Javascript nu are modificatorul de acces private
//dar, il poate simula prin 'closures'
//ex. pentru o variabila pe care nu dorim sa o accesam sau sa o modificam in mod direct
var makeCounter = function() {
    var privateCounter = 0; //nu poate fi modificata in mod direct
    function changeBy(val) {
      privateCounter += val;
    }
    return {
      increment: function() {
        changeBy(1);
      },
  
      decrement: function() {
        changeBy(-1);
      },
  
      value: function() {
        return privateCounter;
      }
    }
  };

