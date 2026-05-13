// Everything is public

class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    injectFuel() {
        console.log("Injecting fuel to engine");
    }

    igniteSparkPlug() {
        console.log("Adding fire to fuel");
    }

    start() {
        this.injectFuel();
        this.igniteSparkPlug();
        console.log(`${this.make} ${this.model} is starting...`);
    }

    drive(speed) {
        console.log(`${this.make} ${this.model} is driving at ${speed} km/h.`);
    }
}

const camary = new Car("Toyota", "Camary", 2003);

camary.start();

// Accessing public method from outside the class is allowed
// problem - hence encapsulation is required to hide the internal details of the class and only expose the necessary methods to the outside world
camary.injectFuel();
