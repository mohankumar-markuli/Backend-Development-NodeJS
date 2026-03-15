// The Reflect API provides built-in methods to perform low-level object operations.

const obj = {}

obj.name            //get property
obj.name = "Alex"   // set property
delete obj.name     //delete property and check property

//  Reflect API exposes these operations as functions.

Reflect.get(obj, "name")
Reflect.set(obj, "name", "Alex")

// Example 1

const user = {
  name: "Alex"
}

console.log(Reflect.get(user, "name"))      //get property

Reflect.set(user, "age", 25)                // set property
console.log(user)


Reflect.deleteProperty(user, "name")        //delete property
console.log(user)

console.log(Reflect.has(user, "name"))      // check property

Reflect.set(user, "name", "Mohan")                // set property
console.log(user)



// Reflect API can be used in proxy

const proxy = new Proxy(user, {
  get(target, prop) {
    console.log("Accessed:", prop)
    return Reflect.get(target, prop)
  }
})

console.log(proxy.name)