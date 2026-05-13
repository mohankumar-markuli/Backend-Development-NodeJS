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
camary.injectFuel();
