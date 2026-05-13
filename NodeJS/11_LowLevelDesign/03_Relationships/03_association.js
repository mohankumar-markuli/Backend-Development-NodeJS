class person {
    constructor(name) {
        this.name = name;
    }

    openAccount(bank) {
        console.log(`${this.name} opened an account at ${bank.name}`);
    }
}

class Bank {
    constructor(name) {
        this.name = name;
    }

    provideLoan(person) {
        console.log(`${this.name} provided a loan to ${person.name}`);
    }
}

// Main code

const jay = new Person('Jay');
const PNB = new Bank('PNB');

jay.openAccount(PNB);

PNB.provideLoan(jay);
