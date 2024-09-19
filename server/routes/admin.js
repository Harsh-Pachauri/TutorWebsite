const express = require('express');
const router = express.Router();
const Tutor = require('../models/tutor');
const Student = require('../models/student');
const auth = require('../middlewares/auth');

// Get all tutors
router.get('/tutors', auth, async (req, res) => {
    try {
        const tutors = await Tutor.find();
        res.json(tutors);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Get all students
router.get('/students', auth, async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Delete a tutor
router.delete('/tutor/:id', auth, async (req, res) => {
    try {
        await Tutor.findByIdAndDelete(req.params.id);
        res.send('Tutor deleted');
    } catch (err) {
        res.status(500).send(err);
    }
});

// Delete a student
router.delete('/student/:id', auth, async (req, res) => {
    try {
        await Student.findByIdAndDelete(req.params.id);
        res.send('Student deleted');
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;
