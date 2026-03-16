const express = require('express');

const app = express(); //instance of express

// data
const courses = [
    {
        id: 1,
        name:'node.js',
        rating: 4.5,
        description: "Learn Node JS",
        instructor: "Mohan",
        difficulty: "Beginner",
        price: 200
    },
    {
        id: 2,
        name:'react.js',
        rating: 4.5,
        description: "Learn React JS",
        instructor: "Mohan",
        difficulty: "Beginner",
        price: 200
    },
    {
        id: 3,
        name:'react.js',
        rating: 4.5,
        description: "Learn React JS",
        instructor: "Mohan",
        difficulty: "Beginner",
        price: 200
    }
]

// custom middleware - it will be executed only for the incoming requests on which it is used
const logger1 = (req,res,next) =>{
    console.log("Request received on logger 1: ",req.url);
    next();
}

const logger2 = (req,res,next) =>{
    console.log("Request received on logger 2: ",req.url);
    next();
}

const logger3 = (req,res,next) =>{
    console.log("Request received on logger 3: ",req.url);
    next();
}

// global middleware - it will be executed for all the incoming requests
app.use(logger3); 

//1. create a get api to send a response "Domain Page : Hello world!...."

app.get('/',(req,res) =>{
    res.send("Domain Page : Hello world!....")
})

// 2. create a get api to send details of all courses
app.get('/api/v1/courses',logger1,(req,res) =>{
    console.log(req.query);
    res.send(courses);
})

/* DRY principle - Don't repeat yourself 

app.get('/api/v1/courses/0',(req,res) =>{
    console.log(req.query);
    res.send(courses[0]);
})
app.get('/api/v1/courses/1',(req,res) =>{
    console.log(req.query);
    res.send(courses[1]);
})

*/

// 3. create a get api to send details of a course based on course id 
// which is passed as path parameter

app.get('/api/v1/courses/:courseId',[logger1,logger2],(req,res) =>{

    console.log(req.params);

    const course = courses.find(c => c.id === parseInt(req.params.courseId));
    if(!course) {
        return res.status(404).send("Course with given id not found");
    }

    res.send(course);
})

// start the server
app.listen(3000,() => {
    console.log("Express server up and running");
})

