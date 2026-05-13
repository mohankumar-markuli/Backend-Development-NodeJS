// This class can never be initialized 
abstract class Vehicle {
    make: string;
    model: string;

    constructor(make: string, model: string) {
        this.make = make;
        this.model = model;
    }

    // Abstract Behaviour --> Only Signature, no implementation 
    abstract start():void;
    
    // Concrete behaviour --> It has implemenatation
    stop(): void {
        console.log(`Stopping the vehicle: ${this.make} ${this.model}`);
    }
}

class Car extends Vehicle {

    constructor(make: string, model:string) {
        super(make, model);
    }

    start(): void {
        console.log(`Starting the vehicle: ${this.make} ${this.model} by injecting diesel`);
    }

}

class Moped extends Vehicle {

    constructor(make: string, model:string) {
        super(make, model);
    }

    start(): void {
        console.log(`Starting the vehicle: ${this.make} ${this.model} by injecting kerosene`);
    }

}

class EV extends Vehicle {

    constructor(make: string, model:string) {
        super(make, model);
    }

    start(): void {
        console.log(`Starting the vehicle: ${this.make} ${this.model} using battery`);
    }

}