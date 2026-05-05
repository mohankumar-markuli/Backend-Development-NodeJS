const express = require('express');
const router = express.Router();
const { getAllCourse, getCourseById, createCourse } = require('../controllers/courseController');
const { userAuth } = require('../middlewares/authMiddleware');

router.use(express.json());
// router.use(userAuth); - not good approch

router.post('/create', userAuth, createCourse);
router.get('/', userAuth, getAllCourse);
router.get('/:courseId', userAuth, getCourseById);

module.exports = router;