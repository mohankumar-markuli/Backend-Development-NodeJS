class Animal {
    // Private field (only accessible inside the class)
    #name;

    constructor(name, sound) {
        this.#name = name;          // Private
        this.sound = sound;         // Public
    }

    // Public method
    speak() {
        console.log(`${this.#name} says ${this.sound}`);
    }

    // Getter for name (read-only access)
    getName() {
        return this.#name;
    }

    // Setter for name (controlled access)
    setName(newName) {
        if (typeof newName === 'string' && newName.length > 0) {
            this.#name = newName;
        } else {
            console.log('Invalid name!');
        }
    }
}

class Mammal extends Animal {
    constructor(name, sound, type) {
        super(name, sound);
        this.type = type;
    }

    breathe() {
        console.log("I breathe from nose");
    }

    speak() {
        super.speak();
        // Call parent's speak and then add some other functionality
        console.log("I speak in a funny way");
    }
}


let mammal = new Mammal('Cat', "meow", "domestic");

mammal.speak();