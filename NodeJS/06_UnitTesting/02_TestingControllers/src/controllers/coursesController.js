// const courses = require('../models/coursesModel').courses;
const courseModel = require("../models/courseModel");

const createCourse = async (req, res) => {
    try {
        const course = req.body;
        const dbCourse = await courseModel.create(course);

        res.status(200).json({
            message: "Course created successfully",
            data: dbCourse
        });

    } catch (err) {
        console.error(
            new Date().toISOString(),
            "ERROR: ", err.message,
        );
        res.status(400).json({
            message: err.message,
            error: "BAD_REQUEST",
        });
    }
}

const getAllCourse = async (req, res) => {
    try {
        const dbCourses = await courseModel.find({});
        if (!dbCourses) throw new Error("No data found");

        res.status(200).json({
            message: "Course Fetched successfully",
            data: dbCourses
        })

    } catch (err) {
        console.error(
            new Date().toISOString(),
            "ERROR: ", err.message,
        );
        res.status(400).json({
            message: err.message,
            error: "BAD_REQUEST",
        });
    }
}

const getCourseById = async (req, res) => {
    try {
        const id = req.params.courseId;
        const dbCourses = await courseModel.findById(id);

        if (!dbCourses) throw new Error(`Requested course with id: ${req.params.courseId} not found`);

        res.status(200).json({
            message: "Course Fetched successfully",
            data: dbCourses
        })

    } catch (err) {
        console.error(
            new Date().toISOString(),
            "ERROR: ", err.message,
        );
        res.status(400).json({
            message: err.message,
            error: "BAD_REQUEST",
        });
    }
}

module.exports = { getAllCourse, getCourseById, createCourse };