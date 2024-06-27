# Mentor and Student Assigning with Database 🚀

## Introduction

This API allows you to create mentors and students, assign students to mentors, change mentor assignments, and retrieve information about mentor-student relationships. The API is built using Node.js and MongoDB.

## API Endpoints

### 1. Create Mentor 👨‍🏫

**Endpoint:** `POST /api/createMentor`

**Description:** Creates a new mentor.

**Request Body:**
```json
{
  "name": "Mentor Name"
}

```

### 2. Create Student 👨‍🎓

**Endpoint:** `POST /api/create`

**Description:** Creates a new student.

**Request Body:**

```json
{
  "name": "Student Name"
}

```

### 3. Assign Student to Mentor 👫

**Endpoint:** `POST /api/assign/:id`

**Description:** Assigns a student to a mentor.


**Endpoint:** `POST /api/assign-multiple/:id`

**Description:** Select one mentor and Add multiple Student.

**Request Body:** 

``` json
{
  "id": [
    "60c72b315f1b2c6f1e8b4568",
    "60c72b355f1b2c6f1e8b4569"
  ]
}

```

 #### Unassigned Students List

 **Endpoint:** `POST /api/unAssignedStudents`

**Description:** A student who has a mentor should not be shown in List

### 4. Assign or Change Mentor for Particular Student 🔄

**Endpoint:** `PUT /api/change-mentor/:id`

**Description:** Assigns or changes the mentor for a particular student.

**Request Body:** 
``` json
{
  "mentor": "60c72b2f5f1b2c6f1e8b4567"
}
```

### 5.  Show All Students for a Particular Mentor 📚

**Endpoint:** `GET /api/students/:id`

**Description:** Retrieves all students assigned to a particular mentor.

**Response Body:**

```json
[
  {
    "_id": "60c72b315f1b2c6f1e8b4568",
    "name": "Student 1",
    "mentor": "60c72b2f5f1b2c6f1e8b4567",
    "previousMentors": [],
    "__v": 0
  },
  {
    "_id": "60c72b355f1b2c6f1e8b4569",
    "name": "Student 2",
    "mentor": "60c72b2f5f1b2c6f1e8b4567",
    "previousMentors": [],
    "__v": 0
  }
]


```

### 6. Show Previously Assigned Mentors for a Particular Student 🕰️

**Endpoint:** `GET /api//previous-mentors/:id`

**Description:** Retrieves a list of all mentors.

**Response Body:**

```json
[
  {
    "_id": "60c72b1e5f1b2c6f1e8b4566",
    "name": "Mentor 1",
    "__v": 0
  },
  {
    "_id": "60c72b2f5f1b2c6f1e8b4567",
    "name": "Mentor 2",
    "__v": 0
  }
]


```

## Postman Collection

[Postman Collection](https://documenter.getpostman.com/view/26564023/2sA3dskDAe)

## Deployment

This project is deployed on [Rendor](https://mentor-student-assignment-app.herokuapp.com/).




## Acknowledgments

- [MongoDB](https://www.mongodb.com/)
- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Rendor](https://rendor.com/)
- [Postman](https://www.postman.com/)