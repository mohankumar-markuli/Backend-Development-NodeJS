// A Proxy allows you to intercept and control operations on an object.
// const proxy = new Proxy(targetObject, handler)

// target object
const user = {
    name: "Alex"
}

// the proxy object acts like a gatekeeper for the user object

const proxy1 = new Proxy(user, {
    get(target, prop) {
        console.log("Accessing property:", prop)
        return target[prop]
    }
})
console.log(proxy1.name)


// target --> {name:"Alex"}
// prop --> [name]   ---> properties of object

const proxy2 = new Proxy(user, {
  set(target, prop, value) {
    console.log(`Setting ${prop} = ${value}`)
    target[prop] = value
  }
})

proxy2.name = "John"