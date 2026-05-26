// DIP (Dependency Inversion Principle) states that high-level modules should not depend on low-level modules.
// Both should depend on abstractions. In this example,
//  we have an Engine interface that both the high-level CarDIP class and the low-level engine classes depend on.

interface Engine {
    start(): void;
}

class PetrolEngine1 implements Engine {
    start() {
        console.log("Petrol engine started");
    }
}

class CNGEngine implements Engine {
    start() {
        console.log("CNG engine started");
    }
}

class DieselEngine implements Engine {
    start() {
        console.log("Diesel engine started");
    }
}

// High Level Module
class CarDIP {
    private engine: Engine;

    constructor(engine: Engine) {
        this.engine = engine;
    }

    startCar() {
        this.engine.start();
        console.log("Car started");
    }
}

let petrolEngine = new PetrolEngine1();
let merc: CarDIP =  new CarDIP(petrolEngine)

