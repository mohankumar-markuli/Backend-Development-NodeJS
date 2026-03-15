class Animal {
  constructor(name) {
    this.name = name
  }

  speak() {
    console.log(this.name + " makes a sound")
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name)        // calls Animal constructor
    this.breed = breed
  }

  speak(){
    console.log("method overriding")
  }

  bark(){
    // calling parent method
    super.speak();
    console.log(this.breed + " barks")
  }
}

const dog1 = new Dog("Rocky","Labrador")

dog1.speak()
dog1.bark()