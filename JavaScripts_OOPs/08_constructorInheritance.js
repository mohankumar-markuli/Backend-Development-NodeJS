/*
    - parent constructor
    - child constructor
    - Inheriting parent properties
    - Inheriting parent methods
    - fixing the constructor refernece
*/

// 1. parent constructor

function Animal(name) {
    this.name = name
}

Animal.prototype.speak = function () {
    console.log(this.name + " makes a sound");
};

// 2. child constructor
function Dog(name, breed) {

    // 3. Inheriting parent constructor
    Animal.call(this, name);
    this.breed = breed;
}

// 4. Inheriting parent methods
Dog.prototype = Object.create(Animal.prototype);

// 5. fixing constructor reference

Dog.prototype.constructor = Dog;

const dog1 = new Dog("Rockey","Labrador");

console.log(dog1);