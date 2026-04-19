const express = require('express');
const router = express.Router();
const { getAllCourse, getCourseById, createCourse } = require('../controllers/courseControllers');
const {validatToken} = require('../middlewares/authMiddleware');

router.use(express.json());
// router.use(validatToken);

router.post('/create', async (req, res) => {
    const course = req.body;
    const dbCourse = await createCourse(course);
    res.send(dbCourse);
});

router.get('/', validatToken, async (req, res) => {
    try {
        const dbCourses = await getAllCourse();
        res.send(dbCourses);
    } catch (err) {
        res.send(err.message);
    }
});

router.get('/:courseId', validatToken, async (req, res) => {
    try {
        const id = req.params.courseId;
        const dbCourse = await getCourseById(id);
        res.send(dbCourse);
    } catch {
        res.send(`Requested course with id: ${req.params.courseId} not found`);
    }
});

module.exports = router;