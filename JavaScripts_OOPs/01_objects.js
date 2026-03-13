// OOPs organizes code into objects 
// objects in javascripts contain 1. properties(data)   2. methods (functions)

// Example

const person = {
    name: "Mohankumar",
    age: 28,
    greet(){
        console.log("hello "+this.name);    //this refers to current object
    }
};

// accessing object properties

console.log(person.name);    //dot notation
console.log(person["name"]); // Bracket notation


// callign object mmethods

person.greet();

// adding properties

person.location = "Bengaluru";
console.log(person);

// deleting properties

delete person.location;
console.log(person);

// nested Objects

person.address = {
    city: "Hassan",
    zip: 573201
}

console.log(person)

// accessing nested object

console.log(person.address.city)

console.log()
console.log("Example 2 -------------------------------")
// exercise

const student = {
    name: "Mohankumar",
    age: 23,
    gread:"A",
    study(){
        console.log("Studying.....");
    }
};

console.log(student)
console.log(student.name);
student.study();
delete student.age
console.log(student);
student.age = 30;
console.log(student.age);
console.log(student);