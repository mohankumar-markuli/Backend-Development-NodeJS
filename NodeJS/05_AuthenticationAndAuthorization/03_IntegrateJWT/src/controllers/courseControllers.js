const courses = require('../models/coursesModel').courses;

const courseModel = require("../models/courseModel");

const createCourse = async (course) => {
    const dbCourse = await courseModel.create(course);
    return dbCourse;
}

const getAllCourse = async () => {
    const dbCourses = await courseModel.find({});
    if (!dbCourses) throw new Error("No data found");
    return dbCourses;
}

const getCourseById = async (id) => {
    const course = await courseModel.findById(id);
    if (!course) throw new Error("Course with given id not found");
    return course;
}

module.exports = { getAllCourse, getCourseById, createCourse };