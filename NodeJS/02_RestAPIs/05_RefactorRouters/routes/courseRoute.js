const express = require('express');
const router = express.Router();
const {getAllCourse,getCourseById,createCourse} = require('../controllers/courseControllers');


// router.get('/api/v1/courses',getAllCourse);
// router.get('/api/v1/courses/:courseId',getCourseById);
// router.post('/api/v1/courses',createCourse);

router.use(express.json()); 

router.get('/',getAllCourse);
router.get('/:courseId',getCourseById);
router.post('/',createCourse);


module.exports = router;