const express = require('express');
const mentorRoutes = express.Router();
const mentorController = require('../controller/mentorController');


mentorRoutes.post('/createMentor', mentorController.createMentor);
mentorRoutes.get('/students/:id', mentorController.getStudentsForMentor);
mentorRoutes.post('/assign-multiple/:id', mentorController.assignStudentsToMentor);

module.exports = mentorRoutes;
