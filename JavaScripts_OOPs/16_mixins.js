// A Mixin is a way to add reusable behaviors to classes without using inheritance.

const canEat = {
  eat() {
    console.log("Eating")
  }
}

const canWalk = {
  walk() {
    console.log("Walking")
  }
}

// Exampele1
class Person {}

Object.assign(Person.prototype, canEat, canWalk)

const p1 = new Person()

p1.eat()
p1.walk()

//Example2

class Dog {}
class Human {}

Object.assign(Dog.prototype, canEat, canWalk)
Object.assign(Human.prototype, canEat, canWalk)

const dog = new Dog()
const human = new Human()

dog.eat()
human.eat()