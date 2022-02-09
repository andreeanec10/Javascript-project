/*
    Task9 - ES6 classes
*/
// clasele identice ca in Java la declarare si initializare
class Rectangle {
    // nu trebuie sa declaram de la inceput membrii clasei, dar ii initializam mai jos in constructor
    constructor(height, width) {
      this.height = height;         // un singur constructor
      this.width = width;
    }
    // Getter
    get area() {
      return this.calcArea();
    }
    // Method
    calcArea() {
      return this.height * this.width;
    }
  }
// clasa are mai multi constructori => eroare

// clasa nu trebuie sa fie statica, daca are membrii declarati statici
// membrii statici nu sunt vizibili inafara clasei in care au fost declarati
class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    static displayName = "Point";
    static distance(a, b) {
      const dx = a.x - b.x;
      const dy = a.y - b.y;
  
      return Math.hypot(dx, dy);
    }
  }
  
  const p1 = new Point(5, 5);
  const p2 = new Point(10, 10);
//   p1.displayName; // undefined
//   p1.distance;    // undefined
//   p2.displayName; // undefined
//   p2.distance;    // undefined
  
  console.log(Point.displayName);      // "Point"
  console.log(Point.distance(p1, p2)); // 7.0710678118654755

// simpla folosire a cuvatului 'this' in cadrul initializarii va duce la existenta doar a variabilelor undefine
// ex:
class Animal {
    speak() {
      return this;
    }
    static eat() {
      return this;
    }
  }

  class Rectanglee {
    #height = 0;    // declaratie campuri private
    #width;
    constructor(height, width) {
      this.#height = height;
      this.#width = width;
    }
  }

  let rect = new Rectanglee(5, 10);
  //console.log(rect.height); // eroare 

// pentru mostenire trebuie sa folosim neaparat 'super'
// class Animal {
//     constructor(name) {
//       this.name = name;
//     }
  
//     speak() {
//       console.log(`${this.name} makes a noise.`);
//     }
//   }
  
//   class Dog extends Animal {
//     constructor(name) {
//       super(name); // call the super class constructor and pass in the name parameter
//     }
  
//     speak() {
//       console.log(`${this.name} barks.`);
//     }
//   }

// sau mai putem si cu Object.setPrototypeOf
const Animal = {
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  };
  
  class Dog {
    constructor(name) {
      this.name = name;
    }
  }
  
  // If you do not do this you will get a TypeError when you invoke speak
  Object.setPrototypeOf(Dog.prototype, Animal);
  
  let d = new Dog('Mitzie');
  d.speak(); // Mitzie makes a noise.

// se poate suprascrie tipul unei clase folsind Symbol.species
class MyArray extends Array {
    // Overwrite species to the parent Array constructor
    static get [Symbol.species]() { return Array; }
  }
  
  let a = new MyArray(1,2,3);
  let mapped = a.map(x => x * x);
  
  console.log(mapped instanceof MyArray); // false
  console.log(mapped instanceof Array);   // true

// Mix-ins = abstract subclasses
// problema diamantului prezenta sii aici <=> mai multe clase nu pot mosteni mai multe clase

// o clasa nu poate fi redefinita


