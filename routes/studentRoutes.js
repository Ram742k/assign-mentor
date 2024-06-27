const express = require('express');
const studentRoutes = express.Router();
const studentController = require('../controller/sudentController');


studentRoutes.post('/create', studentController.createStudent);
studentRoutes.get('/getAll', studentController.getAllStudents);
studentRoutes.post('/assign/:id', studentController.assignStudentToMentor)
studentRoutes.put('/change-mentor/:id', studentController.changeMentorForStudent);
studentRoutes.get('/previous-mentors/:id', studentController.getPreviousMentorsForStudent);
studentRoutes.get('/unAssignedStudents',studentController.getUnassignedStudents);


module.exports = studentRoutes;