const express = require('express');
const router = express.Router();
const db = require('../models');

//Retrieves student information
router.get('/all', (req, res) => {
    db.Info.findAll().then(info => res.send(info));
});

module.exports = router;

//Retrieves single student information
router.get('/find/:id', (req, res) => {
    db.Info.findAll({
        where: {
            student_id: req.params.id
        }
    }).then(info => res.send(info));
});

//Create new student
router.post('/new', (req, res) => {
    db.Info.create({
        student_id: req.body.student_id,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        school: req.body.school,
        course_name: req.body.course_name,
        temperature: req.body.temperature,
    }).then(newStudent => res.send(newStudent));
});

//Deletes student
router.delete('/delete/:id', (req, res) => {
    db.Info.destroy({
        where: {
            student_id: req.params.id
        }
    }).then(() => res.send("Entry Deleted"));
});

//Edit entry
router.put('/edit/:id', (req,res) => {
    db.Info.update(
        {
            student_id: req.body.student_id,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            school: req.body.school,
            course_name: req.body.course_name,
            temperature: req.body.temperature,
        },
        {
            where: {
                id: req.params.id
            }
        }).then(() => res.send("Entry updated"));
})

module.exports = router;