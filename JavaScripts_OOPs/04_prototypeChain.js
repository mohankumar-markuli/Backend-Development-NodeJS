/*
Key Points About Prototype Chain

Every object has a prototype
Prototypes can also have prototypes
JavaScript searches up the chain
The chain always ends at null

*/

function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  console.log(this.name + " makes a sound");
};

const dog = new Animal("Dog");

dog.speak();

/* 
    dog (child)
    ↓
    Animal.prototype (parent)   // chacks for the methoad under Animal.prototype
    ↓
    Object.prototype  (grand-parent)  // some common inbuilt methods that can be used on objects
    ↓
    null
*/

console.log(Object.getPrototypeOf(dog))
console.log(Object.getPrototypeOf(Object.prototype))