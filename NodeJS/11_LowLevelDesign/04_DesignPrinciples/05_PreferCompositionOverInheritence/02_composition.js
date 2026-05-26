class QuackBehaviour {
    quack() {
        console.log("Quack!");
    }
}

class SwimBehaviour {
    swim() {
        console.log("Swim!");
    }
}

class FlyBehaviour {
    fly() {
        console.log("Fly!");
    }
}

class LakeDuck extends Duck {
    constructor(name, quackBehaviour, swimBehaviour, flyBehaviour) {
        super(name);
        this.quackBehaviour = quackBehaviour;
        this.swimBehaviour = swimBehaviour;
        this.flyBehaviour = flyBehaviour;
    }

    performQuack() {
        this.quackBehaviour.quack();
    }

    performFly() {
        this.flyBehaviour.fly();
    }

    performSwim() {
        this.swimBehaviour.swim();
    }
}

class SqueakBehaviour {
    quack() {
        console.log("Squeak!");
    }
}

class RubberDuck extends Duck {
    constructor(name) {
        super(name, squeakBehaviour);
        this.squeakBehaviour = squeakBehaviour;

    }

    performSqueak() {
        this.squeakBehaviour.quack();
    }
}


// Follows LSP and it also follows DI