const express = require('express');
const router = express.Router();
const {getAllCourse,getCourseById,createCourse} = require('../controllers/courseControllers');

router.get('/',getAllCourse);
router.get('/:courseId',getCourseById);
router.post('/',createCourse);


module.exports = router;