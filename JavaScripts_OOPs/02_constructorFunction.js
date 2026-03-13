// before ES6- objects were commonly created using constructor function

/*

// this task of creating multiple similar object is a repetative task

const user1 = {name:"Mohankumar",age:28};
const user2 = {name:"Markuli",age:30};
const user3 = {name:"Chandrayigowda",age:62};
*/


// hence the Constructor function acts as a blueprint for creating objects

function User(name,age){
    this.name = name
    this.age = age;

    // adding method to a constructor
    this.greet = function(){
        console.log("Hello " + this.name)
    }
}

const user = User("Mohankumar",27)
//acts as a normal function expression calling function User returning nothing  
console.log(user)

// if a function name starts with capital letter then its a constructor naming convension used
// must use new keyword for creating that


const user1 = new User("Mohankumar",27)
console.log(user1)
// user constructor ---> new -------> creates object -------->{name:"Mohankumar",age:27}

const user2 = new User("Markuli",30)
console.log(user2)

// calling methods in constructor
user1.greet();