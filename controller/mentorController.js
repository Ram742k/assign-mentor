    const { response } = require("../app");
const mentor = require("../models/Mentor");
    const student = require("../models/Student");

    const mentorController = {

    createMentor: async (request,response) => {
        try{
            const newMentor = new mentor(request.body);
            const savedMentor = await newMentor.save();
            response.status(200).send(savedMentor);
        }catch(err){
            response.status(500).send(err);
        }

    },
    // Get all students for a particular mentor
    getStudentsForMentor: async (request,response) => {
        try{
            const students = await student.find({ mentor: request.params.id });
            // only return names
            const names = students.map(student => {
                return {
                    name: student.name,
                    id: student._id
                }
            })
            
            response.status(200).send(names);
            
        }catch(err){
            response.status(500).send(err);
        }
    },
    // Assign multiple students to a mentor
    assignStudentsToMentor: async (request,response) => {
        try {
            // Ensure the request body contains an array of IDs
            const studentIds = request.body.id;
        
            // Validate that studentIds is an array
            if (!Array.isArray(studentIds)) {
              return response.status(400).json({ message: "Invalid data format. 'id' should be an array of student IDs." });
            }
        
            // Find students with the provided IDs who do not have a mentor assigned
            const students = await student.find({ _id: { $in: studentIds }, mentor: null });
        
            if (students.length === 0) {
              return response.status(400).json({ message: "No students found or all students already have mentors assigned." });
            }
        
            // Update the students with the mentor ID
            await student.updateMany(
              { _id: { $in: studentIds }, mentor: null },
              { mentor: request.params.id }
            );
        
            // Respond with the updated students
            response.status(200).json(students);
          } catch (err) {
            response.status(500).json({ message: err.message });
          }
        },

        getAllMentors: async (request,response) => {
            try{
                const mentors = await mentor.find();
                response.status(200).send(mentors);
            }catch(err){
                response.status(500).send(err);
            }
        }

    }
    module.exports = mentorController;