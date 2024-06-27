const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MentorSchema = new Schema({
  name: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Mentor', MentorSchema, 'mentors');
