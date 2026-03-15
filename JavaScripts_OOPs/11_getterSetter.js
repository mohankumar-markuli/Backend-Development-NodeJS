// Getters and Setters allow us to control how properties are accessed and modified.

/* But sometimes we want to:
    - validate data
    - transform data
    - protect internal values
*/

class User {

    set name(value) {
        this._name = value.toUpperCase()
    }
    get name() {
        return this._name
    }

    set age(value) {
        if (value < 0) {
            console.log("Invalid age")
            return
        }
        this._age = value
    }
    get age() {
        return this._age
    }
}
const user1 = new User()
user1.name = "Mohan"
user1.age = -5
user1.age = 20

console.log(user1)

