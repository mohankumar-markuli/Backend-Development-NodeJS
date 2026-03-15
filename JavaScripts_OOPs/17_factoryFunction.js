// the function that creates and return an object is known as factory function

// ------------------------------------------------Example 1
function createUser(name, age) {
  return {
    name,
    age,
    greet() {
      console.log("Hello " + name)
    }
  }
}

const user1 = createUser("Alex", 25)
user1.greet()


// --------------Example 2 (Factory function vs constructor)
function createUser(name) {
  return { name }
}

const u = createUser("Alex")

// -------------------Example 3 ()
function createLogger() {
  return {
    log(msg) {
      console.log(msg)
    }
  }
}

const logger = createLogger()
logger.log("Hello")

//------------------Example 4 (Factory with encapsulation)

function createCounter() {
  let count = 0

  return {
    increment() {
      count++
    },
    getCount() {
      return count
    }
  }
}

const counter = createCounter()
counter.increment()
counter.increment()
console.log(counter.getCount())


// --------------------Example 5 (Factory function with composition)

function createDog(name) {
  return {
    name,
    bark() {
      console.log("Woof!")
    }
  }
}

//--------------------------Example 6 (Backend services)

function createUserService(database) {
  return {
    getUser(id) {
      return database.findUser(id)
    }
  }
}

const userService = createUserService(db)

