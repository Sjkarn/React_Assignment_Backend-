const express= require('express');
const router= express.Router();
const StudentController= require("../controllers/studentController");

router.post("/student", StudentController.createStudent);
router.get("/student_details", StudentController.getStudent);

module.exports= router;