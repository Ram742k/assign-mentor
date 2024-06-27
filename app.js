const express = require('express');
const mongoose = require('mongoose');
const studentRoutes = require('./routes/studentRoutes');
const mentorRoutes = require('./routes/mentorRoutes');

const app = express();

app.use(express.json());

app.use('/', studentRoutes);
app.use('/', mentorRoutes);

module.exports = app;