// A static method is a method that belongs to the class itself,
//  not to the objects (instances).

class User {
  constructor(name) {
    this.name = name;
  }

  static createGuest() {
    return new User("Guest");
  }
}

const guest = User.createGuest();

console.log(guest.name);