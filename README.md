# Mentor and Student Assigning with Database 🚀

## Introduction

This API allows you to create mentors and students, assign students to mentors, change mentor assignments, and retrieve information about mentor-student relationships. The API is built using Node.js and MongoDB.

## API Endpoints

### 1. Create Mentor 👨‍🏫

**Endpoint:** `POST /api/createMentor`

**Description:** Creates a new mentor.


### 2. Create Student 👨‍🎓

**Endpoint:** `POST /api/create`

**Description:** Creates a new student.


### 3. Assign Student to Mentor 👫

**Endpoint:** `POST /api/assign/:id`

**Description:** Assigns a student to a mentor.


**Endpoint:** `POST /api/assign-multiple/:id`

**Description:** Select one mentor and Add multiple Student.


### 4. Assign or Change Mentor for Particular Student 🔄

**Endpoint:** `PUT /api/change-mentor/:id`

**Description:** Assigns or changes the mentor for a particular student.


### 5.  Show All Students for a Particular Mentor 📚

**Endpoint:** `GET /api/students/:id`

**Description:** Retrieves all students assigned to a particular mentor.


### 6. Show Previously Assigned Mentors for a Particular Student 🕰️

**Endpoint:** `GET /api//previous-mentors/:id`

**Description:** Retrieves a list of all mentors.

### 7. Get all Mentor List

**Endpoint:** `GET /api/getAllMentors`

**Description:** Retrieves a list of all mentors.


### 8. Get all Student List

**Endpoint:** `GET /api/getAll`

**Description:** Retrieves a list of all students.


### 9. Get all Unassigned Student List

**Endpoint:** `GET /api/unAssignedStudents`

**Description:** Retrieves a list of all unassigned students.


## Postman Collection

[Postman Collection](https://documenter.getpostman.com/view/26564023/2sA3dskDAe)

## Deployment

This project is deployed on [Rendor](https://assign-mentor-qpp2.onrender.com/).

## Acknowledgments

- [MongoDB](https://www.mongodb.com/)
- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Rendor](https://rendor.com/)
- [Postman](https://www.postman.com/)