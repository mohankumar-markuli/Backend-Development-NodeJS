const express = require('express');

const app = express(); //instance of express

// to parse the incoming request body in json format - (middleware)
// it will convert the incoming request body from json format to js object 
// and then we can access the data using req.body
app.use(express.json()); 

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

const logger = (req,res,next) =>{
    console.log("Request received on logger: ",req.url);
    next();
}

// global middleware - it will be executed for all the incoming requests
app.use(logger); 


// ----------------------------------------------- GET APIs -----------------------------------

//1. create a get api to send a response "Domain Page : Hello world!...."

app.get('/',(req,res) =>{
    res.send("Domain Page : Hello world!....")
})

// 2. create a get api to send details of all courses 
// using middleware

const getAllCourseHandeler = (req,res) =>{
    console.log(req.query);
    res.send(courses);
}

app.get('/api/v1/courses',getAllCourseHandeler);

// 3. create a get api to send details of a course based on course id 
// which is passed as path parameter

app.get('/api/v1/courses/:courseId',(req,res) =>{

    console.log(req.params);

    const course = courses.find(c => c.id === parseInt(req.params.courseId));
    if(!course) {
        return res.status(404).send("Course with given id not found");
    }

    res.send(course);
})

// ----------------------------------- POST APIs ------------------------------------

app.post('/api/v1/courses',(req,res) =>{
    console.log(req.body);
    res.send("Course created successfully");
})

// start the server
app.listen(3000,() => {
    console.log("Express server up and running");
})