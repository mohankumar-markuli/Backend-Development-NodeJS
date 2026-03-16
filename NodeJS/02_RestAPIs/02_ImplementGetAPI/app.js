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

//1. create a get api to send a response "Domain Page : Hello world!...."

app.get('/',(req,res) =>{
    res.send("Domain Page : Hello world!....")
})

// 2. create a get api to send details of all courses
app.get('/api/v1/courses',(req,res) =>{
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

app.get('/api/v1/courses/:courseId',(req,res) =>{
    console.log(req.params);
    const course = courses.find(c => c.id === parseInt(req.params.courseId));
    if(!course) {
        return res.status(404).send("Course with given id not found");
    }
    console.log(req.query);

    res.send(course);
})

// start the server
app.listen(3000,() => {
    console.log("Express server up and running");
})

