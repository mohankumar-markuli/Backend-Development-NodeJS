class Address {
    constructor(street, city) {
        this.street = street;
        this.city = city;
    }

    getCity() {
        return this.city;
    }

}

// Has - A relationship (Weak)
class Customer {
    constructor(name, permAddress, cAddress) {
        this.name = name;
        this.address = permAddress; // Permanent Address
        this.currentAddress = cAddress;
    }

    getAddress() {
        return this.cAddress;
    }
}


// Has-A (Weak)
// Consumer of address
class Order {

    constructor(customer) {
        this.customer = customer;
    }

    printShipingCity() {
        // console.log( this.customer.getAddress().getCity());
        // With the new changes this would return the permanent address as opposed current address
        console.log(this.customer.address.city);

        // console.log( this.customer.getAddress().getCity());
    }
}
