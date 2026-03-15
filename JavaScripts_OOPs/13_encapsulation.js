class BankAccount {

     balance0 = 0;   //public filed

    // Private fields are variables inside a class that cannot be accessed from outside the class.
    #balance = 0    
    
    //private method
    #updateBalance(amount) {
        this.#balance += amount
    }

    deposit(amount) {
        this.#updateBalance(amount)
    }

    getBalance() {
        return this.#balance
    }
}

const acc = new BankAccount()

console.log(acc.balance0)   //not good practice

acc.deposit(500)
console.log(acc.getBalance())