const courses = require('../models/coursesModel').courses;

const getAllCourse = (req, res) => {
    console.log(req.query);
    res.send(courses);
}

const getCourseById = (req, res) => {
    console.log(req.params);
    const course = courses.find(c => c.id === parseInt(req.params.courseId));
    if (!course) {
        return res.status(404).send("Course with given id not found");
    }
    res.send(course);
}

const createCourse = (req, res) => {
    console.log(req.body);
    res.send("Course created successfully");
}

module.exports = { getAllCourse, getCourseById, createCourse };