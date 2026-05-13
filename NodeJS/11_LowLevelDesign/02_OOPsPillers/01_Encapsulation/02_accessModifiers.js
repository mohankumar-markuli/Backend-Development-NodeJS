class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    // private methods
    #injectFuel() {
        console.log("Injecting fuel to engine");
    }

    #igniteSparkPlug() {
        console.log("Adding fire to fuel");
    }

    // public methods
    start() {
        this.#injectFuel();
        this.#igniteSparkPlug();
        console.log(`${this.make} ${this.model} is starting...`);
    }

    drive(speed) {
        console.log(`${this.make} ${this.model} is driving at ${speed} km/h.`);
    }
}

const camary = new Car("Toyota", "Camary", 2003);

camary.start();

// Accessing private method from outside the class will result in an error
camary.injectFuel(); // Error: camary.injectFuel is not a function

// Accessing private method using the private method syntax will also result in an error
camary.#injectFuel();