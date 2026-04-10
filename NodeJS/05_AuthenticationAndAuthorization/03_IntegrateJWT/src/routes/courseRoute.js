const express = require('express');
const router = express.Router();
const { getAllCourse, getCourseById, createCourse } = require('../controllers/courseControllers');

router.use(express.json());

router.post('/create', async (req, res) => {
    const course = req.body;
    const dbCourse = await createCourse(course);
    res.send(dbCourse);
});

router.get('/', async (req, res) => {
    try {
        const dbCourses = await getAllCourse();
        res.send(dbCourses);
    } catch (err) {
        res.send(err.message);
    }
});

router.get('/:courseId', async (req, res) => {
    try {
        const id = req.params.courseId;
        const dbCourse = await getCourseById(id);
        res.send(dbCourse);
    } catch {
        res.send(`Requested course with id: ${req.params.courseId} not found`);
    }
});

module.exports = router;