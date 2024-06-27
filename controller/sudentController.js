const Student = require('../models/Student');

const studentController = {

    // Create a new student
    createStudent: async (request,response) => {
        try {

            const newStudent = new Student(request.body);
            const savedStudent = await newStudent.save();
            response.status(200).send(savedStudent);
        }catch (error) {
            response.status(500).send({ message: error.message });
        }
        
    },
    getAllStudents: async (request,response) => {
        try {
            const students = await Student.find();
            response.status(200).send(students);
        }catch (error) {
            response.status(500).send({ message: error.message });
        }
    },

    // Assign a student to a mentor
    assignStudentToMentor: async (request,response) => {
        try {
            // const student = await Student.findById(response.params.id);
            const studentId = request.params.id;
            const student = await Student.findById(studentId);
            
            if (!student) {
                return response.status(404).send({ message: 'Student not found' });
            }
            
            if (student.mentor) {
                return response.status(400).send({ message: 'Student already has a mentor' });
            }
            
            student.mentor = request.body.mentor;
            await student.save();
            response.send(student);
          } catch (err) {
            response.status(400).send({ message: err.message });
          }

    },
    // Change mentor for a particular student
    changeMentorForStudent: async (request,response) => {
        try {
            const student = await Student.findById(request.params.id);
            
            if (!student) {
                return response.status(404).send({ message: 'Student not found' });
            }
            if (student.mentor) {
                student.previousMentors.push(student.mentor);
            }
            
            student.mentor = request.body.mentor;
            await student.save();
            response.send(student);
            
        } catch (err) {
            response.status(400).send({ message: err.message });
        }
    },

    // Show previously assigned mentors for a particular student
    getPreviousMentorsForStudent: async (request,response) => {
        try {
            const student = await Student.findById(request.params.id).populate('previousMentors');
            
            if (!student) {
                return response.status(404).send({ message: 'Student not found' });
            }
            
            response.send(student.previousMentors);
            
        }catch (err) {
            response.status(400).send({ message: err.message });
        }
    },


    // Get all unassigned students

    getUnassignedStudents: async (request,response) => {
        try {
            const students = await Student.find({ mentor: null });
            response.send(students);
        }catch (err) {
            response.status(400).send({ message: err.message });
        }
    }
}
module.exports = studentController;
    // 创建学生